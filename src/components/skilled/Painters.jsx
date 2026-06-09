import React from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Painters = () => {
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
        text: "Supply of skilled and experienced painters for building and industrial projects.",
        image: "/painter/painter1.png",
        
      },  {
        id: 2,
        text: "Expertise in interior and exterior painting for residential, commercial, and industrial structures.",
        image: "/painter/painter2.png",
        
      },  {
        id: 3,
        text: "Skilled in surface preparation including sanding, putty application, and priming.",
        image: "/painter/painter3.png",
        
      },  {
        id: 4,
        text: "Experience with wall paint, enamel, texture, and protective coatings.",
        image: "/painter/painter4.png",
        
      },  {
        id: 5,
        text: "Ability to ensure smooth finishing, color consistency, and durable results.",
        image: "/painter/painter5.png",
        
      },  {
        id: 6,
        text: "Knowledge of industrial painting techniques and corrosion protection coatings.",
        image: "/painter/painter6.png",
        
      },  {
        id: 7,
        text: "Strict adherence to safety standards and proper use of painting tools and equipment.",
        image: "/painter/painter7.png",
        
      },  {
        id: 8,
        text: " RSupport for new construction, renovation, and maintenance projects",
        image: "/painter/painter8.png",
        
      },{
        id: 9,
        text: " Reliable manpower ensuring timely completion and quality workmanship.",
        image: "/painter/painter9.png",
        
      },
  
    ];
  
   
    return <> 
     
  
        {/* Services Header */}
       <div className="text-center mb-16 mt-12">

            <div className='text-orange-300 text-3xl flex justify-start absolute left-2 top-10  mb-4 w-full'>
                                <button onClick={clickhandler}  ><FaArrowAltCircleLeft /></button>
                             </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Skilled{" "}
              <span className="text-yellow-500" style={{ fontWeight: "800" }}>
                Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-yellow-600 max-w-4xl mx-auto">
              Painters
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

export default Painters