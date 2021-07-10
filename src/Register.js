import React from 'react';
import './Register.css';
function Register(props) {
    return (
        <div>

            <input type="text" placeholder="enter your name"></input>
            <input type="text" placeholder="enter your phone-no"></input>
            <input type="text" placeholder="enter your email"></input>
            <button className="btn btn-primary btn-click">click</button>
        </div>
    );
}

export default Register;