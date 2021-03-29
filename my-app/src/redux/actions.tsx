import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, REQUEST_END, REQUEST_ERROR, REQUEST_START, SEARCH_ON_CHANGE } from '../globalVariables';
import { IJson, ISearch } from '../types/searchField';
import { getJson } from '../utils/promise';
import { IItem } from './wishListReducer';

const requestStart = () => ({ type: REQUEST_START });
const requestEnd = () => ({ type: REQUEST_END });
const requestError = (message: string) => ({ type: REQUEST_ERROR, payload: message });
const requestSearchChange = (data: any) => ({ type: SEARCH_ON_CHANGE, payload: data });
const requestAddToWishList = ({ name, id }: IItem) => ({ type: ADD_TO_WISHLIST, payload: { name, id } });
const requestRemoveToWishList = (id: number) => ({ type: REMOVE_FROM_WISHLIST, payload: id });

const filterData = (data: IJson, searchedTxt: ISearch) => {
  const { items } = data;
  return items.filter((item) => item.volumeInfo.title.split(' ').find((itm) => itm.toLowerCase() === searchedTxt.search.toLowerCase()));
};

export const retrieveData = (searchedText: ISearch) => {
  return (dispatch: (arg: { type: string; payload?: {} | string }) => void) => {
    dispatch(requestStart());

    // EASY WAY TO USE FOR LOCAL PURPOSE (with debouncing)
    // const promise = new Promise<IJson>((resolve) => {
    //   setTimeout(() => {
    //     resolve(dataJson);
    //   }, 1000);
    // });

    // USED WITH LOCAL MOCK SERVER (POSTMAN), there u can set debouncing (delay) for testing purpose

    getJson('https://43d8b06b-558c-4c06-8247-7f7e9bb214f3.mock.pstmn.io/ebay/books')
      .then((e) => e.json())
      .then((e) => {
        const res = filterData(e, searchedText);
        dispatch(requestEnd());
        dispatch(requestSearchChange(res));
      })
      .catch((error) => requestError(error.message));
  };
};

export const addDataToWishList = ({ name, id }: IItem) => {
  return (dispatch: (arg: { type: string; payload?: number | any }) => void) => {
    dispatch(requestAddToWishList({ name, id }));
  };
};

export const removeFromWishList = (id: number) => {
  return (dispatch: (arg: { type: string; payload?: number }) => void) => {
    dispatch(requestRemoveToWishList(id));
  };
};
