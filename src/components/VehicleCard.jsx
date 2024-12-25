export const LargeVehicleCard = ({ icon, title, image }) => {
    return (
        <div
            className={`relative w-full sm:w-[35rem] h-[14rem] sm:h-[18rem] bg-no-repeat bg-cover rounded-[1rem] transition-transform duration-300 hover:scale-105 cursor-pointer`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute bottom-0 left-0 m-2 flex p-2 sm:px-4 justify-center items-center gap-2 rounded-full bg-white">
                <img src={icon} alt="icon" className="w-6 h-6 sm:w-8 sm:h-8" />
                <p className="text-sm sm:text-base text-[#050B20] font-dm-sans font-medium">
                    {title}
                </p>
            </div>
        </div>
    );
};

export const SmallVehicleCard = ({ icon, title, image }) => {
    return (
        <div
            className={`relative w-full sm:w-[22.56rem] h-[14rem] sm:h-[18rem] bg-no-repeat bg-cover rounded-[1rem] transition-transform duration-300 hover:scale-105 cursor-pointer`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute bottom-0 left-0 m-2 flex p-2 sm:px-4 justify-center items-center gap-2 rounded-full bg-white">
                <img src={icon} alt="icon" className="w-6 h-6 sm:w-8 sm:h-8" />
                <p className="text-sm sm:text-base text-[#050B20] font-dm-sans font-medium">
                    {title}
                </p>
            </div>
        </div>
    );
};
