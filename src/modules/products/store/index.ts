import { IProduct } from '../ProductModel';
import { Action, ActionTypes } from './actions';

// Define our State interface for the current reducer
export interface IState {
  nextId: number,
  data: IProduct[]
}

// Define our initialState
export const initialState: IState = {
  nextId: 1,
  data: [] // We don't have any todos at the start of the app
}

export default function products(state = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.ADD_PRODUCTS: {
      const nextId = state.nextId +=1;
      return {
        ...state,
        nextId,
        data: [...state.data, ...action.payload],
      };
    }

    default:
      return state
  }
}