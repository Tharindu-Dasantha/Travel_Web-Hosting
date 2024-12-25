import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Footer = () => {
    return (
        <div
            className="flex p-[3.125rem] px-[5.625rem] justify-center items-center gap-[0.625rem] self-stretch bg-[#2C2C2C]">
            <div className="flex items-start gap-[9.375rem]">
                <div className="w-[40%] flex flex-col gap-4">
                    <h3 className="text-white cursor-default font-inter text-[3.875rem] not-italic font-normal leading-normal">
                        LOGO
                    </h3>
                    <p className="text-white font-work-sans text-[0.875rem] not-italic font-light leading-[1.375rem]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="flex gap-5">
                        <a href="#">
                            <FaTwitterSquare className="text-3xl text-white"/>
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl text-white"/>
                        </a>
                        <a href="#">
                            <FaFacebookSquare className="text-3xl text-white"/>
                        </a>
                        <a href="#">
                            <FaInstagramSquare className="text-3xl text-white"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[15%]">
                    <h6 className="text-white cursor-default font-work-sans text-[1.2rem] not-italic font-bold leading-normal">
                        Quick Links
                    </h6>
                    <div className="flex flex-col ">
                        <a href="#"
                           className="text-white font-work-sans text-[1rem] not-italic font-light leading-[2.75rem]">
                            Top Destinations
                        </a>
                        <a href="#"
                           className="text-white font-work-sans text-[1rem] not-italic font-light leading-[2.75rem]">
                            Our Packages
                        </a>
                        <a href="#"
                           className="text-white font-work-sans text-[1rem] not-italic font-light leading-[2.75rem]">
                            Top Activities
                        </a>
                        <a href="#"
                           className="text-white font-work-sans text-[1rem] not-italic font-light leading-[2.75rem]">
                            Available Vehicles
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[15%]">
                    <h6 className="text-white cursor-default font-work-sans text-[1.2rem] not-italic font-bold leading-normal">
                        Company
                    </h6>
                    <div className="flex flex-col">
                        <a href="#"
                           className="text-white font-work-sans text-[1rem] not-italic font-light leading-[2.75rem]">
                            How are we
                        </a>
                        <a href="#"
                           className="text-white font-work-sans text-[1rem] not-italic font-light leading-[2.75rem]">
                            Terms of service
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[30%]">
                    <h6 className="text-white cursor-default font-work-sans text-[1.2rem] not-italic font-bold leading-normal">
                        Contact Us
                    </h6>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center">
                            <IoLocation className="text-white text-3xl" />
                            <p
                                className="text-white font-work-sans text-[1rem] not-italic font-light leading-[1rem]">
                                location location location location location location location
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <IoCall className="text-white text-xl"/>
                            <p
                                className="text-white font-work-sans text-[1rem] not-italic font-light leading-[2.75rem]">
                                +94 123 456 7890
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <IoMail className="text-white text-xl"/>
                            <p
                                className="text-white font-work-sans text-[1rem] not-italic font-light leading-[2.75rem]">
                                thissatravel@mail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  export default Footer;