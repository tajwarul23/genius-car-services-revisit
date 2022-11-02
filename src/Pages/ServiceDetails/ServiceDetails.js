import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [service, setService] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tajwarul23/genius-car-services-revisit/main/public/services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const matched = service.find(s => s.id === Number(serviceId));
    const { name, price, img, description } = matched || {}

    // console.log(name, price, img);


    return (
        <div className='mx-auto mt-5'>
            <div class="card mx-auto" style={{ width: "40rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 class="card-title text-center">{name}</h4>
                        <h5 className='cart-title text-center'>Price:{price}$</h5>
                    <p class="card-text">{description}</p>
                    <div className='text-center'>
                    <Link to="/checkout">
                        <button className='btn btn-primary'>Proceed Checkout</button>
                    </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;