import React from "react";
import './custom-button.scss';

export const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button type='button' className={`${isGoogleSignIn? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)


