// import React from 'react';
import { useHistory } from 'react-router-dom'
import './Register.css';
import React, { Component } from 'react';
import axios from 'axios'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'
// import { Navigate } from 'react-router-dom';
class Login extends Component {
    constructor() {

        super()
        this.state = { email: '', password: '' ,start:false}
    }
    // getUsername = (event) => {
    //     console.log("data", event.target.value)
    //     this.setState({ name: event.target.value })

    // }
    getEmail = (event) => {
        console.log("data", event.target.value)
        this.setState({ email: event.target.value })

    }
    getPassword = (event) => {
        console.log("data", event.target.value)
        this.setState({ password: event.target.value })

    }
//     nevigate(data){
//         const navigate = Navigate();                
        
//  if (response) {
//     navigate("/dashboard" , { replace: "/" } );
//             }
//             else{
    
//                 alert(response)
//             }

//     }
    onSubmitHandle = (event) => {
    // alert("login")
  
        console.log("email", this.state.email)
        console.log("password", this.state.password)
        event.preventDefault()
         this.setState({start:true})
         console.log("alling api")
        axios.post("http://localhost:3000/api/auth/", this.state).then(response => {
            alert("hello")
            // let history = useHistory();
            // console.log("response", response)
            // // this.nevigate(response)
            // if (response) {
            //     history.push('/dashboard')
            // }
            // else{
    
            //     alert(response)
            // }
            this.setState({start:false})
            
        }).catch(error => {
            console.log("error", error)
            this.setState({start:false})
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandle}>

                    <div class="container">

                        {/* <div>
                            <label>Enter Your Name</label>
                            <input onChange={this.getUsername} type="text" value={this.state.userName} placeholder="enter your name"></input>
                            {this.state.userName}
                        </div> */}
                        <div>
                            <label>Enter Your email</label>
                            <input onChange={this.getEmail} type="text" value={this.state.email} placeholder="enter your email"></input>
                            {this.state.userName}
                        </div>

                        <div>
                            <label>Enter Your Phone No</label>
                            <input onChange={this.getPassword} type="password" value={this.state.phone_no} placeholder="enter your password"></input>
                            {this.state.userName}
                        </div>

                        <button className="btn btn-primary" type="submit">Login</button>
                        <button  className='btn btn-secondary' type='submit'>Forgot Password</button>
                        <BounceLoader loading={this.state.start}></BounceLoader>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
//  function Login(props) {
//     let history = useHistory();
//     var userName, password;
//      function login() {
//         axios.post("http://localhost:3000/api/auth/",{username,password}).then(response => {
//                         alert("hello")
//                          let history = useHistory();
//                         console.log("response", response)
//                         this.nevigate(response)
//                         if (response) {
//                             history.push('/dashboard')
//                         }
//                         else{
                
//                             alert(response)
//                         }
//                         // this.setState({start:false})
                        
//                     }).catch(error => {
//                         console.log("error", error)
//                         this.setState({start:false})
//                     })
//          if (response) {
//            history.push('/dashboard')
//        }
//        else{

//             history.push('/authfail')
//         }
//    }

//      function getUserName(val) {
//          console.log("val", val.target.value)
//          userName = val.target.value
//      }

//      function getPassword(val) {
//          console.log("val", val.target.value)
//          password = val.target.value
//      }
    
//      return (
        
//          <div>
//              <input onChange={getUserName} type="text" placeholder="enter name"></input>
//              <input onChange={getPassword} type="text" placeholder="enter password"></input>
//              <button class="btn btn-primary" onClick={login}>Login</button>
//          </div>
//      );
//  }

//  export default Login;