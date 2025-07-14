import React, { useContext, useState } from 'react';
import '../styles/SignInPage.css'; // Ensure this path is correct
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

function SignInPage() {
    const [name,setName]=useState('');
const [password,setPassword]=useState('');
const {login}=useContext(AuthContext)
const navigate=useNavigate();
const handleChange=(e)=>{
    e.preventDefault();
    const defaultName='admin'
    const defaultPassword='admin@123'
   if(name===defaultName && password===defaultPassword){
    login({ name, lastLoginAt: Date.now() });

    navigate('/dashboard')

   }
   
    
}
    return (
        <div className="signin-container">
            <form className="signin-form" onSubmit={handleChange}>
                <h1 className="form-title">Log In</h1>
                
                <div className="form-group">
                    <label htmlFor="name">UserName</label>
                    <input type="text" id="name" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <button type="submit" className="submit-button">Log In</button>
            </form>
        </div>
    );
}

export default SignInPage;
