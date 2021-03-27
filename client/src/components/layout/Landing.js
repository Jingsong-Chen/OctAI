import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">OctAI Music Generator</h1>
            <p className="lead">
              Create your loyalty free music with our AI!
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
              <Link to="/login" className="btn btn-light">Login</Link>
              <Link to="/music" className="btn btn-light">Get Music</Link>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Landing
