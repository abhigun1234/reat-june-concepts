import React, { Component } from 'react';
import ProductDetails from './ProducDetails'
class Product extends Component {
    constructor(props){
        console.log("props.name",props.name)
        super()
        this.state={name:'addidas',phoneno:'766666666'}
       this.changeProduct=this.changeProduct.bind(this)
    }
    getProduct(){

        alert("hello")
    }
    changeProduct(){
       console.log("this",this)
        // this.state.name="rebook"
        this.setState({name:'rebook',phoneno:'867866765786'})
    }
    render() {
        return (
            <div>
                {/* <label>{this.state.name}</label>
                <label>{this.state.phoneno}</label>
              <button onClick={this.changeProduct} className="btn btn-primary">Click</button>  
             */}
             <ProductDetails></ProductDetails>
            </div>
        );
    }
}

export default Product;