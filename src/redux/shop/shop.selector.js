import { createSelector } from "reselect";
import memoize from "lodash.memoize";
//import { createStore } from "redux";

// input selector
const selectShop = (state) => state.shop;

// output selector
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsForPreviews = createSelector(
  [selectShopCollections],
  // convert object to array
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

/* 
collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
*/

/*   function selectCollection () {
    function collectionUrlParam () {
      const createSelector () 
    }
  } 
  const selectCollection(collectionUrlParam)(createSelection)

  */

// collectionUrlParam is a func take collection id -- > selectCollection(ownProps.match.params.collectionId);
