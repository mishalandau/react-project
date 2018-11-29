import { createSelector } from 'reselect';
​
const selectedProductIds = (state: any) => state.cart.productsIds;
const getProducts = (state: any) => state.products.data;
​
export const getFullDataProductsInCart = createSelector(
  [selectedProductIds, getProducts],
  (selectedIds, products) => {
    return products.filter(({ id }: any) => selectedIds.includes(id));
  }
)