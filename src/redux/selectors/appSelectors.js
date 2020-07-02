import { createSelector } from "reselect";

const initializeApp = (state) => {
  return state.app.initialized;
}

export const initializeAppSucess = createSelector(
  initializeApp, (initializations) => {
    return initializations = true;
  }
)
