import React from 'react';
import {Link} from 'react-router-dom';

const Bottombar = () => {
    return (
        <div className="navbar bg-dark">
            <h1>
                <Link to="/">
                    <i className="fas fa-code">AdvoCat</i>
                </Link>
            </h1>
            <ul>
                <li><Link to="profiles.html">Category 1</Link></li>
                <li><Link to="/register">Category 2</Link></li>
                <li><Link to="/login">Category 3</Link></li>
            </ul>
        </div>
    )
}

export default Bottombar