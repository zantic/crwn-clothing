import { createSelector } from 'reselect'

const selectCart = ({ cart }) => cart

export const selectCartitems = createSelector(
  [selectCart], 
  cart => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden,
)

export const slectCartItemsCount = createSelector(
  [selectCartitems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
)

export const selectCartTotal = createSelector(
  [selectCartitems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
)
