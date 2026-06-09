import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  Users,
  Building,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Client Carousel Component
const ClientCarousel = ({ clients }) => {
  // Create duplicate sets for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <motion.div
      className="bg-white rounded-3xl p-8 md:p-5 shadow-lg border border-gray-100 mb-10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -200 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, // Adjust speed here
                ease: "linear",
              },
            }}
            style={{
              width: `${duplicatedClients.length * 200}px`,
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`client-${index}`}
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: "200px" }}
              >
                <motion.img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  className="max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 w-auto object-contain opacity-100 transition-all duration-200 cursor-pointer mx-4"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/150x150?text=${encodeURIComponent(
                      client.name.split(" ")[0]
                    )}`;
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fade edges for smoother visual transition */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </motion.div>
  );
};

// ==========================================================================================================================
// Client Carousel2 Component
const ClientCarousel2 = ({ clients }) => {
  // Create duplicate sets for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <motion.div
      className="bg-white rounded-3xl p-8 md:p-5 shadow-lg border border-gray-100 mb-10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [-200 * clients.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15, // Adjust second speed here
                ease: "linear",
              },
            }}
            style={{
              width: `${duplicatedClients.length * 200}px`,
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`client-${index}`}
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: "200px" }}
              >
                <motion.img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  className="max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 w-auto object-contain opacity-100 transition-all duration-200 cursor-pointer mx-4"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/150x150??text=${encodeURIComponent(
                      client.name.split(" ")[0]
                    )}`;
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fade edges for smoother visual transition */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </motion.div>
  );
};


// ===========================================================================================================================

const ClientsSection = () => {
  const clients = [
 
        {
      name: "Aneja Constructions",
      logo: "https://image3.mouthshut.com/images/imagesp/l/925647784s.jpg",
    },

         {
      name: "L&W Infratech",
      logo: "https://static.wixstatic.com/media/f2ced5_4f4814fe32b64a0bbb47b5c4e84b2740~mv2.png/v1/fill/w_266,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/L%20%26%20W%20Logo_Transparent.png",
    },
    
  
   
    
    {
      name: "TATA Projects",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    },
    // {
    //   name: "Vijay Nirman",
    //   logo: "https://vijaynirman.com/wp-content/uploads/2015/06/VNC_logo.jpg",
    // },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg",
    },
    {
      name: "ADANI Group",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Adani_logo_2012.svg",
    },
    
   {
      name: "SRC",
      logo: "https://srcprojects.in/assets/11-xgg5slzi.jpg",
    },
           {
      name: "SPC Infra",
      logo: "https://spcinfra.com/wp-content/uploads/2024/07/logo-spc.png",
    },



    {
      name: "L&T Construction",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png",
    },

         {
      name: "Infinity Buildcon",
      logo: "https://infinitybuildcon.in/wp-content/uploads/2021/06/Logo-300x160.png",
    },
    
    {
      name: "Reliance Industries",
      logo: "https://rilstaticasset.akamaized.net/sites/default/files/2023-02/L.1.jpg",
    },
    {
      name: "Shapoorji Pallonji",
      logo: "https://bharatconstruction.net/images/client-logo/shapoorji.png",
    },


    
    {
      name: "GMR Group",
      logo: "https://images.seeklogo.com/logo-png/31/2/gmr-group-logo-png_seeklogo-310947.png",
    },
    {
      name: "Hindustan Construction",
      logo: "https://constrofacilitator.com/wp-content/uploads/2024/04/HCC-jpg.webp",
    },
    {
      name: "ITD CEM",
      logo: "https://allpaisa.com/wp-content/uploads/2021/05/ITD-LOGO.jpg",
    },
     {
      name: "IPS Group",
      logo: "https://www.integratedpersonnelservices.com/wp-content/uploads/2022/09/Logo-1.jpg",
    },
    

    {
      name: "PISL",
      logo: "https://pislinfra.com/wp-content/uploads/2023/08/pisl-logo-1.png",
    },
    {
      name: "Robomatic Precon pvt Ltd",
      logo: "/robomatic-logo.jpeg",
    },
    {
      name: "KEC",
      logo: "https://download.logo.wine/logo/KEC_International/KEC_International-Logo.wine.png",
    },
    {
      name: "Star Worth",
      logo: "https://starworthinfra.com/images/logo.png",
    },
    {
      name: "NCC Limited",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaI2zGNYT_b8vfTGuQJZ3uVG7MsOpIMwG9mg&s",
    },
    
    {
      name: "Casagrand",
      logo: "https://buzzfame.in/wp-content/uploads/2023/04/Casagrand-Logo.webp",
    },
    {
      name: "DLF",
      logo: "https://cdn.freelogovectors.net/svg05/dlf-logo.svg",
    },

          {
      name: "Tribeni Construction Ltd",
      logo: "https://www.developmentaid.org/files/organizationLogos/tribeni-construction-ltd-80200.jpg",
    },
   
    {
      name: "Godrej",
      logo: "https://psfonttk.com/wp-content/uploads/2020/09/Godrej-Properties-Logo-1024x541.png",
    },
  
  {
      name: "Wabag Limited",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Wabag_logo.svg",
    },

 
        {
      name: "URC",
      logo: "https://content.jdmagicbox.com/comp/erode/14/9999pmulchnstd2300514/catalogue/urc-construction-pvt-ltd-registered-office--erode-builders-n23zrub.jpg?imwidth=463.3333333333333",
    },
    {
      name: "Sathlokhar Constructions",
      logo: "https://www.sathlokhar.com/images/sath-logo.png",
    },   {
      name: "Balajee Group",
      logo: "https://balajeegroup.com/wp-content/uploads/2023/10/Balajee-logo.png",
    },
    {
      name: "Hariharan Group",
      logo: "https://hariharansteels.com/Images/logo.png",
    },
    {
      name: "Saint Gobain",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Saint-Gobain_logo.svg",
    },  {
      name: "Saint Gobain",
      logo: "data:image/jpeg;base64,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",
    }, 
    
  ];
  
  const clients2 = [
    
    
    
    
    
    {
      name: "Power Mech Projects",
      logo: "https://powermechprojects.com/wp-content/uploads/2022/08/Logo-2-3.png",
    },
    {
      name: "Jindal Stainless",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Jindal-stainless.png",
    },
    
    
    
    {
      name: "Wagad Infraprojects",
      logo: "https://capsource-bucket.s3.us-west-2.amazonaws.com/wp-content/uploads/2024/08/14134907/WagadInfraprojects2.jpg",
    },
    {
      name: "GVPR",
      logo: "https://gvpr.co.in/wp-content/uploads/2024/09/Asset-1@4x.png",
    },
        
    
    
    
    {
      name: "Renaatus",
      logo: "https://5.imimg.com/data5/SELLER/Logo/2024/4/410552148/VF/DJ/XH/9198534/renaatus-120x120.png",
    },
    {
      name: "Power Mech Projects",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Sterling_%26_Wilson_logo.png",
    },
    
    {
      name: "Power Mech Projects",
      logo: "data:image/jpeg;base64,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",
    }, 


    {
      name: "Homable Group",
      logo: "https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vaG9tYmFsZS1jb25zdHJ1Y3Rpb25zLWFuZC1lc3RhdGVzLmpwZw.webp",
    },
    
    {
      name: "Kalpataru Limited",
      logo: "https://media.assettype.com/freepressjournal/2024-08-16/yjh8pl76/Kalpataru_Group_525x328.jpg?width=1200",
    },
    
    
    {
      name: "Priya Construction",
      logo: "https://www.priyacons.in/jb-content/uploads/2022/12/priya-logo-copy-2048x1478.png",
    },
    
    // {
      //   name: "CS Infra",
      //   logo: "https://www.sricsinfradevelopers.com/assets/img/logo1.png",
      // },
      {
        name: "Vijay Electricals",
        logo: "https://d1hbpr09pwz0sk.cloudfront.net/logo_url/vijai-electricals-limited-hyderabad-1da505d3",
      },
      
      {
        name: "Pramilas Projects",
        logo: "https://pramilaprojects.com/wp-content/uploads/2023/09/Logo_Pramila-Projects.png",
      },
      
      
      {
        name: "Manas an Kias",
        logo: "https://i.tracxn.com/logo/company/2b2d861e08776471ea2f973d036834c?format=webp&height=120&width=120",
      },
      
      
      {
        name: "Kanwar Enterprises Pvt Ltd",
        logo: "https://kanwarenterprises.com/wp-content/uploads/2026/02/kepl-logo.png",
      },
      
      
      {
        name: "G R Infraprojects Limited",
        logo: "https://www.developmentaid.org/files/organizationLogos/g-r-infraprojects-limited-504422.jpg",
      },
      {
        name: "Kruti Infratech",
        logo: "https://krutiprojects.com/assets/images/front-assets/images/logo.png",
      }, {
        name: "DEC",
        logo: "https://decinfra.com/wp-content/uploads/2024/09/cropped-Dec-logo-Png.png",
      }, {
        name: "Riveria",
        logo: "https://rivierainfra.com/wp-content/uploads/2025/07/RIPL-LOGO.svg",
      }, {
        name: "Suroj Construction",
        logo: "https://bharatconstruction.net/images/client-logo/suroj.png",
      }, {
        name: "Vivedha Construction",
        logo: "https://vidvedaa.com/assets/images/vidvedaa-logo-bg.jpg",
      },
      
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Timely Deployment",
      description: "Rapid workforce deployment with 95% on-time delivery rate",
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description:
        "Rigorous screening and training processes ensure top-quality workforce",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description:
        "Access to a vast network of skilled and certified professionals",
    },
    {
      icon: Building,
      title: "Compliance Excellence",
      description: "Full legal compliance and documentation management",
    },
  ];



  return (
    <section
      id="clients"
      className="py-12 sm:py-16 md:py-10 bg-gray-50 w-full overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Portfolio */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by <span className="text-yellow-500">Industry Leaders</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We're proud to work with India's most respected companies,
            delivering exceptional workforce solutions across diverse projects
            and industries.
          </motion.p>
        </motion.div>

        {/* Client Logos - Manual Carousel */}
        <ClientCarousel clients={clients} />
        <ClientCarousel2 clients={clients2} />
        

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="text-yellow-500">LABOUR BRIDGES India</span>
            </h3>
            <p className="text-xl text-gray-600">
              Our unique selling propositions that set us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                    <motion.div
                      className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-xl inline-block mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className="h-8 w-8 text-black" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
