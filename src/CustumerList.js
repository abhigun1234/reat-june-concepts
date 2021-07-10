import React from 'react';

function CustumerList(props) {
   let custumerList = [{ id: 1, name: 'ravi', place: 'delhi' }, { id: 1, name: 'kamal', place: 'Hyd' },
    { id: 1, name: 'raj', place: 'mumbai' }
        , { id: 1, name: 'rajesh', place: 'pune' }]
    return (
        <div>{
            custumerList.map(cust => <h2>{
                <ul>
                    <li>{cust.place}</li>
                </ul>

            }</h2>)
        }
        </div>
    );
}

export default CustumerList;