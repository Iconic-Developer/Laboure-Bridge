import React from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const Cleaners = () => {
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
      text: "Clean and maintain construction sites to ensure a safe and organized work environment.",
      image: "/unskilled/cleaner/cleaner1.png",
      
    },  {
      id: 2,
      text: "  Remove debris, dust, and waste materials from floors, walkways, and work areas.",
      image: "/unskilled/cleaner/cleaner2.png",
      
    },  {
      id: 3,
      text: "  Collect and dispose of construction waste following site guidelines.",
      image: "/unskilled/cleaner/cleaner3.png",
      
    },  {
      id: 4,
      text: "  Sweep, mop, and wash surfaces in buildings under construction or renovation.",
      image: "/unskilled/cleaner/cleaner4.png",
      
    },  {
      id: 5,
      text: "  Clean tools, equipment, and temporary facilities used by workers.",
      image: "/unskilled/cleaner/cleaner5.png",
      
    },  {
      id: 6,
      text: " Assist in clearing materials after demolition or repair activities.",
      image: "/unskilled/cleaner/cleaner6.png",
      
    },  {
      id: 7,
      text: "  Ensure proper segregation of recyclable and non-recyclable waste.",
      image: "/unskilled/cleaner/cleaner7.png",
      
    },  {
      id: 8,
      text: " Maintain cleanliness in storage areas, stairways, and access routes.",
      image: "/unskilled/cleaner/cleaner8.png",
      
    },{
      id: 9,
      text: "  Follow safety procedures and use protective cleaning equipment.",
      image: "/unskilled/cleaner/cleaner9.png",
      
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
            Cleaners
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

export default Cleaners