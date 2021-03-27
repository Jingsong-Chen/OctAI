import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {email, password} = formData;

    function onChange(event) {
        setFormData(preFormData => {
            return {...preFormData, [event.target.name]: event.target.value}
        })
    }

    async function onSubmit(e) {
        e.preventDefault();
        console.log('CLKICKED');
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
            {/* The form starts here! */}
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email" 
                        value={email}
                        onChange={event => onChange(event)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={event => onChange(event)}
                        minLength="6"
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Sign In" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </Fragment>
    )
}

export default Login