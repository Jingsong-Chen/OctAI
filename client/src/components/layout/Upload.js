import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Upload = () => {
    return (
        <Fragment>
            <h1 className="large text-primary">Upload Music</h1>
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
        </Fragment>
    )
}

export default Upload