import React from 'react';
import Google from '@mui/icons-material/Google';
import Facebook from '@mui/icons-material/Facebook';
import GitHub from '@mui/icons-material/GitHub';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {  useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate=useNavigate();
    const location=useLocation();

    const from=location?.state?.from?.pathname || "/";

    let errorElement;
  if (error || gitError) {
    errorElement=<div>
            <p className='text-danger'>Error : {error?.message || gitError?.message}</p>
    </div>
  }
  if (loading || gitLoading) {
    return <p>Loading...</p>;
  }
  if (user || gitUser) {
    return (
        navigate(from,{replace:true})
      
    );
  }
  

    return (
        <div>
            {errorElement}
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{ height: "1px" }}></div>
                <p className='mt-2 px-2'>or</p>
                <div className='bg-primary w-50' style={{ height: "1px" }}></div>
            </div>

            <div className='text-center'>
                <button onClick={()=>signInWithGoogle()} className='btn btn-primary w-50 my-2 '>
                    <Google></Google>
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
            
            <div className='text-center'>
                <button className='btn btn-primary w-50 my-2 '>
                    <Facebook></Facebook>
                    <span className='px-2'>Facebook Sign In</span>
                </button>
            </div>
            <div className='text-center my-2'>
                <button onClick={()=>signInWithGithub()} className='btn btn-primary w-50 '>
                    <GitHub></GitHub>
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;