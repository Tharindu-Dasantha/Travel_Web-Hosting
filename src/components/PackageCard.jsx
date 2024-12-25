import WhatsAppicon from "/whatsapp.svg";

const PackageCard = ({ image, name, duration }) => {
  return (
    <div className="flex flex-col items-center bg-[#f3f3f5] rounded-md overflow-hidden cursor-pointer hover:transform hover:-translate-y-1 hover:shadow-lg transition duration-300">
      <div
        className="w-[18rem] h-[15rem] mt-0 pt-0 flex-shrink-0 bg-blue-100"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex justify-between items-center w-full p-2">
        <div className="flex flex-col items-start gap-[0.25rem] flex-shrink-0">
          <p className="self-stretch text-[#1E1E1E] font-work-sans text-[1rem] font-semibold leading-normal uppercase">
            {name}
          </p>
          <p className="self-stretch text-[#1E1E1E] font-work-sans text-[0.7rem] font-light leading-normal">
            {duration} days trip
          </p>
        </div>
        <a
          href="https://wa.me/ENTER_CONTACT_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={WhatsAppicon}
            alt="WhatsApp icon"
            className="w-[2.5rem] h-[2.5rem] flex-shrink-0"
          />
        </a>
      </div>
    </div>
  );
};

export default PackageCard;
