import React from 'react';
import { useHistory } from 'react-router-dom'

function Login(props) {
    let history = useHistory();
    var userName, password;
    function login() {
        if (userName === password) {
            history.push('/dashboard')
        }
        else{

            history.push('/authfail')
        }
    }

    function getUserName(val) {
        console.log("val", val.target.value)
        userName = val.target.value
    }

    function getPassword(val) {
        console.log("val", val.target.value)
        password = val.target.value
    }
    
    return (
        
        <div>
            <input onChange={getUserName} type="text" placeholder="enter name"></input>
            <input onChange={getPassword} type="text" placeholder="enter password"></input>
            <button class="btn btn-primary" onClick={login}>Login</button>
        </div>
    );
}

export default Login;