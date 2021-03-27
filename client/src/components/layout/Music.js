import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getSerial} from '../../actions/music/getSerial';
import Spinner from './Spinner';

// get music serial number and request corresponding music
const Music = ({getSerial, music}) => {
    // create default vals for useState hook
    const [formData, setFormData] = useState({
        serial_number: '',
    });
    const {serial_number} = formData;

    function onChange(event) {
        // console.log(event.target.name);
        setFormData(preFormData => {
            // ...formData spread out all the fields in the state; without it, the state 
            // will be overwritten with return value which only include the field changed
            return {...preFormData, [event.target.name]: event.target.value}
        })
    }

    async function onSubmit(e) {
        e.preventDefault();
        getSerial({serial_number});
        // console.log(music);
    }
    
    return (
        <Fragment>
            <h1 className="large text-primary">Get Music</h1>
            <p className="lead">Enter the serial number:</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Serial number" 
                        name="serial_number" 
                        value={serial_number}
                        onChange={event => onChange(event)}
                        required
                    />
                </div>
                <input id='button' type="submit" className="btn btn-primary" value="Get" />
            </form>
            <br/>
            {music.loading ? <Fragment></Fragment> : 
            music.music === null ? <Fragment>no music</Fragment> :  
            <Fragment>{JSON.stringify(music.music)}</Fragment>}
            <p id='spinner'></p>
            <p id='music-box'></p>
        </Fragment>
    )
}

Music.propTypes = {
    getSerial: PropTypes.func.isRequired,
    music: PropTypes.object.isRequired
}

// check the index reducer for available states
const mapStateToProps = state => ({
    music: state.music,
});

export default connect(
    mapStateToProps, 
    {getSerial}
    ) (Music);