import React from 'react';

function ProductList(props) {

    const productList = ['grocery product', 'Fashon', 'statenory', 'books    ']
    return (
        <div>{
            productList.map(prod => <h2>{
               <ul className="list-group">
                     <li class="list-group-item">{prod}</li>
                    </ul>

            }</h2>)
        }
        </div>
    );
}

export default ProductList;