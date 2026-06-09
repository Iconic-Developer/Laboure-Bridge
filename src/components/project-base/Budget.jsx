import React from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const Budget = () => {
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
      text: "   Provide budget-optimized staffing solutions tailored to project-specific workforce needs.",
      image: "/projectbase/budget/budget1.png",
      
    },  {
      id: 2,
      text: " Design cost-effective manpower plans without compromising productivity and quality.",
      image: "/projectbase/budget/budget2.png",
      
    },  {
      id: 3,
      text: "   Supply skilled, semi-skilled, and support workers based on project budget limits..",
      image: "/projectbase/budget/budget3.png",
      
    },  {
      id: 4,
      text: "  Reduce recruitment, onboarding, and administrative costs for contractors.",
      image: "/projectbase/budget/budget4.png",
      
    },  {
      id: 5,
      text: "  Offer flexible staffing models to avoid unnecessary long-term labor expenses.",
      image: "/projectbase/budget/budget5.png",
      
    },  {
      id: 6,
      text: " Assist contractors in maintaining steady productivity during extended project timelines.",
      image: "/projectbase/budget/budget6.png",
      
    },  {
      id: 7,
      text: " Align workforce deployment with project priorities and financial constraints.",
      image: "/projectbase/budget/budget7.png",
      
    },  {
      id: 8,
      text: " Help control labor costs through efficient resource planning.",
      image: "/projectbase/budget/budget8.png",
      
    },{
      id: 9,
      text: " Provide scalable workforce options to match changing project demands.",
      image: "/projectbase/budget/budget9.png",
      
    },

  ];

 
  return <> 
   

      {/* Services Header */}
     <div className="text-center mb-16 mt-12">

       <div className='text-orange-300 text-3xl flex justify-start absolute left-2 top-10  mb-4 w-full'>
                        <button onClick={clickhandler} ><FaArrowAltCircleLeft /></button>
                     </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Project-Based {" "}
            <span className="text-yellow-500" style={{ fontWeight: "800" }}>
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-yellow-600 max-w-4xl mx-auto">
            Budget Optimized solutions 
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

export default Budget