import React from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const SiteAssistant = () => {
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const navigate = useNavigate();

   const clickhandler = () => {
        navigate("/");
        const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollTo = totalHeight * 1 ; // Scroll to the middle of the page

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
    };


  const serviceInfo = [
    {
      id: 1,
      text: "Assist site supervisors and engineers with daily construction activities and coordination.",
      image: "/unskilled/site/site1.png",
      
    },  {
      id: 2,
      text: "  Help organize materials, tools, and equipment required for ongoing site work.",
      image: "/unskilled/site/site2.png",
      
    },  {
      id: 3,
      text: "   Maintain site records, attendance, and basic documentation when required.",
      image: "/unskilled/site/site3.png",
      
    },  {
      id: 4,
      text: "    Support communication between workers, contractors, and site management",
      image: "/unskilled/site/site4.png",
      
    },  {
      id: 5,
      text: "    Monitor material usage and inform supervisors about shortages.",
      image: "/unskilled/site/site5.png",
      
    },  {
      id: 6,
      text: "     Ensure work areas remain clean, organized, and safe for workers.",
      image: "/unskilled/site/site6.png",
      
    },  {
      id: 7,
      text: "     Follow construction plans and instructions provided by supervisors.",
      image: "/unskilled/site/site7.png",
      
    },  {
      id: 8,
      text: "    Ensure compliance with basic safety guidelines and site procedures.",
      image: "/unskilled/site/site8.png",
      
    },{
      id: 9,
      text: "     Report work progress, delays, or safety concerns to the site supervisor promptly.",
      image: "/unskilled/site/site9.png",
      
    },

  ];

 
  return <> 
   

      {/* Services Header */}
     <div className="text-center mb-16 mt-12">

       <div className='text-orange-300 text-3xl flex justify-start absolute left-2 top-10  mb-4 w-full'>
                        <button onClick={clickhandler} ><FaArrowAltCircleLeft /></button>
                     </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unskilled{" "}
            <span className="text-yellow-500" style={{ fontWeight: "800" }}>
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-yellow-600 max-w-4xl mx-auto">
            Site Assistant
          </p>
        </div>
      
       <div>

        {/* service info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {serviceInfo.map((service) => (
      <div key={service.id} className="flex flex-col items-center space-y-6 mb-12 w-full bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 ">
        <img src={service.image} alt={`Service ${service.id}`} loading='lazy'/> 
        <span className='flex  gap-2 items-center text-gray-700 text-center'> {service.text}</span>
       
  </div>
    ))}
      </motion.div>
    </div>
   

      


  </>
}

export default SiteAssistant