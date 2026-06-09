import React from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Wage = () => {
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
      text: "M/s Labour Bridges specializes in providing reliable NMR (Nominal Muster Roll) and contract-based labour solutions for daily wage workers across diverse industries. We ensure a steady supply of skilled, semi-skilled, and unskilled manpower to meet dynamic project requirements and seasonal demands",
      image: "/nmr/wage/1.png",
      
    },  {
      id: 2,
      text: "Our structured approach includes worker sourcing, verification, attendance tracking, wage management, and statutory compliance, ensuring transparency and efficiency at every stage..",
      image: "/nmr/wage/2.png",
      
    },  {
      id: 3,
      text: "We understand the importance of timely deployment and flexibility in workforce management. Our team is equipped to mobilize labour quickly while maintaining quality and discipline on-site. We also focus on worker welfare by ensuring fair wages, proper documentation, and safe working conditions.",
      image: "/nmr/wage/3.png",
      
    },  {
      id: 4,
      text: "With strong supervision and coordination, Labour Bridges helps businesses maintain productivity while reducing administrative burden. Our NMR and contract labour services are designed to provide cost-effective, scalable, and compliant workforce solutions. Partner with us to streamline your daily wage labour management and achieve operational excellence with confidence and ease.",
      image: "/nmr/wage/4.png",
      
    }
  ];

 
  return <> 
   

      {/* Services Header */}
     <div className="text-center mb-16 mt-12">

       <div className='text-orange-300 text-3xl flex justify-start absolute left-2 top-10  mb-4 w-full'>
                        <button onClick={clickhandler} ><FaArrowAltCircleLeft /></button>
                     </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            NMR and Contract-Based Labour{" "}
            <span className="text-yellow-500" style={{ fontWeight: "800" }}>
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-yellow-600 max-w-4xl mx-auto">
            Daily Wage Worker 
          </p>
        </div>
      
       <div>

        {/* service info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          
          className="grid grid-cols-1  lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
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

export default Wage