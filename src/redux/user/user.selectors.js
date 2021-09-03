import { createSelector } from "reselect";

// input selector
const selectUser = (state) => state.user;

// output selector
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

// createSelector takes two args,
// 1. collection of array or something
// 2. the func and return the value we want from the selector
