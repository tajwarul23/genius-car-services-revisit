import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name,img,description,price,id}=service;
    const navigate=useNavigate();

    const navigateDetails=(id)=>{   
        navigate(`/service/${id}`);
        console.log("hello")

    }
    return (
        <div className='service '>
            <img  src={img} alt="" />
            <h2 style={{marginBottom:"0px"}}>{name}</h2>
            <h4 style={{margin:"0px"}}>Price:{price}$</h4>
            <p style={{marginBottom:"2px"}}><small>{description}</small></p>
            <button onClick={()=>navigateDetails(id)} className='btn-primary'>Book:{name}</button>
        </div>
    );
};

export default Service;