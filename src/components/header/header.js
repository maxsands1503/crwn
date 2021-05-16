import React from "react";
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from "react-redux";

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='header-option'>SHOP</Link>
            <Link to='/shop' className='header-option'>CONTACT</Link>
            {
                currentUser ? <div className='header-option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                <Link to='/signin' className='header-option'>SIGN IN</Link>
            }

        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
