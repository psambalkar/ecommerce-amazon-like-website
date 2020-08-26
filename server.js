const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const path=require('path');

if(process.env.NODE_ENV!=='production')require('dotenv').config();
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);
const app=express();
const port =process.env.PORT|| 5000;
app.use(bodyParser.json());//converts any api calls into json
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());  ///allows us to make cross origin request for our frontend running on port 3000 to talk to backend running on port 5000
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'client/build')));
    app.get('*',function(req,res){
        res.sendFile(path.join(__dirname,'client/build','index.html'));
    })
}
app.listen(port,error=>{
    if(error) throw error;
    console.log('server running on port ' + port);
})
app.post('/payment',(req,res)=>{   //req from frontend
    const body={
        source:req.body.token.id,
        amount:req.body.amount,
        currency:'usd'
    };
    stripe.charges.create(body,(stripeErr,stripeRes)=>{  //send this is to stripe api
        if(stripeErr){                             //send response to frontend on sucess or failure 
            res.status(500).send({error:stripeErr});
        }else
        {
            res.status(200).send({success:stripeRes});
        }
    });
});