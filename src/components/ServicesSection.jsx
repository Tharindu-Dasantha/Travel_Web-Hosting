import ServiceSectionCard from "./ServiceSectionCard.jsx";
import { FaHandsHelping } from "react-icons/fa";

const services = [
    { id: 1, title: "Service One", description: "High-quality services for your adventure needs." },
    { id: 2, title: "Service Two", description: "Professional guides to ensure your safety and enjoyment." },
    { id: 3, title: "Service Three", description: "Affordable packages tailored to your preferences." },
];

const ServicesSection = () => {
    return (
        <div className="flex flex-col sm:flex-row p-6 sm:p-[3rem] sm:px-[4.6875rem] justify-center items-center gap-8 sm:gap-[7.5rem] bg-white">
            {/* Left Section */}
            <div className="flex w-full sm:w-[40%] flex-col justify-center items-start gap-4 sm:gap-[1.5625rem]">
                <h3 className="text-black font-odor-mean-chey text-3xl sm:text-6xl font-normal leading-snug">
                    Why Choose Us?
                </h3>
                <p className="text-black/70 font-inter text-base sm:text-lg leading-relaxed">
                    This text presents my research journey on the topic of Music and Tourism Imaginaries and gives the
                    context which led to the publication of this special issue of Via Tourism Review.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center items-center gap-6 sm:gap-[1.875rem] w-full sm:w-auto">
                {services.map((service) => (
                    <ServiceSectionCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        Icon={FaHandsHelping}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
