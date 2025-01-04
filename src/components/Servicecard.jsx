import React from 'react';
import { FaUserTie, FaLeaf, FaCogs, FaShieldAlt, FaGlobeAmericas, FaUsers } from "react-icons/fa";

const iconservice = {
    FaUserTie: FaUserTie,
    FaLeaf: FaLeaf,
    FaCogs: FaCogs,
    FaShieldAlt: FaShieldAlt,
    FaGlobeAmericas: FaGlobeAmericas,
    FaUsers: FaUsers
};

const Servicecard = ({ allservice }) => {
    const { icon, title, description } = allservice;
    const IconComponent = iconservice[icon];
    return (
        <div className='bg-white card p-6 shadow rounded-md space-y-4'>
            <div>
                <IconComponent className='text-5xl animate__animated animate__bounceInLeft animate__delay-1s text-bgbton' />
            </div>
            <div>
                <h2 className='text-primary text-xl font-semibold mb-3 animate__animated animate__bounceInLeft animate__delay-2s'>{title}</h2>
                <p className='text-secondary font-medium text-base animate__animated animate__bounceInLeft animate__delay-3s'>{description}</p>
            </div>
        </div>
    );
};

export default Servicecard;