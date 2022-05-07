import React, { Component } from 'react'
import axios from 'axios'
export default class ProductData extends Component {
    constructor(){
        this.state={products:[]}
        super()
    }
  render() {
    return (
      <div>ProductData</div>
    )
  }
  componentDidMount(){

   // get call
   axios.get("https://justolearnapp.herokuapp.com/api/addproduct").then(response=>{
       console.log("data",response)
       this.setState(products:response.data.result)
   })
  }
}
