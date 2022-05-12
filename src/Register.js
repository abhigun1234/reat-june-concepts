import './Register.css';
import React, { Component } from 'react';
import axios from 'axios'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'
class Register extends Component {
    constructor() {

        super()
        this.state = { name: '', price: '', description: '' ,start:false}
    }
    getProductName = (event) => {
        console.log("data", event.target.value)
        this.setState({ name: event.target.value })

    }
    getPrice = (event) => {
        console.log("data", event.target.value)
        this.setState({ price: event.target.value })

    }
    getDescription = (event) => {
        console.log("data", event.target.value)
        this.setState({ description: event.target.value })

    }
    onSubmitHandle = (event) => {

        console.log("name", this.state.name)
        console.log("price", this.state.price)
        console.log("description", this.state.description)
        event.preventDefault()
         this.setState({start:true})
        axios.post("https://justolearnapp.herokuapp.com/api/addproduct", this.state).then(response => {
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
                            <input onChange={this.getProductName} type="text" value={this.state.name} placeholder="enter product  name"></input>
                            {this.state.userName}
                        </div>
                        <div>
                            <label>Enter Your email</label>
                            <input onChange={this.getPrice} type="text" value={this.state.price} placeholder="enter product  price"></input>
                            {this.state.userName}
                        </div>

                        <div>
                            <label>Enter Your Phone No</label>
                            <input onChange={this.getDescription} type="password" value={this.state.description} placeholder="enter product decription"></input>
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