import React from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Contracts = () => {
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
      text: "M/s Labour Bridges delivers dependable NMR (Nominal Muster Roll) and contract-based labour solutions designed to support diverse operational and project requirements. We specialize in providing skilled, semi-skilled, and unskilled workforce on a contractual basis, ensuring flexibility and scalability for businesses across industries. Our end-to-end services include recruitment, verification, deployment, attendance management, payroll processing, and statutory compliance, enabling smooth and efficient workforce operations",
      image: "/nmr/contract/1.png",
      
    },  {
      id: 2,
      text: "We focus on aligning the right talent with the right roles, ensuring productivity and quality performance at every stage. Our streamlined processes and experienced team ensure timely mobilization of manpower while maintaining strict adherence to labour laws and safety standards",
      image: "/nmr/contract/2.png",
      
    },  {
      id: 3,
      text: "Labour Bridges also emphasizes worker welfare by ensuring proper documentation, fair compensation, and safe working environments",
      image: "/nmr/contract/3.png",
      
    },  {
      id: 4,
      text: "With strong coordination and supervision, we reduce administrative complexities and enhance operational efficiency. Partner with us for reliable contract-based labour solutions that deliver consistency, compliance, and long-term value for your business growth.",
      image: "/nmr/contract/4.png",
      
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
            Contract Based Labour  
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

export default Contracts