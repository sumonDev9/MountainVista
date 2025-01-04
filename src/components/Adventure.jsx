import React, { useEffect, useState } from 'react';
import AdventureCard from './AdventureCard';

const Adventure = () => {
    const [adventures, setAdventures] = useState([]);

    useEffect(() => {
        fetch('/adventures.json')
            .then(res => res.json())
            .then(data => setAdventures(data));
    }, [])

    return (
        <div>
            <div className='text-center '>
                <h1 className='text-primary font-extrabold text-2xl md:text-3xl italic animate__animated animate__fadeInUp animate__delay-2s'>Adventure Experiences</h1>
                <p className='text-base md:text-lg text-secondary font-medium animate__animated animate__fadeInUp animate__delay-3s'>Explore thrilling adventures while preserving the environment.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8'>
                {
                    adventures.map(adventer => <AdventureCard key={adventer.id} adventer={adventer}></AdventureCard>)
                }
            </div>
        </div>
    );
};

export default Adventure;