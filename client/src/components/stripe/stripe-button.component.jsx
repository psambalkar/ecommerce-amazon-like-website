import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const onToken=(token)=>{
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token:token
            }
        }).then(res=>{ console.log(res);alert('Payment Successful')}).catch(error=>{
        console.log('Payment Error :', error);
        alert('there was an issue with your payment.Please sure you use the provided credit card details');
        });
    }

    const publishableKey='pk_test_51HHmnwCErTs07O6cQD6ktAxK2xLG4yRTj8CIUOC5hY1RLN2o1zTkGOQPXFSMbcCPrUkr9XrNOrTYWvcy4gZ9nhMh00Ju6JDOBF';
    return(
        <StripeCheckout
        label='Pay Now'
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;