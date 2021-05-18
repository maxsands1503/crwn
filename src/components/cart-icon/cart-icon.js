import React from 'react';
import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { showHideCartDropDown } from '../../redux/cart/cart.action';
const CartIcon = ({showHideCartDropDown}) => (
    <div className='cart-icon' onClick={showHideCartDropDown}>
        <ShoppingIcon  className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    showHideCartDropDown: () => dispatch(showHideCartDropDown())
})

export default connect(null, mapDispatchToProps)(CartIcon);
