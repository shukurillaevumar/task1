import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState();
    const [Fname, setFname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [inputName, setInputName] = useState("");
    const [inputFname, setInputFname] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    function showData (e) {
        e.preventDefault();
        setName(e.target[0].value);
        setFname(e.target[1].value);
        setEmail(e.target[2].value);
        setPassword(e.target[3].value);
        setInputName("");
        setInputFname("");
        setInputEmail("");
        setInputPassword("");
    }
    return (
    <div className='form-container'>
        <form onSubmit={showData}>
            <input onChange={(event) => setInputName(event.target.value)} value={inputName} type='text' placeholder='Name...' />
            <input onChange={(event) => setInputFname(event.target.value)} value={inputFname} type='text' placeholder='Family Name...' />
            <input onChange={(event) => setInputEmail(event.target.value)} value={inputEmail} type='email' placeholder='Email...' />
            <input onChange={(event) => setInputPassword(event.target.value)} value={inputPassword} type='password' placeholder='Password...' />
            <button type='submit'>Submit</button>
        </form>
        <div className='res'>
            <div className='box'>
                <p>Name: {name}</p>
                <p>Family name: {Fname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>
        </div>
    </div>
    )
}

export default Form;