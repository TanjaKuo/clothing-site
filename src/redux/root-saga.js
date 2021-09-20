import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sages";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
