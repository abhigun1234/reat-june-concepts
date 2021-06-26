import React, { Component } from 'react';

class Custumerinfo extends Component {

    state = {

        pageTitle: "Customers",
        customersCount: 5,
        customers: [{
            id: 1, name: "raj", phoneNo: "734567890"
        },
        {
            id: 2, name: "roma", phoneNo: "734567890"
        },
        {
            id: 3, name: "rajesh", phoneNo: ""
        }]
    }

    render() {
        return (
         
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Custumer Name</th>
                            <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                         this.state.customers.map((cust)=>{

                            return(<tr key={cust.id}>
                                <td>{cust.id}</td>
                                <td>{cust.name}</td>
                                <td>{this.checkPhoneNo(cust.phoneNo)}</td>
                            </tr>)
                         })
                        }
                     

                    </tbody>

                </table>

            </div>
        );
        
        

    }
    checkPhoneNo(phone_no){
        if(phone_no){

            return phone_no
        }
        else{
            return <div className="bg-warning">No Phone no</div>
        }

    }
}

export default Custumerinfo;