import React from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Compliances = () => {
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
      text: "M/s Labour Bridges provides specialized NMR (Nominal Muster Roll) and contract-based labour solutions with a strong focus on comprehensive compliance management. We ensure that all workforce operations are fully aligned with statutory labour laws, government regulations, and industry standards. Our services cover end-to-end compliance handling, including worker documentation, wage records, attendance registers, statutory registrations, and timely filing of returns under applicable acts such as EPF, ESI, minimum wages, and labour welfare regulations.",
      image: "/nmr/compliance/1.png",
      
    },  {
      id: 2,
      text: "We take responsibility for maintaining accurate records and ensuring that every contractual obligation is met without discrepancies. Our expert compliance team continuously monitors regulatory updates to keep your organization protected from legal risks, penalties, and operational disruptions.",
      image: "/nmr/compliance/2.png",
      
    },  {
      id: 3,
      text: "By integrating structured processes and digital tracking systems, Labour Bridges ensures transparency, accountability, and audit readiness at all times. We also coordinate closely with clients to ensure smooth inspections and reporting.",
      image: "/nmr/compliance/3.png",
      
    },  {
      id: 4,
      text: "Our goal is to simplify complex compliance requirements while maintaining full legal adherence across all labour deployments. Partner with M/s Labour Bridges for reliable, efficient, and hassle-free compliance management under NMR and contract-based labour services, enabling your business to operate confidently, ethically, and in full regulatory alignment.",
      image: "/nmr/compliance/4.png",
      
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
            Compliance Management 
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

export default Compliances