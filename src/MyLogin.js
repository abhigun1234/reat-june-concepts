import React from 'react';
import Login from './Login';
import { useHistory } from 'react-router-dom'
function MyLogin(props) {
    var userName, password;
    let history = useHistory()
    function getUserName(val) {
        console.log("val", val.target.value)
        userName = val.target.value

    }

    function getPassword(val) {
        console.log("val", val.target.value)
        password = val.target.value

    }
    function login() {
        if (userName === 'abhi' && password === 'abhi123') {
            history.push('/dashboard')
        }

    }
    return (
        <div>
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input onChange={getUserName} type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw"><b>Password</b></label>
                <input onChange={getPassword} type="password" placeholder="Enter Password" name="psw" required />

                <button onClick={login} type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </div>
        </div>
    );
}

export default MyLogin;