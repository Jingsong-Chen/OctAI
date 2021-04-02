import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux'; // allows us to work with redux
import {Link, Redirect} from 'react-router-dom';
// bring in actions
import {setAlert} from '../../actions/alert'; // brings in set alert action
import {register} from '../../actions/auth'; // brings in set alert action
import PropTypes from 'prop-types'

// every time we render this component, the function is called, and a
// piece of HTML is returned at the end
const Register = ({setAlert, register, isAuthenticated}) => {
    // create default vals for useState hook; useState() always returns
    // two values: state and function to update state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    // create a variable for each field in form data; use strange to just
    // distinguish them for the ease of demonstration; the values on the 
    // form is hooked to formData states; without the we have to do 
    // formData.name etc. all the time
    const {name, email, password, password2} = formData;
    function onChange(event) {
        // console.log(event.target.name);
        // console.log(event.target.value);
        setFormData(preFormData => {
            // ...formData spread out all the fields in the state; without it, the state 
            // will be overwritten with return value which only include the field changed
            return {...preFormData, [event.target.name]: event.target.value}
        })
        // console.log(formData);
    }

    async function onSubmit(e) {
        // the default action that belongs to the event will not occur. 
        // For example, this can be useful when: Clicking on a "Submit" button, prevent it 
        // from submitting a form. 
        // Clicking on a link, prevent the link from following the URL
        e.preventDefault();
        // console.log(p_assword);
        if (formData.password !== formData.password2) {
            // check App.css for different types of alerts 
            setAlert('Passwords do not match', 'danger');
        } else {
            // console.log(name);
            // register is an action function in auth
            register({name, email, password});
        }
    }

    // redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }
    
    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            {/* The form starts here! */}
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        value={name}
                        onChange={event => onChange(event)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email" 
                        value={email}
                        onChange={event => onChange(event)}
                        required
                    />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image, use a
                        Gravatar email
                    </small>
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
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={event => onChange(event)}
                        minLength="6"
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

// actions must be passed into connect to be used
// the first parameter is the state we want to map from
// the second is an object with actions which allows props.action
// connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
export default connect(
    mapStateToProps, 
    // export set alert to use it in other files
    {setAlert, register}
    ) (Register);