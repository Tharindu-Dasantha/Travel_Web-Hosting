import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

const ContactFormSection = () => {
  const form = useRef();
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, "contact_form", form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast('💬 Message sent successfully', {
            position: "top-right",
            autoClose: 5000,
            theme: "light",
            className: 'bg-[#FAF7F0]',
          });
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          toast('🚫 Something Wrong', {
            position: "top-right",
            autoClose: 5000,
            theme: "light",
            className: 'bg-[#FAF7F0]',
          });
        }
      );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-8 my-20 flex gap-20 items-center justify-center">
      <div className="left-sub-container">
        <h1 className="text-2xl text-gray-800 mb-2">Let’s Plan your Ideal Vacation</h1>
        <p className="text-gray-500 mb-6">Fill up the form below and have our agent help you with your ideal travel in Sri Lanka.</p>

        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="flex gap-4 mb-4">
            <input type="text" placeholder="Name" className="p-3 text-sm border border-gray-300 rounded-md flex-1" name="name" required />
            <input type="email" placeholder="Email" className="p-3 text-sm border border-gray-300 rounded-md flex-1" name="email" required />
          </div>
          <div className="flex gap-4 mb-4">
            <input type="text" placeholder="Phone" className="p-3 text-sm border border-gray-300 rounded-md flex-1" name="phone" required />
            <select className="p-3 text-sm border border-gray-300 rounded-md flex-1" name="service" required>
              <option value="">Select Service</option>
              <option value="tour">Tour</option>
              <option value="accommodation">Accommodation</option>
              <option value="transport">Transport</option>
            </select>
          </div>
          <textarea placeholder="Travel Brief..." className="p-3 text-sm border border-gray-300 rounded-md mb-4" name="message" rows="4"></textarea>
          <button type="submit" className="bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-teal-500 transition">Send Message</button>
        </form>
      </div>

      <div className="contact-details mt-8 flex flex-col gap-8">
        <div className="contact-item flex items-start gap-10">
          <div className="border rounded-md border-teal-700 p-3">
            <IoCall size={35} />
          </div>
          <div>
            <p className="text-lg font-semibold">Give Us a Call</p>
            <p className="text-gray-600">+91 098 098 8333</p>
          </div>
        </div>

        <div className="contact-item flex items-start gap-10">
          <div className="border rounded-md border-teal-700 p-3">
            <IoIosMail size={35} />
          </div>
          <div>
            <p className="text-lg font-semibold">Send Us an Email</p>
            <p className="text-gray-600">ThisaTravel@Gmail.com</p>
          </div>
        </div>

        <div className="social-icons flex gap-8 mt-4">
          <div className="border rounded-md border-teal-700 hover:scale-110 transition-transform p-3">
            <FaTwitter size={20} />
          </div>
          <div className="border rounded-md border-teal-700 hover:scale-110 transition-transform p-3">
            <AiFillLinkedin size={20} />
          </div>
          <div className="border rounded-md border-teal-700 hover:scale-110 transition-transform p-3">
            <ImFacebook2 size={20} />
          </div>
          <div className="border rounded-md border-teal-700 hover:scale-110 transition-transform p-3">
            <FaInstagramSquare size={20} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactFormSection;
