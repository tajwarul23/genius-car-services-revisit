import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate=useNavigate();
    const location=useLocation();

    const from=location?.state?.from?.pathname || "/";
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
      const resetPassword=async()=>{
        const email =emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast("Sent Email");
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    // const refContainer = useRef(initialValue);
    const emailRef=useRef(""); 
    const passRef=useRef("");
      if(user){
        navigate("/home")
      }
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const pass=passRef.current.value;
        signInWithEmailAndPassword(email,pass)
        .then(()=>{
            navigate(from,{replace:true})
        })
    }
    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-primary mt-2 text-center'>Please Log in</h2>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Genius Car? <Link className='text-danger text-decoration-none' to='/signup'>Please Register</Link></p>
            <p>Forget Password? <button onClick={resetPassword} className='text-danger btn btn-link text-decoration-none' to='/signup'>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;