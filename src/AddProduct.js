import React, { Component } from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            city: ''
        }

    }
    getUserName = (event) => {
        this.setState({ userName: event.target.value })
    }
    getCity = (event) => {
        this.setState({ city: event.target.value })
    }
    handleSubmit = (event) => {
        console.log("this.state.userName", this.state.userName)
        console.log("this.state.city", this.state.city)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="container">
                    {/* <label>Username</label>
                    <input type="text" value={this.state.userName} onChange={this.getUserName}></input>

                    <label>
                        City
                    </label> */}
                    <select value={this.state.city} onChange={this.getCity}>
                        <option value="pune"></option>
                        <option value="mumbai"></option>
                        <option value="delhi"></option>
                    </select>

                    {/* <button className="btn btn-primary" type="submit">Submit</button> */}
                </div>
            </form>
        );
    }
}

export default AddProduct;