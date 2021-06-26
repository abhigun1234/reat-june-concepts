import React, { Component } from 'react';
import Child  from './Child'
class Parent extends Component {
    constructor(props){
      console.log("data",props.name)
        super(props)
        this.state={parentName:'Parent'}
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(cname){ 
        alert("parent method getting called from child")

     console.log("state",this.state.parentName,cname)
    }
    render() {
        return (
            <div>
                <Child name="abhi" greetHandler={this.greetParent}></Child>
            </div>
        );
    }
}

export default Parent;