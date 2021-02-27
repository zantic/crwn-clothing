import { createSelector } from 'reselect'

const selectCart = ({ cart }) => cart

export const selectCartitems = createSelector(
  [selectCart], 
  cart => cart.cartItems
)

export const slectCartItemsCount = createSelector(
  [selectCartitems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
)
