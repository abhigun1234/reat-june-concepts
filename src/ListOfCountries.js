import React from 'react';

function ListOfCountries(props) {
    return (
        <div>
            <ul class="list-group">
                <li class="list-group-item active">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
        </div>
    );
}

export default ListOfCountries;