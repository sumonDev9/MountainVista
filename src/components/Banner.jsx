import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css'
const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/tX1YL9N/mountains-2368817-1280-1.jpg"
              alt="Adventure 1"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-base md:text-2xl lg:text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s">Discover Adventure with MountainVista</h2>
                <p className="mt-2 max-w-3xl text-xm md:text-base lg:text-lg font-medium animate__animated animate__fadeInUp animate__delay-2s">Conquer mountain peaks with expert-led expeditions, offering thrilling adventures to breathtaking, remote destinations worldwide.</p>
                <button className="mt-4 px-6 py-2 bg-bgbton text-primary font-semibold rounded text-sm sm:text-base lg:text-lg animate__animated animate__fadeInUp animate__delay-3s">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/0JJgRnp/mountains-1673918-960-720.jpg"
              alt="Adventure 1"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-base md:text-2xl lg:text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s">Unleash Your Explorer Spirit</h2>
                <p className="mt-2 max-w-3xl  text-xm md:text-base lg:text-lg font-medium animate__animated animate__fadeInUp animate__delay-2s">Explore snow-capped peaks and rugged trails, designed for adventurers seeking challenges and unique outdoor experiences.</p>
                <button className="mt-4 px-6 py-2 bg-bgbton text-primary font-semibold rounded text-sm sm:text-base lg:text-lg animate__animated animate__fadeInUp animate__delay-3s">
                  Book Your Expedition
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/qmb9N54/le1-10.jpg"
              alt="Adventure 1"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-base md:text-2xl  lg:text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s">Conquer New Heights with MountainVista</h2>
                <p className="mt-2 max-w-3xl text-xm md:text-base lg:text-lg font-medium animate__animated animate__fadeInUp animate__delay-2s">Venture off the path into mountains, where curated expeditions blend scenic beauty with thrilling adventures.</p>
                <button className="mt-4 px-6 py-2 bg-bgbton text-primary font-semibold rounded text-sm sm:text-base lg:text-lg animate__animated animate__fadeInUp animate__delay-3s">
                  Join the Expedition
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;