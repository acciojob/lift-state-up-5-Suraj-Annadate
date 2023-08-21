import React  , {useState} from "react";


const Child = ({setIsLoggedIn}) => {

   function user(e){
    e.preventDefault()
    setIsLoggedIn(true)
   }
    return(
        <div>
            <form onSubmit={user} >
                <label htmlFor="name">UserName: </label>
                <input type="text"/>
                <br></br>
                <br></br>
                <label htmlFor="pass">Password: </label>
                <input type="password"/>
                <br></br>
                <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


export default Child