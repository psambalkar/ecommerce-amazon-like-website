import {createSelector} from 'reselect';

const selectShop=state=>state.shop;
export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)
export const selectCollectionsForPreview=createSelector(
    [selectCollections],
    collections=>Object.keys(collections).map(key=>collections[key])   //object.keys retrsn us an array of keys and then we map over that array passing key to get collections
)
export const selectCollection=collectionUrlParam=>
createSelector(
    [selectCollections],
    collections=>collections[collectionUrlParam]
    );
