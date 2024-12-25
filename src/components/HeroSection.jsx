import Background from '/Background.png';

const HeroSection = () => {
    return (
        <div 
            className="w-full h-screen bg-cover bg-[#ffffff] flex items-center"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="flex flex-col items-start gap-8 sm:gap-16 pt-10 sm:pt-20 px-5 sm:pl-[5rem]">
                <div className="flex flex-col items-start gap-4 sm:gap-6">
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <h1 className="text-white font-poppins text-[2.5rem] sm:text-[4rem] md:text-[7rem] font-extrabold leading-tight sm:leading-[4.5rem] md:leading-[7rem]">
                            EXPLORE<br />Sri Lanka
                        </h1>
                        <p className="text-white font-poppins text-[0.875rem] sm:text-[1rem] font-medium leading-[1.2rem] sm:leading-[1.5625rem] capitalize">
                            Discover and Book Unique Experiences in Sri Lanka Hosted by Local Experts.
                        </p>
                    </div>
                    <button
                        className="border-2 px-4 py-2 sm:p-3 border-white text-white text-center font-lato text-[0.875rem] sm:text-[1rem] font-semibold capitalize hover:bg-white hover:text-[#555] duration-300"
                    >
                        Our Services
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
