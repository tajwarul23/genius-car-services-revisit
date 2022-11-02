import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const handleRegister=(e)=>{
        e.preventDefault()
    }
    return (
        <div className='register-form'>
            <h2 className='text-primary text-center m-2'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=""  placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' />
                <input type="password" name="password" id=""  placeholder='Your Password'/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link className='text-danger text-decoration-none' to='/login'>Please Login</Link></p>
        </div>
    );
};

export default SignUp;