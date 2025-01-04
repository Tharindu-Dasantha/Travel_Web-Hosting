import React, { useState } from "react";
import destinations from "../data/destinations.json";
import TopSection from "./TopSection.jsx";
import roadImg from "../assets/Images/roadImg.jpg";
import Historic from "../assets/Images/historic.jpg";
import Coastel from "../assets/Images/Coastel.jpg";
import Mountain from "../assets/Images/Mountain.jpg";
import air_baloon from "../assets/Images/air_baloon.jpg";

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const imageMap = {
    "roadImg.jpg": roadImg,
    "historic.jpg": Historic,
    "Coastel.jpg": Coastel,
    "Mountain.jpg": Mountain,
    "air_baloon.jpg": air_baloon,
};

const DestinationSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % destinations.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + destinations.length) % destinations.length
        );
    };

    return (
        <div className="flex p-4 sm:p-6 md:p-[4.6875rem] px-2 flex-col justify-center items-center gap-6 sm:gap-8 md:gap-[3.125rem] bg-gradient-to-b from-[#86B9B0] via-[#4C7273] to-[#042630]">
            <TopSection
                title={"Top Destinations"}
                description={
                    "This text presents my research journey on the topic of Music and Tourism Imaginaries and gives the context which led to the publication of this special issue of Via Tourism Review."
                }
            />

            {/* Slider */}
            <div className="relative flex flex-col items-center justify-center gap-4 sm:gap-5">
                <div className="flex gap-2">
                    <button onClick={prevSlide}>
                        <IoIosArrowDropleftCircle className="text-2xl sm:text-3xl md:text-5xl" />
                    </button>
                    <button onClick={nextSlide}>
                        <IoIosArrowDroprightCircle className="text-2xl sm:text-3xl md:text-5xl" />
                    </button>
                </div>
                <div className="flex overflow-hidden w-full items-center justify-center gap-3 sm:gap-4">
                    {destinations.slice(0, 6).map((destination, index) => (
                        <div
                            key={destination.id}
                            className={`transition-transform duration-700 transform ${
                                index === currentSlide ? "scale-100" : "scale-90 opacity-60"
                            } hover:scale-100 hover:opacity-100`}
                        >
                            <img
                                src={imageMap[destination.image]}
                                alt={destination.title}
                                className="rounded-lg h-32 w-24 sm:h-48 sm:w-36 md:h-72 md:w-56 object-cover shadow-md transition-transform duration-700"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DestinationSection;
