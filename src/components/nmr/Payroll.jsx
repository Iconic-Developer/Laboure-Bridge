import React from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Payroll = () => {
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
      text: "M/s Labour Bridges offers comprehensive NMR (Nominal Muster Roll) and contract-based labour solutions with specialized payroll services designed to simplify workforce management. We handle complete payroll processing for daily wage and contract workers, ensuring accuracy, transparency, and timely disbursement of wages. Our services include attendance tracking, wage calculation, statutory deductions, compliance with labour laws, and generation of detailed payslips and reports",
      image: "/nmr/payroll/1.png",
      
    },  {
      id: 2,
      text: "We understand that efficient payroll management is critical for maintaining workforce satisfaction and operational stability. Our dedicated team ensures error-free processing while adhering to all regulatory requirements such as EPF, ESI, and other statutory obligations. By integrating technology-driven systems, we provide real-time monitoring and streamlined payroll administration.",
      image: "/nmr/payroll/2.png",
      
    },  {
      id: 3,
      text: "Labour Bridges reduces the administrative burden on organizations, allowing them to focus on core business activities. We also ensure fair and timely payment to workers, promoting trust and motivation within the workforce",
      image: "/nmr/payroll/3.png",
      
    },  {
      id: 4,
      text: "With our reliable payroll services, businesses benefit from improved compliance, reduced risks, and enhanced efficiency. Partner with us for seamless, end-to-end payroll management under NMR and contract labour solutions that support sustainable growth and operational excellence",
      image: "/nmr/payroll/4.png",
      
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
            Payroll Services
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

export default Payroll