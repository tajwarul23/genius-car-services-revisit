import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const params=useParams();
    // const id={params}
    return (
        <div>
            <h2>Welcome to Service Details:{params.serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;