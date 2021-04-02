import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function onSubmit(e) {
    // // convert form to buffer
    // await axios.post(`/api/music/upload`);
}

function onChange(e) {
    console.log(e);
}

const Upload = () => {
    return (
        <Fragment>
            <h1 className="large text-primary">Upload File</h1>
            <p className="lead">Enter the serial number:</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Serial number" 
                        name="serial_number" 
                        // value={serial_number}
                        onChange={event => onChange(event)}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        // value={name}
                        onChange={event => onChange(event)}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Genre" 
                        name="genre" 
                        // value={genre}
                        onChange={event => onChange(event)}
                        required
                    />
                    <input 
                        type="file" 
                        placeholder="Content" 
                        name="content" 
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