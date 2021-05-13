import React from "react";
import './sign-in.scss';
import {FormInput} from '../form-input/form-input';
import {CustomButton} from '../custom-button/custom-button';
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }catch (e) {
            console.error(e);
        }


    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange} required label='email'/>

                    <FormInput type='password' label='password' name='password' handleChange={this.handleChange} required value={this.state.password} />

                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form' >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

