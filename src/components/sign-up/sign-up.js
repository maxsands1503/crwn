import React from 'react';
import {FormInput} from "../form-input/form-input";
import {CustomButton} from "../custom-button/custom-button";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import './sign-up.scss'
export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        console.log(password, confirmPassword);
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({displayName: '',
                email: '',
                password: '',
                confirmPassword: ''})
        }catch (e) {
            console.log(e);
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='text' label='display name' name='displayName' handleChange={this.handleChange} required
                               value={displayName}/>
                    <FormInput type='email' name='email' value={email} handleChange={this.handleChange} required
                               label='email'/>
                    <FormInput type='password' label='password' name='password' handleChange={this.handleChange} required
                               value={password}/>
                    <FormInput type='password' label='confirm password' name='confirmPassword' handleChange={this.handleChange} required
                               value={confirmPassword}/>


                    <CustomButton type='submit' value='Submit Form'>Sign Up</CustomButton>

                </form>
            </div>

        )
    }
}
