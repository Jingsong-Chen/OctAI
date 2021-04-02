import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">AdvoCat</h1>
            <p className="lead">
              Share your healthcare experience!
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
              <Link to="/login" className="btn btn-light">Login</Link>
              <Link to="/music" className="btn btn-light">Upload Complaint</Link>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Landing
