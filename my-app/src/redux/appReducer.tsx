import { REQUEST_END, REQUEST_ERROR, REQUEST_START } from '../globalVariables';

export interface IAppState {
  isLoading: boolean;
  error: string;
}

const init: IAppState = {
  isLoading: false,
  error: '',
};

export interface IAppAction {
  type: string;
  payload: any;
}

const reducer = (state = init, action: IAppAction) => {
  switch (action.type) {
    case REQUEST_START:
      return { ...state, isLoading: true };
      break;
    case REQUEST_END:
      return { ...state, isLoading: false };
      break;
    case REQUEST_ERROR:
      return { ...state, isLoading: false, error: 'Problem with connection to server, try later again' };
      break;
    default:
      return { ...state };
  }
};

export default reducer;
