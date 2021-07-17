import './Register.css';
import React, { Component } from 'react';
import axios from 'axios'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'
class Register extends Component {
    constructor() {

        super()
        this.state = { name: '', email: '', password: '' ,start:false}
    }
    getUsername = (event) => {
        console.log("data", event.target.value)
        this.setState({ name: event.target.value })

    }
    getEmail = (event) => {
        console.log("data", event.target.value)
        this.setState({ email: event.target.value })

    }
    getPassword = (event) => {
        console.log("data", event.target.value)
        this.setState({ password: event.target.value })

    }
    onSubmitHandle = (event) => {

        console.log("name", this.state.name)
        console.log("email", this.state.email)
        console.log("password", this.state.password)
        event.preventDefault()
         this.setState({start:true})
        axios.post("https://justolearnapp.herokuapp.com/api/users/", this.state).then(response => {
            console.log("response", response)
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

                        <div>
                            <label>Enter Your Name</label>
                            <input onChange={this.getUsername} type="text" value={this.state.userName} placeholder="enter your name"></input>
                            {this.state.userName}
                        </div>
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

                        <button className="btn btn-primary" type="submit">Submit</button>
                        <BounceLoader loading={this.state.start}></BounceLoader>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;