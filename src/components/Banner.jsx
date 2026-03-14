import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

const Banner = ({ offers }) => {
    return (
        <div className='w-full md:w-2/3 mx-auto py-5'>
            <h2 className='text-4xl py-4 text-center text-orange-500 font-bold'>Ongoing Offers Now!!</h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {offers.map((offer) => (
                    <SwiperSlide key={offer.id}>
                        <div className="card bg-base-200 p-10 flex items-center">
                            <img src={offer.banner} className="w-16" />
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;