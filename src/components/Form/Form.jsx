import React from "react"

import validation from "./validation"

export default function Form(props){

    const [userData, setUserData] = React.useState({
        username: "",
        password:""
    })

    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    })

const handleInputChange = (e)=>{
    setUserData({
        ...userData,
        [e.target.name] : e.target.value
    })
    setErrors(validation({
        ...userData,
        [e.target.name] : e.target.value})
    )
}

const handleSubmit =(e)=>{
    e.preventDefault()
    props.login(userData)
} 

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input value={userData.username} type="text" name= "username" onChange={handleInputChange}/>
            {errors.username && <p>{errors.username}</p> }
            <label htmlFor="password">Password: </label>
            <input value={userData.password} type="password" name="password" 
            onChange={handleInputChange}/>
            {errors.password && <p>{errors.password}</p> }
            
            <button>LOGIN</button>
        </form>
        </div>
    )
}