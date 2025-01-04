import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";


const Review = () => {

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('/review.json')
      .then(res => res.json())
      .then(data => setReview(data))
  }, []);

  return (
    <div>

      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
        <div className="col-span-6 lg:col-span-8">
          <div className='space-y-5'>
            <h1 className='text-primary font-extrabold text-2xl md:text-3xl italic animate__animated animate__bounceInLeft animate__delay-2s'>What Our Adventurers Say</h1>
            <p className='text-base md:text-lg max-w-3xl text-secondary font-medium animate__animated animate__bounceInLeft animate__delay-3s'>Discover the experiences of our explorers—real stories, shared moments, and unforgettable journeys with MountainVista Expeditions</p>
          </div>
          <Marquee pauseOnHover={true} speed={50} className="pt-7">
            {
              review.map(allreview => <ReviewCard key={allreview.id} allreview={allreview}></ReviewCard>)
            }
          </Marquee >
        </div>
        <div className="col-span-6 lg:col-span-4">
          <img className="animate__fadeInUp animate__animated animate__delay-1s" src="https://i.ibb.co/FxnWB25/pexels-tosan-shrestha-59233472-27831328.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Review;