import React, { useState, useEffect } from "react";
import PackageCard from "./PackageCard.jsx";
import sigiriyaImage from "/sigiriya.png";
import sinharajayaImage from "/sinharaja.png";
import ellaImage from "/ella.png";
import TopSection from "./TopSection.jsx";

const PackagesSection = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 300); // Reset after animation duration
        }, 1000); // Repeat animation every second

        return () => clearInterval(interval);
    }, [isHovered]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="flex py-8 px-4 sm:py-[4.6875rem] sm:px-6 flex-col justify-center items-center gap-6 sm:gap-[3.125rem] self-stretch bg-[#042630]">
            <TopSection
                title={"Top Packages"}
                description={
                    "This text presents my research journey on the topic of Music and Tourism Imaginaries and gives the context which led to the publication of this special issue of Via Tourism Review."
                }
            />
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-[3rem]">
                <PackageCard name={"Sigiriya"} image={sigiriyaImage} duration={"10"} />
                <PackageCard name={"Sinharajaya"} image={sinharajayaImage} duration={"5"} />
                <PackageCard name={"Ella"} image={ellaImage} duration={"6"} />
            </div>

            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`rounded-[0.625rem] p-3 sm:p-4 bg-[#D0D6D6] text-[#042630] font-work-sans text-sm sm:text-[0.875rem] font-semibold leading-normal uppercase transition-all duration-300 ease-in-out shadow-[0_0_10px_2px_white] ${
                    isAnimating ? "scale-110" : "scale-105"
                }`}
            >
                Customize Your Package
            </button>
        </div>
    );
};

export default PackagesSection;
