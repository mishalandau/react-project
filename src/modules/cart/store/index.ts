import { Action, ActionTypes } from './actions';

// Define our State interface for the current reducer
export interface IState {
  productsIds: number[];
}

// Define our initialState
export const initialState: IState = {
  productsIds: []
}

const addToCart = (state: IState, action: Action) => {
  return {
    ...state,
    productsIds: [...state.productsIds, action.payload],
  };
}

const removeFromCart = (state: IState, action: Action) => {
  return {
    ...state,
    productsIds: state.productsIds.filter((id) => {
      return id !== action.payload;
    }),
  };
}

const isSelected = (state: IState, action: Action) => {
  return state.productsIds.includes(action.payload);
}

export default function cart(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      if (!isSelected(state, action)) {
        return addToCart(state, action);
      }
      return state;
    }
    case ActionTypes.REMOVE_FROM_CART: {
      return removeFromCart(state, action);
    }
    case ActionTypes.TOGGLE_CART: {
      if (!isSelected(state, action)) {
        return addToCart(state, action);
      } else {
        return removeFromCart(state, action);
      }
    }

    default:
      return state
  }
}