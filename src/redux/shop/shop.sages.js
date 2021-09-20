// move collection from action to saga
// takeEvery -> listen for evry action of specific type that we pass to

import { takeEvery, put, call, takeLatest } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "../shop/shop.action.js";

import { ShopActionTypes } from "./shop.types";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collection");
    const snapshot = yield collectionRef.get();
    //const collectionsMap = convertCollectionsSnapshotToMap(snapshot), we can do this, but we want to yield and call this, in case it takes longer than we expect
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
  /* collectionRef
    .get()
    .then((snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionMap));
    })
    .catch((error) => dispatch(fetchCollectionsFailure(error.message))); */
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
