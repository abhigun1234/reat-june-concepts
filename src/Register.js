import './Register.css';
import React, { Component } from 'react';


class Register extends Component {
    constructor() {

        super()
        this.state = { userName: '', email: '', phone_no: '' }
    }
    getUsername = (event) => {
        console.log("data", event.target.value)
        this.setState({ userName: event.target.value })

    }
    getEmail = (event) => {
        console.log("data", event.target.value)
        this.setState({ email: event.target.value })

    }
    getPhoneNo = (event) => {
        console.log("data", event.target.value)
        this.setState({ phone_no: event.target.value })

    }
    onSubmitHandle = (event) => {

        console.log("name", this.state.userName)
        console.log("name", this.state.email)
        console.log("name", this.state.phone_no)
        event.preventDefault()
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
                            <input onChange={this.getPhoneNo} type="text" value={this.state.phone_no} placeholder="enter your phone no"></input>
                            {this.state.userName}
                        </div>

                        <button className="btn btn-primary" type="submit">Submit</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default Register;