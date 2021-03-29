import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../globalVariables';

export interface IItem {
  name: string;
  id: number | string;
}

export interface IWishListState {
  wishListData: Array<IItem>;
}

const initState: IWishListState = {
  wishListData: [],
};

export interface IWishListAction {
  type: string;
  payload: IItem;
}

const WishListReducer = (state = initState, action: IWishListAction) => {
  if (action.type === ADD_TO_WISHLIST) {
    return { ...state, wishListData: [...state.wishListData, action.payload] };
  }

  if (action.type === REMOVE_FROM_WISHLIST) {
    return { ...state, wishListData: state.wishListData.filter((item) => item.id.toString().toLowerCase() !== action.payload.toString().toLowerCase()) };
  }

  return { ...state };
};

export default WishListReducer;
