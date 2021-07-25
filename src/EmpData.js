import React from 'react';
import Data from './emp.json'
import Table from 'react-bootstrap/Table'
function EmpData(props) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        Data.map((person) => {

                            return (<tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.first_name}</td>
                                <td>{person.last_name}</td>
                                <td>{person.email}</td>
                                <td>{person.gender}</td>
                                <td>{person.city}</td>
                            </tr>)
                        })
                    }

                </tbody>
            </Table>
        </div >
    );
}

export default EmpData;