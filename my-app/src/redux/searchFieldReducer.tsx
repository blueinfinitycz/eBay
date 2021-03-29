import { SEARCH_ON_CHANGE } from '../globalVariables';
import { IJson } from '../types/searchField';

export interface ISearchFieldAction {
  type: string;
  payload: IJson | undefined;
}

export interface ISearchFieldState {
  searchFieldData: IJson | undefined;
}

const reducer = (state: ISearchFieldState, action: ISearchFieldAction) => {
  if (action.type === SEARCH_ON_CHANGE) {
    return { ...state, searchFieldData: action.payload };
  }
  return { ...state };
};

export default reducer;
