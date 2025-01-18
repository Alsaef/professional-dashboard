import React from 'react';
import anyImg from '../../assets/image/any-image.png';
import image1 from '../../assets/image/1.jfif';
import image2 from '../../assets/image/2.jfif';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div className="mt-5">
            <div className="flex items-center justify-center lg:flex-row flex-col gap-3">
                {/* First Section */}
                <div className="bg-purple-200 rounded-md flex items-center p-5 lg:h-[250px] flex-col lg:flex-row  h-full">
                    <div className="flex-1 p-5">
                        <h2 className="text-4xl text-left text-purple-700 font-semibold">Welcome Back</h2>
                        <p className="text-left text-purple-700 font-medium mt-2 ">
                            Lorem ipsum dolor sit amet <br />
                            consectetur adipisicing elit. Nesciunt, commodi.
                        </p>
                        <button className='btn mt-5 rounded-md btn-sm bg-purple-700 hover:bg-purple-600 text-white'>Go Now</button>
                    </div>
                    <div className="">
                        <img src={anyImg} alt="Banner illustration" className="w-[200px] h-auto" />
                    </div>
                </div>

                {/* Second Section */}
                <div className="ml-5">
                <Swiper
    pagination={{
        dynamicBullets: true,
    }}
    modules={[Pagination]}
    className="mySwiper w-[300px] h-[250px]" // Adjust as needed
>
<SwiperSlide>
    <div className="relative w-full h-full">
        {/* Image */}
        <img src={image1} alt="Additional" className="w-full h-full object-cover rounded-md" />
        
        {/* Overlay Text */}
        <div className="absolute inset-0 top-36 right-20 flex flex-col items-center justify-center  text-white rounded-md">
            <h3 className="text-xl text-left font-semibold">Data Anylatics</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, itaque.</p>
        </div>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="relative w-full h-full">
        {/* Image */}
        <img src={image2} alt="Additional" className="w-full h-full object-cover rounded-md" />
        
        {/* Overlay Text */}
        <div className="absolute inset-0 top-36 right-20 flex flex-col items-center justify-center  text-white rounded-md">
            <h3 className="text-xl font-semibold text-left ">Data Anylatics</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, itaque.</p>
        </div>
    </div>
</SwiperSlide>
</Swiper>



                  
                </div>
            </div>
        </div>
    );
};

export default Banner;
