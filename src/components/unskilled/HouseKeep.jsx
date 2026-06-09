import React from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { House } from 'lucide-react';


const HouseKeep = () => {
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
      text: "Maintain cleanliness and hygiene across construction sites and building areas.",
      image: "/unskilled/housekeep/housekeep1.png",
      
    },  {
      id: 2,
      text: "   Sweep, mop, and remove dust, dirt, and debris from workspaces and common areas.",
      image: "/unskilled/housekeep/housekeep2.png",
      
    },  {
      id: 3,
      text: "       Collect, sort, and dispose of construction waste in designated bins.",
      image: "/unskilled/housekeep/housekeep3.png",
      
    },  {
      id: 4,
      text: "       Clean stairways, corridors, storage areas, and temporary site facilities.",
      image: "/unskilled/housekeep/housekeep4.png",
      
    },  {
      id: 5,
      text: "     H Assist in keeping tools, materials, and equipment areas neat and organized.",
      image: "/unskilled/housekeep/housekeep5.png",
      
    },  {
      id: 6,
      text: "         Refill cleaning supplies and ensure availability of sanitation materials.",
      image: "/unskilled/housekeep/housekeep6.png",
      
    },  {
      id: 7,
      text: "         Support site teams in maintaining a safe and clutter-free environment.",
      image: "/unskilled/housekeep/housekeep7.png",
      
    },  {
      id: 8,
      text: "       Wear protective gear such as gloves, masks, and safety shoes.",
      image: "/unskilled/housekeep/housekeep8.png",
      
    },{
      id: 9,
      text: "       Report spills, hazards, or unsafe conditions to supervisors promptly.",
      image: "/unskilled/housekeep/housekeep9.png",
      
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
            Housekeeping Labour
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

export default HouseKeep