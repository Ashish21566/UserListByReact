import React from 'react';
import { useState } from "react";
import "./Register.css"

function Register() {
    const [fullName, SetFullName] = useState('')
    const [fullNameError, setFullNameError]= useState('');
    const [email, SetEmail] = useState('')
    const [emailError, setEmailError]= useState('');
    const [password, SetPassword] = useState('')
    const [passwordError, setPasswordError]= useState('');
    console.log({ email, password })

    const handleFullName = (e) => {
        setFullNameError('');
        SetFullName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmailError('');
        SetEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPasswordError('');
        SetPassword(e.target.value)
    }

    const handleRgFormSubmit = (e) => {
        e.preventDefault();

        if(fullName!==''){
            if ((fullName.length <= 2) || (fullName.length > 20)) {
                setFullNameError('Name should be between 1 to 20 characters');
            }

        }
        else{
           setFullNameError('Name Required**') 
        }
        

       /* if (fullName === "") {// Full name name validation

            setFullNameError('Name is Required');
        }
        if ((fullName.length <= 2) || (fullName.length > 20)) {
            setFullNameError('Name should be between 1 to 20 characters');
        }
        /*if (!validName(fullName)) {
            setFullNameError('');
            return false;
        }*/

        // checking if email is empty 
        if(email!==''){
            // check some other condition
            const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(email.match(emailRegx)){
                setEmailError('');
                if(email === "eve.holt@reqres.in"){
                    setEmailError('');
                    if(password === 'pistol'){

                    }
                    else{
                        setPasswordError('Password Mismatch');

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
        const data = {fullName, email, password }
        fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data1 => console.log(data1)
            )
    }


    console.log(email, password);
    return (
        <>
            <div className="rg-container">
                <div className="rg-form-container">
                <form onSubmit={handleRgFormSubmit}>
                    <h2 className="rg-heading">REGISTER</h2><br />
                    <div className="rg-form-group">

                        <div>
                            <label htmlFor="fullName">FullName</label><br />
                            <input type="text" value={fullName} onChange={handleFullName} className="rg-form-control" name="fullName" id="fullName" /> <br /><br />
                            {fullNameError && <div className="error-msg">{fullNameError}</div>}

                        </div>

                        <div>
                            <label htmlFor="email">Email</label><br />
                            <input type="text" value={email} onChange={handleEmail} className="rg-form-control" name="email" id="email" /><br /><br />
                            {emailError && <div className="error-msg">{emailError}</div>}

                        </div>

                        <div>
                            <label htmlFor="password">Password</label><br />
                            <input type="text" value={password} onChange={handlePassword} className="rg-form-control" name="password" id="password" /> <br /><br />
                            {passwordError && <div className="error-msg">{passwordError}</div>}

                        </div>

                        <div>

                            <button type='submit' onClick={handleApi} className="rg-btn">REGISTER</button>

                        </div>

                        <div className='login-link'>
                            <h4>Already User? Login</h4>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;