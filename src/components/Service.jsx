import React, { useEffect, useState } from 'react';
import Servicecard from './Servicecard';

const Service = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div>
            <div className='text-center '>
                <h1 className='text-primary font-extrabold text-2xl md:text-3xl mb-2 italic animate__animated animate__fadeInDown animate__delay-2s'>Our Expedition Services</h1>
                <p className='text-base md:text-lg max-w-2xl mx-auto text-secondary font-medium animate__animated animate__fadeInDown animate__delay-3s'>Explore unique, thrilling expeditions with expert guides, eco-friendly options, and tailored packages.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-5'>
                {
                    service.map(allservice => <Servicecard key={allservice.id} allservice={allservice}></Servicecard>)
                }
            </div>
        </div>
    );
};

export default Service;

