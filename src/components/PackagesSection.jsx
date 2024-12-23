import PackageCard from "./PackageCard.jsx";

// Importing images
import sigiriyaImage from "/sigiriya.png";
import sinharajayaImage from "/sinharaja.png";
import ellaImage from "/ella.png";
import TopSection from "./TopSection.jsx";

const PackagesSection = () => {
    return (
        <div
            className="flex py-[4.6875rem] px-0 flex-col justify-center items-center gap-[3.125rem] self-stretch bg-[#042630]">
            <TopSection title={"Top Packages"}
                        description={"This text presents my research journey on the topic of Music and Tourism Imaginaries and gives the context which led to the publication of this special issue of Via Tourism Review."}/>
            <div className="flex justify-center items-center gap-[3rem]">
                <PackageCard name={"Sigiriya"} image={sigiriyaImage} duration={"10"}/>
                <PackageCard name={"Sinharajaya"} image={sinharajayaImage} duration={"5"}/>
                <PackageCard name={"Ella"} image={ellaImage} duration={"6"}/>
            </div>
            <button
                className="rounded-[0.625rem] p-3 bg-[#D0D6D6] text-[#042630] font-work-sans text-[0.875rem] font-semibold leading-normal uppercase">
                Custom Package
            </button>
        </div>
    );
};

export default PackagesSection;
