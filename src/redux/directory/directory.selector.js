import { createSelector } from "reselect";

// input selector
const selectDirectory = (state) => state.directory;

// output selector
export const selectDirecotrySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
