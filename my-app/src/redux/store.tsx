import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AppReducer, { IAppAction, IAppState } from './appReducer';
import SearchFieldReducer, { ISearchFieldAction, ISearchFieldState } from './searchFieldReducer';
import WishListReducer from './wishListReducer';

export interface IRootState {
  AppReducer: (state: IAppState, action: IAppAction) => void;
  SearchFieldReducer: (state: ISearchFieldState, action: ISearchFieldAction) => ISearchFieldState;
}

const rootReducer = combineReducers({ AppReducer, SearchFieldReducer, WishListReducer });
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
