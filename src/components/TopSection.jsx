const TopSection = ({ title, description }) => {
    return (
        <div className="flex cursor-default flex-col justify-center items-center gap-4 sm:gap-6 w-[90%] sm:w-[70%]">
            <h3 className="self-stretch text-white text-center font-odor-mean-chey text-2xl sm:text-4xl md:text-[4rem] font-normal leading-tight sm:leading-normal">
                {title}
            </h3>
            <p className="self-stretch text-white/70 text-center font-inter text-sm sm:text-[1rem] md:text-[1.2rem] font-normal leading-relaxed sm:leading-normal">
                {description}
            </p>
        </div>
    );
};

export default TopSection;
