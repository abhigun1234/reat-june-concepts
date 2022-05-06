import React, { Component } from 'react'
import axios from 'axios'
export default class ProductDetails extends Component {
    constructor(){
       super()
       this.state = {

        products: []
    }
    }
  render() {
    return (
      <div>
          {
        this.state.products.map(product=>{
            <ul>
                <li>{product.name}</li>
            </ul>
        })
          }

      </div>
    )
  }
  componentDidMount(){

     axios.get("https://justolearnapp.herokuapp.com/api/addproduct").then(response=>{

         console.log("response",response)
         this.setState({products:response.data.result})
         console.log("data",this.state)
     })
  }
}
