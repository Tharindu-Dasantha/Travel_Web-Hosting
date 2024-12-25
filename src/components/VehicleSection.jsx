import { LargeVehicleCard, SmallVehicleCard } from "./VehicleCard.jsx";

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
        <div className="flex flex-col p-8 sm:p-16 justify-center items-center gap-12 bg-white">
            <div className="flex justify-center items-center">
                <h3 className="text-black text-2xl sm:text-4xl font-odor-mean-chey font-normal">
                    Available Vehicles
                </h3>
            </div>
            <div className="flex w-full sm:w-[80%] justify-center flex-wrap gap-6">
                <LargeVehicleCard icon={suv} title="SUV" image={suvImage} />
                <LargeVehicleCard icon={sedan} title="Sedan" image={sedanImage} />
                <SmallVehicleCard icon={coupe} title="Hatchback" image={hatchbackImage} />
                <SmallVehicleCard icon={hatchback} title="Hybrid" image={hybridImage} />
                <SmallVehicleCard icon={hybrid} title="Coupe" image={coupeImage} />
            </div>
        </div>
    );
};

export default VehicleSection;
