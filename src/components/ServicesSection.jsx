import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Electricians from "./skilled/Electricians";
import { useState } from "react";
import {
  Zap,
  Hammer,
  Wrench,
  Construction,
  Paintbrush,
  Flame,
  Building,
  UserCheck,
  Layers,
  Settings,
  Users,
  Brush,
  Package,
  HardHat,
  Home,
  Calendar,
  Briefcase,
  FileText,
  Clock,
  CreditCard,
} from "lucide-react";
import { ul } from "framer-motion/client";

const ServicesSection = () => {

  
  
  // const navigate = useNavigate();
  const serviceCategories = [
    {
      title: "Skilled Manpower Supply",
      subtitle: "Expert professionals for specialized construction roles",
      services: [
        { name: "Electricians", icon: Zap, url: "/Electricians" },
        { name: "Barbenders", icon: Construction, url: "/Barbender" },
        { name: "Plumbers", icon: Wrench, url: "/Plumbers" },
        { name: "Masons", icon: Construction, url: "/Masons" },
        { name: "Painters", icon: Paintbrush, url: "/Painters" },
        { name: "Welders", icon: Flame, url: "/Welders" },
        { name: "Shuttering Carpenters", icon: Building, url:"/shuttering" },
        { name: "Supervisors & Foremen", icon: UserCheck, url:"foreman" },
        { name: "Tiling Experts", icon: Layers, url:"tiling" },
        { name: "Fabricators", icon: Settings, url:"fabricator" },
      ],
    },
    {
      title: "Unskilled Manpower Supply",
      subtitle: "Trained and verified support workforce",
      services: [
        { name: "Helpers", icon: Users, url:"/Helpers" },
        { name: "Cleaners", icon: Brush, url:"/Cleaners" },
        { name: "Loaders", icon: Package, url:"/Loaders" },
        { name: "Site Assistants", icon: HardHat, url:"/siteassistant" },
        { name: "Fitters' Helpers", icon: Wrench , url:"/fittershelpers"},
        { name: "Housekeeping Labour", icon: Home, url:"/HouseKeep" },
      ],
      customLayout: true,
    },
    {
      title: "Project-Based Staffing",
      subtitle: "Customized workforce solutions for specific project needs",
      services: [
        { name: "Short-term Projects", icon: Clock, url:"/short" },
        { name: "Long-term Installations", icon: Building,url:"/long" },
        { name: "Timeline-specific Deployment", icon: Calendar, url:"/timeline" },
        { name: "Budget-optimized Solutions", icon: CreditCard, url:"/budget" },
        { name: "Skill-matched Staffing", icon: UserCheck, url:"/skill" },
      ],
    },
    {
      title: "Turnkey Labour Solutions",
      subtitle: "Complete end-to-end workforce management",
      services: [
        { name: "Recruitment & Onboarding", icon: Users, url:"/onboarding" },
        { name: "Accommodation Management", icon: Home, url:"/accommodation" },
        { name: "Compliance Handling", icon: FileText, url:"/compliance" },
        { name: "Complete Project Staffing", icon: Briefcase, url:"/project-staffing" },
        { name: "Single-point Contact", icon: UserCheck, url:"/single-point-contact" },
      ],
    },
    {
      title: "NMR and Contract-Based Labour",
      subtitle: "Flexible employment models for construction firms",
      services: [
        { name: "Daily Wage Workers", icon: Clock, url:"/wage" },
        { name: "Contract-based Labour", icon: FileText, url:"/contract" },
        { name: "Payroll Services", icon: CreditCard, url:"/payroll" },
        { name: "Compliance Management", icon: Briefcase, url:"/compliances" },
      ],
      centerCards: true,
    },
  ];

  const renderServiceGrid = (category, categoryIndex) => {
    if (category.customLayout && category.services.length === 6) {
      const firstRowServices = category.services.slice(0, 4);
      const secondRowServices = category.services.slice(4, 6);

      return (

     
        <div className="space-y-8">
          {/* First Row - 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {firstRowServices.map((service, serviceIndex) => {
              const Icon = service.icon;
              return (
                <div
                  key={serviceIndex}
                  className="group transform hover:scale-105 transition-transform duration-300"
                >
                
                  
                   <Link to={service.url} >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center h-40 flex flex-col items-center justify-center">
                      
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    <h4 className="text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                      {service.name}
                    </h4>
                    
                  </div>
                      </Link>
                </div>
              );
            })}
          </div>

          {/* Second Row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 max-w-md">
              {secondRowServices.map((service, serviceIndex) => {
                const Icon = service.icon;
                const actualIndex = serviceIndex + 4;
                return (
                  <div
                    key={actualIndex}
                    className="group transform hover:scale-105 transition-transform duration-300"
                  >
                      <Link to={service.url} >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center h-40 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                        <Icon className="h-8 w-8 text-black" />
                      </div>
                      <h4 className="text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                        {service.name}
                      </h4>
                    </div>
                      </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else if (category.centerCards && category.services.length === 4) {
      return (
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {category.services.map((service, serviceIndex) => {
              const Icon = service.icon;
              return (
                <div
                  key={serviceIndex}
                  className="group transform hover:scale-105 transition-transform duration-300"
                >
                    <Link to={service.url}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center h-40 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    <h4 className="text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                      {service.name}
                    </h4>
                  </div>
                    </Link>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {category.services.map((service, serviceIndex) => {
            const Icon = service.icon;
            // =================================================================================================
            // Check if this is the Project-Based Staffing category
            const isProjectBased = category.title === "Project-Based Staffing";

            return (
              <div
                key={serviceIndex}
                className="group transform hover:scale-105 transition-transform duration-300"
              >
                  <Link to={service.url} >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center h-40 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <h4
                    className={`font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight ${
                      isProjectBased ? "text-sm md:text-base" : "text-base"
                    }`}
                  >
                    {service.name}
                  </h4>
                </div>
                  </Link>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-yellow-500" style={{ fontWeight: "800" }}>
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            LABOUR BRIDGES India offers a comprehensive range of manpower
            services tailored to the infrastructure, engineering, construction,
            and manufacturing sectors.
          </p>
        </div>

        {/* Services Categories */}
        <div className="space-y-24">
         
           
         
         
          {serviceCategories.map((category, categoryIndex) => (
            
            
            <div key={categoryIndex} className="w-full">
              {/* Category Header */}
              <div  className="text-center mb-12" >
              
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-lg">{category.subtitle}</p>
              
              
              </div>
                

              {/* Services Grid */}
              {renderServiceGrid(category, categoryIndex)}

              {/* Decorative Line */}
              {categoryIndex < serviceCategories.length - 1 && (
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto mt-16" />
              )}
             
            </div>
           
          ))}
         
          
         
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 text-black">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Custom Workforce Solutions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let us create a tailored manpower strategy for your specific
              project requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
        
      </div>
        

     
    </section>
    
  );

};

export default ServicesSection;
