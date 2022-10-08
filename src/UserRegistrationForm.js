// import React, { useState } from 'react';

// function UserRegistrationForm(props) {
//    const [uname,setName] =useState('')
//      function setDataName(e){

//         console.log("value",e.target.value)
//         setName(e.target.value)
//      }
//      function onSubmitHandle(event){
//         event.preventDefault()
//         console.log("uname",uname)
//      }
//      function setDataName(e){

//         console.log("value",e.target.value)
//         setName(e.target.value)
//      }
//     return (
//         <div>
//            <form onSubmit={onSubmitHandle}>
//             <input type="text"  placeholder='enter Your name'  onChange={setDataName}></input>
//             {uname}
//             <input type="text"  placeholder='enter Your email'  onChange={setDataEmail}></input>
//             <button type='submit'></button>
//             </form> 
//         </div>
//     );
// }

// export default UserRegistrationForm;