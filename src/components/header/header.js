import React from "react";
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='header-option'>SHOP</Link>
            <Link to='/shop' className='header-option'>CONTACT</Link>
            <Link to='/signin' className='header-option'>SIGN IN</Link>
        </div>
    </div>
)

export default Header;
