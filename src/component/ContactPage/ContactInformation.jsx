


import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const ContactInformation = () => {



  return (
    <div className="w-full lg:w-2/6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">

          {/* Contact Information Item 1  */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_4px_8px_0px_rgba(220,220,180,0.3)] dark:bg-gray-900 rounded-xl px-3 py-8 text-center  duration-700 hover:duration-700 hover:bg-slate-50 dark:hover:bg-gray-800">
    
              <a href="https://wa.me/+8801913017997" target="_blank">
                <span className="flex justify-center items-center mb-3 text-primary dark:text-secondary">
                  <FaPhone size={32} />
                </span>
                <p className="text-lg font-semibold text-text dark:text-slate-400 mt-5">+880 1913017997</p>
              </a>
           
          </div>
    
    
          {/* Contact Information Item 2  */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_4px_8px_0px_rgba(220,220,180,0.3)] dark:bg-gray-900 rounded-xl px-3 py-8 text-center  duration-700 hover:duration-700 hover:bg-slate-50 dark:hover:bg-gray-800">
            <a href="mailto:info@optiwebfusion.com" target="_blank">
              <span className="flex justify-center items-center mb-3 text-primary dark:text-secondary">
                <FaEnvelope size={32} />
              </span>
              <p className="text-lg  text-wrap font-semibold text-text dark:text-slate-400 mt-5">
                info@optiwebfusion.com
              </p>
            </a>
          </div>  
    
    
          {/* Contact Information Item 3  */}
          <div className="col-span-2 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_4px_8px_0px_rgba(220,220,180,0.3)] dark:bg-gray-900 rounded-xl px-3 py-8 text-center  duration-700 hover:duration-700 hover:bg-slate-50 dark:hover:bg-gray-800">
            <a href="https://maps.app.goo.gl/3VE1vNqiHpFLnyi89" target="_blank">
              <span className="flex justify-center items-center mb-3 text-primary dark:text-secondary">
                <FaLocationDot size={32} />
              </span>
              <p className="text-lg font-semibold text-text dark:text-slate-400 mt-5">5th Floor, Blue Water Shopping City,Sylhet, Bangladesh</p>
            </a>
          </div>
        </div>
    </div>
  );
};

export default ContactInformation;
