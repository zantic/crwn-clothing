import React from 'react'
import { connect } from 'react-redux'

import { selectCartitems } from '../../redux/cart/cart-selectors'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <CustomButton>GO TO CHEKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartitems(state),
})

export default connect(mapStateToProps)(CartDropdown)
