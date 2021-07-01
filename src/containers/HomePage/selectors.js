import {createSelector} from "reselect";

const homePageState=(state)=>state.homePage;

export const makeSelectUsers = createSelector(
  homePageState,
  (homePage) => homePage.users
);



export const makeSelectTests = createSelector(
  homePageState,
  (homePage) => homePage.tests
);
