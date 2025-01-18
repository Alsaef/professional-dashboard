import React, { useState, useEffect } from 'react';
import anyImg from '../../assets/image/any-image.png';
import image1 from '../../assets/image/1.jfif';

const Demo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [image1, anyImg]; // Add more images if needed

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-5">
            <div className="flex items-center justify-center"></div>
                {/* First Section */}
                <div className="bg-purple-300 rounded-md flex items-center p-6 h-[250px]">
                    <div className="flex-1">
                        <h2 className="text-4xl text-white">Welcome Back</h2>
                        <p className="text-left text-white mt-2">
                            Lorem ipsum dolor sit amet <br />
                            consectetur adipisicing elit. Nesciunt, commodi.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src={anyImg} alt="Banner illustration" className="w-[200px] h-auto" />
                    </div>
                </div>

                {/* Second Section */}
                <div className="ml-5 flex items-center"></div>
                    <button onClick={prevImage} className="mr-2">Previous</button>
                    <img src={images[currentIndex]} alt="Carousel" className="w-[250px] h-[250px] object-cover rounded-md" />
                    <button onClick={nextImage} className="ml-2">Next</button>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-purple-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Demo;</div>