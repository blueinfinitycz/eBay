import { createSelector } from 'reselect';

const selectWholeWishList = (state: any) => state.WishListReducer.wishListData;

const selectSearchFieldData = (state: any) => state.SearchFieldReducer.searchFieldData;

export const wishList = createSelector(selectWholeWishList, (wishListData) => wishListData);

export const searchField = createSelector(selectSearchFieldData, (searchFieldData) => searchFieldData);
