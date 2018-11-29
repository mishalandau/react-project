export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  TOGGLE_CART = 'TOGGLE_CART',
}

export interface IAddToCartAction { type: ActionTypes.ADD_TO_CART, payload: number }
export interface IToggleCartAction { type: ActionTypes.TOGGLE_CART, payload: number }
export interface IRemoveFromCartAction { type: ActionTypes.REMOVE_FROM_CART, payload: number }

export type Action = IAddToCartAction | IRemoveFromCartAction | IToggleCartAction;

export const addToCart = (productId: number) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: productId,
  };
}

export const toggleCart = (productId: number) => {
  return {
    type: ActionTypes.TOGGLE_CART,
    payload: productId,
  };
}