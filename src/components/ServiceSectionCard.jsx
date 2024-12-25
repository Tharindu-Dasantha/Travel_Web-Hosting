const ServiceSectionCard = ({ Icon, title, description }) => {
    return (
        <div
            className="flex p-4 sm:p-[1rem] cursor-default justify-center items-center gap-4 sm:gap-[1.25rem] rounded-md sm:rounded-[0.625rem] border border-[#042630] bg-[#042630] flex-wrap">
            <Icon className="text-[#f3f3f5] text-2xl sm:text-[3rem]" />
            <div>
                <h6
                    className="w-full sm:w-[17.58rem] text-[#F3F3F5] font-dm-sans text-lg sm:text-[1.5rem] font-medium leading-snug">
                    {title}
                </h6>
                <p className="w-full sm:w-[17.58rem] text-[#F3F3F5] font-dm-sans text-sm sm:text-[1rem] font-normal leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceSectionCard;
