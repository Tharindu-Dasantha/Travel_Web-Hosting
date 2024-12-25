import {LargeVehicleCard, SmallVehicleCard} from "./VehicleCard.jsx";

// importing images
import suv from '/suv.svg';
import sedan from '/sedan.svg';
import coupe from '/coupe.svg';
import hatchback from '/hacthback.svg';
import hybrid from '/hybrid.svg';

const suvImage = '/suv.jpeg';
const sedanImage = '/sedan.jpeg';
const coupeImage = '/coupe.jpeg';
const hatchbackImage = '/hatchback.jpeg';
const hybridImage = '/hybrid.jpeg';



const VehicleSection = () => {
    return (
        <div
            className="flex p-[6.25rem] px-[0.0625rem] flex-col justify-center items-center gap-[3.125rem] bg-[#FFF]">
            <div className="flex p-[1.5625rem] px-[9.375rem] items-center gap-[63.3125rem] bg-[#FFF]">
                <h3 className="text-[#000] font-odor-mean-chey text-[4rem] font-normal leading-normal">
                    Available Vehicles
                </h3>
            </div>
            <div className="flex w-[80%] items-end justify-center content-end gap-[1.875rem] flex-wrap">
                <LargeVehicleCard icon={suv} title={"SUV"} image={suvImage} />
                <LargeVehicleCard icon={sedan} title={"Sedan"} image={sedanImage} />
                <SmallVehicleCard icon={coupe} title={"Hatchback"} image={hatchbackImage} />
                <SmallVehicleCard icon={hatchback} title={"Hybrid"} image={hybridImage} />
                <SmallVehicleCard icon={hybrid} title={"Coupe"} image={coupeImage} />
            </div>
        </div>
    );
}

export default VehicleSection;