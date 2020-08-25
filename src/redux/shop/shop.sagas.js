import { call, put, takeLatest,all} from 'redux-saga/effects';
import  {firestore,convertCollectionsSnapShotToMap} from '../../firebase/firebase.util';
import {fetchCollectionsSuccess,fetchCollectionsFailure} from './shop.actions';
import ShopActionTypes from './shop.types';
  
export function* fetchCollectionsAsync(){    //generator function
 try{
     const collectionRef=firestore.collection('collections');
     const snapshot=yield collectionRef.get();
     const collectionsMap=yield call(convertCollectionsSnapShotToMap,snapshot);
     yield put(fetchCollectionsSuccess(collectionsMap))
 }catch(err)
 {
 yield put(fetchCollectionsFailure(err.message));
 }
}
export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}
export function* shopSagas(){
    yield all([call(fetchCollectionsStart)]);
}