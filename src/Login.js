import React from 'react';
import { useState } from "react";
import "./Login.css"

function Login() {

    const [email, SetEmail] = useState('');
    const [emailError, setEmailError]= useState('');
    const [password, SetPassword] = useState('');
    const [passwordError, setPasswordError]= useState('');
    //const [successMsg, setSuccessError]= useState('');
    console.log({ email, password })

    const handleEmail = (e) => {
       // setSuccessMsg('');
        setEmailError('');
        SetEmail(e.target.value)
    }

    const handlePassword = (e) => {
       // setSuccessMsg('');
        setPasswordError('');
        SetPassword(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // checking if email is empty 
        if(email!==''){
            // check some other condition
            const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(email.match(emailRegx)){
                setEmailError('');
                if(email === "eve.holt@reqres.in"){
                    setEmailError('');
                    if(password === 'cityslicka'){

                    }
                    else{
                       setPasswordError('Password Mismatch' );

                    }

                }
                else{
                    setEmailError('Email Mismatch')

                }
            }
            else{
                setEmailError('Invalid Email')
            }

        }
        else{
            setEmailError('Email Required**')
        } 

        // checking if password is empty
         if(password!==''){

         }
         else{
            setPasswordError('Password Required**') 
         }
    }


    const handleApi = (e) => {
        console.log({ email, password })
    }

    const handleLogin = () => {
        // const data = { email, password }
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))
           
       
    }




    return (
        <>
            <div className="container">
                <div className="form-container">
                    <form onSubmit={handleFormSubmit}>
                    <h2 className="lg-heding">LOGIN</h2><br />
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" value={email} onChange={handleEmail} className="form-control" name="email" id="email" /><br/><br/>
                        {emailError && <div className="error-msg">{emailError}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" value={password} onChange={handlePassword} className="form-control" name="password" id="password" /><br/><br/> 
                        {passwordError && <div className="error-msg">{passwordError}</div>}
                    </div>

                    <div>

                        <button onClick={() => handleLogin()} className="login-btn">LOGIN</button>

                    </div>

                    <div className='reg-link'>
                        <h4>New User? Register</h4>
                    </div>
                </form>
                </div>

            </div>
        </>
    )
}

export default Login;