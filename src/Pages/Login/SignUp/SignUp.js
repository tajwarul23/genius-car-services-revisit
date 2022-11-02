import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

    
const SignUp = () => {
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

     
    const handleRegister= async (e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName:name });  
        
    }
    if(user){
        navigate("/home")
        console.log(user)
      }
    return (
        <div className='register-form'>
            <h2 className='text-primary text-center m-2'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="1"  placeholder='Your Name' />
                <input type="email" name="email" id="2" placeholder='Your Email' />
                <input type="password" name="password" id="3"  placeholder='Your Password'/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link className='text-danger text-decoration-none' to='/login'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;