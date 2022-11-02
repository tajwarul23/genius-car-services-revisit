import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    // const refContainer = useRef(initialValue);
    const emailRef=useRef(""); 
    const passRef=useRef("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const pass=passRef.current.value;
        console.log(email,pass)
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
        </div>
    );
};

export default Login;