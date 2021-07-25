import React from 'react';
import Data from './MOCK_DATA.json'
import Table from 'react-bootstrap/Table'
function PersonInfo(props) {
    return (
        <div>
            <Table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>email</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody>

                    {

Data.map((person)=>{

                        return(<tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.email}</td>
                            <td>{person.gender}</td>
                        </tr>)
                     })
                    }
                 

                </tbody>

            </Table>

        </div>
    );
}

export default PersonInfo;