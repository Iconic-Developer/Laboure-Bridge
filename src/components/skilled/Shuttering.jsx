import React from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Shuttering = () => {
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
      text: "Supply of skilled and experienced shuttering carpenters for building and industrial projects.",
      image: "/carpenter/carpenter1.png",
      
    },  {
      id: 2,
      text: "Expertise in fabrication and installation of formwork/shuttering for concrete structures.",
      image: "/carpenter/carpenter2.png",
      
    },  {
      id: 3,
      text: "Skilled in columns, beams, slabs, and foundation shuttering.",
      image: "/carpenter/carpenter3.png",
      
    },  {
      id: 4,
      text: "Ability to read construction drawings and follow precise dimensions.",
      image: "/carpenter/carpenter4.png",
      
    },  {
      id: 5,
      text: "Experience in assembling, aligning, and dismantling formwork efficiently.",
      image: "/carpenter/carpenter5.png",
      
    },  {
      id: 6,
      text: "Ensuring structural accuracy, strength, and safety during concrete casting.",
      image: "/carpenter/carpenter6.png",
      
    },  {
      id: 7,
      text: "Knowledge of wooden, steel, and plywood shuttering systems.",
      image: "/carpenter/carpenter7.png",
      
    },  {
      id: 8,
      text: "Strict adherence to site safety standards and quality workmanship.",
      image: "/carpenter/carpenter8.png",
      
    },{
      id: 9,
      text: "Reliable manpower for timely project execution and productivity.",
      image: "/carpenter/carpenter9.png",
      
    },

  ];

 
  return <> 
   

      {/* Services Header */}
     <div className="text-center mb-16 mt-12">

       <div className='text-orange-300 text-3xl flex justify-start absolute left-2 top-10  mb-4 w-full'>
                        <button onClick={clickhandler} ><FaArrowAltCircleLeft /></button>
                     </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skilled{" "}
            <span className="text-yellow-500" style={{ fontWeight: "800" }}>
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-yellow-600 max-w-4xl mx-auto">
            Shuttering Carpenters
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

export default Shuttering