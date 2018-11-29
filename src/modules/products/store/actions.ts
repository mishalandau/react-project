import { IProduct } from '../ProductModel';
import productService from '../ProductService';

export enum ActionTypes {
  ADD_PRODUCTS = 'ADD_PRODUCTS'
}

export interface IAddTodoAction { type: ActionTypes.ADD_PRODUCTS, payload: IProduct[] }

export const addProducts = (index: number) => (dispatch: any) => {
  return productService.fetchProducts(index).then((data) => {
    return dispatch({ type: ActionTypes.ADD_PRODUCTS, payload: data });
  });
}


export type Action = IAddTodoAction