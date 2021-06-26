import React from 'react';

function Child(props) {
    return (
        <div>
            {props.name}
         <button  onClick={props.greetHandler}>Click</button>   
             {/* <button  onClick={()=>props.greetHandler('hello parent how are you')}>Click</button>     */}
        </div>
    );
}

export default Child;