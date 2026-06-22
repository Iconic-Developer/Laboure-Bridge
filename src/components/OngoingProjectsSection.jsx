import React from "react";
import { CheckCircle, MapPin, Calendar } from "lucide-react";

const OngoingProjectsSection = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: "Metro Rail Extension Phase III",
      location: "Chennai",
      image: "/ongoing-1.jpg",
      workforce: "180+",
      duration: "In Progress",
      status: "65% Complete",
      highlights: [
        "Advanced tunneling and station construction work",
        "24/7 operations with skilled workforce deployment",
        "Zero safety incidents recorded to date",
      ],
    },
    {
      id: 2,
      title: "IT Corridor Infrastructure Development",
      location: "Chennai",
      image: "/ongoing-2.jpg",
      workforce: "220+",
      duration: "In Progress",
      status: "40% Complete",
      highlights: [
        "Road expansion and utility infrastructure",
        "Specialized concrete and steel fabrication teams",
        "Coordination with multiple sub-contractors",
      ],
    },
    {
      id: 3,
      title: "Residential Complex - Premium Towers",
      location: "Chennai",
      image: "/ongoing-3.jpg",
      workforce: "150+",
      duration: "In Progress",
      status: "55% Complete",
      highlights: [
        "High-rise construction with advanced techniques",
        "Skilled masonry and electrical installation teams",
        "Quality control and safety compliance maintained",
      ],
    },
  ];

  // New Hyderabad projects for July 2025
  const hydProjects = [
    {
      id: 1,
      title: "Infrastructure Development Site 1",
      location: "Hyderabad",
      image: "/images/hyd1.png",
      status: "Active",
    },
    {
      id: 2,
      title: "Construction Site 2",
      location: "Hyderabad",
      image: "/images/hyd2.png",
      status: "Active",
    },
    {
      id: 3,
      title: "Development Project Site 3",
      location: "Hyderabad",
      image: "/images/hyd3.png",
      status: "Active",
    },
    {
      id: 4,
      title: "Construction Work Site 4",
      location: "Hyderabad",
      image: "/images/hyd4.png",
      status: "Active",
    },
    {
      id: 5,
      title: "Infrastructure Site 5",
      location: "Hyderabad",
      image: "/images/hyd5.png",
      status: "Active",
    },
    {
      id: 6,
      title: "Development Site 6",
      location: "Hyderabad",
      image: "/images/hyd6.png",
      status: "Active",
    },
  ];

  // Gujarat (Mundra) projects
  const gujaratProjects = [
    {
      id: 1,
      title: "Development Site 1",
      location: "Mundra, Gujarat",
      image: "/images/guj1.png",
      status: "Active",
    },
    {
      id: 2,
      title: "Industrial Construction Site 2",
      location: "Mundra, Gujarat",
      image: "/images/guj2.png",
      status: "Active",
    },
    {
      id: 3,
      title: "Infrastructure Site 3",
      location: "Mundra, Gujarat",
      image: "/images/guj3.png",
      status: "Active",
    },
    {
      id: 4,
      title: "Development Site 4",
      location: "Mundra, Gujarat",
      image: "/images/guj4.png",
      status: "Active",
    },
  ];

  // Surat projects
  const suratProjects = [
    {
      id: 1,
      title: "Textile Industry Site 1",
      location: "Surat, Gujarat",
      image: "/images/surat1.png",
      status: "Active",
    },
    {
      id: 2,
      title: "Commercial Development Site 2",
      location: "Surat, Gujarat",
      image: "/images/surat2.png",
      status: "Active",
    },
    {
      id: 3,
      title: "Infrastructure Site 3",
      location: "Surat, Gujarat",
      image: "/images/surat3.png",
      status: "Active",
    },
    {
      id: 4,
      title: "Industrial Site 4",
      location: "Surat, Gujarat",
      image: "/images/surat4.png",
      status: "Active",
    },
  ];

  // Mumbai projects
  const mumbaiProjects = [
    {
      id: 1,
      title: "Infrastructure Site 1",
      location: "Mumbai, Maharashtra",
      image: "/images/mum1.png",
      status: "Active",
    },
    {
      id: 2,
      title: "Commercial Development Site 2",
      location: "Mumbai, Maharashtra",
      image: "/images/mum2.png",
      status: "Active",
    },
    {
      id: 3,
      title: "High-rise Construction Site 3",
      location: "Mumbai, Maharashtra",
      image: "/images/mum3.png",
      status: "Active",
    },
    {
      id: 4,
      title: "Infrastructure Site 4",
      location: "Mumbai, Maharashtra",
      image: "/images/mum4.png",
      status: "Active",
    },
  ];

  // Andhra Pradesh (Airport) projects
  const apProjects = [
    {
      id: 1,
      title: "Airport Infrastructure Site 1",
      location: "Andhra Pradesh",
      image: "/images/ap1.png",
      status: "Active",
    },
    {
      id: 2,
      title: "Airport Construction Site 2",
      location: "Andhra Pradesh",
      image: "/images/ap2.png",
      status: "Active",
    },
    {
      id: 3,
      title: "Terminal Development Site 3",
      location: "Andhra Pradesh",
      image: "/images/ap3.png",
      status: "Active",
    },
    {
      id: 4,
      title: "Airport Expansion Site 4",
      location: "Andhra Pradesh",
      image: "/images/ap4.png",
      status: "Active",
    },
  ];

  // Tamil Nadu projects
  const tnProjects = [
    {
      id: 1,
      title: "Infrastructure Site 1",
      location: "Tamil Nadu",
      image: "/images/tn1.png",
      status: "Active",
    },
    {
      id: 2,
      title: "Construction Site 2",
      location: "Tamil Nadu",
      image: "/images/tn2.png",
      status: "Active",
    },
    {
      id: 3,
      title: "Development Site 3",
      location: "Tamil Nadu",
      image: "/images/tn3.png",
      status: "Active",
    },
    {
      id: 4,
      title: "Expansion Site 4",
      location: "Tamil Nadu",
      image: "/images/tn4.png",
      status: "Active",
    },
  ];

  // Orissa projects
  const orissaProjects = [
    {
      id: 1,
      title: "Infrastructure Development Site 1",
      location: "Orissa",
      image: "/images/or1.png",
      status: "Active",
    },
    {
      id: 2,
      title: "Industrial Construction Site 2",
      location: "Orissa",
      image: "/images/or2.png",
      status: "Active",
    },
    {
      id: 3,
      title: "Development Site 3",
      location: "Orissa",
      image: "/images/or3.png",
      status: "Active",
    },
    {
      id: 4,
      title: "Construction Site 4",
      location: "Orissa",
      image: "/images/or4.png",
      status: "Active",
    },
  ];

  // Adani Khavrah Gujarat projects
  const adaniProjects = [
    {
      id: 1,
      title: "Adani Industrial Site 1",
      location: "Khavrah, Gujarat",
      image: "/images/adani1.png",
      status: "Active",
    },
    {
      id: 2,
      title: "Adani Development Site 2",
      location: "Khavrah, Gujarat",
      image: "/images/adani2.png",
      status: "Active",
    },
    {
      id: 3,
      title: "Adani Infrastructure Site 3",
      location: "Khavrah, Gujarat",
      image: "/images/adani3.png",
      status: "Active",
    },
    {
      id: 4,
      title: "Adani Construction Site 4",
      location: "Khavrah, Gujarat",
      image: "/images/adani4.png",
      status: "Active",
    },
  ];

  // Gurgaon (Haryana) projects
  const gurgaonProjects = [
    {
      id: 1,
      title: "Corporate Infrastructure Site 1",
      location: "Gurgaon, Haryana",
      image: "/images/gur1.jpg",
      status: "Active",
    },
    {
      id: 2,
      title: "Commercial Development Site 2",
      location: "Gurgaon, Haryana",
      image: "/images/gur2.jpg",
      status: "Active",
    },
    {
      id: 3,
      title: "IT Hub Construction Site 3",
      location: "Gurgaon, Haryana",
      image: "/images/gur3.jpg",
      status: "Active",
    },
    {
      id: 4,
      title: "Construction Site 4",
      location: "Gurgaon, Haryana",
      image: "/images/gur4.jpg",
      status: "Active",
    },

  ];
  
  // Kolar Bengalore projects
  const bangaloreProjects = [
    {
      id: 1,
      title: "Building IT Park",
      location: "Kolar, Bangalore",
      image: "/kolar/Kolar1.jpeg",
      status: "Active",
    },    
       {
      id: 2,
      title: "Building IT Park",
      location: "Kolar, Bangalore",
      image: "/kolar/Kolar2.jpeg",
      status: "Active",
    },    
       {
      id: 3,
      title: "Building IT Park",
      location: "Kolar, Bangalore",
      image: "/kolar/Kolar3.jpeg",
      status: "Active",
    },    
       {
      id: 4,
      title: "Building IT Park",
      location: "Kolar, Bangalore",
      image: "/kolar/Kolar4.jpeg",
      status: "Active",
    },    
    
 
  
    
  ];
  
  
  // Hosur projects
  const hosurProjects = [
    {
      id: 1,
      title: "Building IT Park",
      location: "Hosur, Tamil Nadu",
      image: "/hosur/hosur1.jpeg",
      status: "Active",
    },   {
      id: 2,
      title: "Building IT Park",
      location: "Hosur, Tamil Nadu",
      image: "/hosur/hosur2.jpeg",
      status: "Active",
    },   {
      id: 3,
      title: "Building IT Park",
      location: "Hosur, Tamil Nadu",
      image: "/hosur/hosur3.jpeg",
      status: "Active",
    },   {
      id: 4,
      title: "Building IT Park",
      location: "Hosur, Tamil Nadu",
      image: "/hosur/hosur4.jpeg",
      status: "Active",
    },    
          
    
 
  
    
  ];// Sarjapur projects
  const sarjapurProjects = [
    {
      id: 1,
      title: "Construction site",
      location: "Sarjapur, Bangalore",
      image: "/sarjapur/sarjapur1.jpeg",
      status: "Active",
    },    
          {
      id: 2,
      title: "Construction site",
      location: "Sarjapur, Bangalore",
      image: "/sarjapur/sarjapur2.jpeg",
      status: "Active",
    },    
          {
      id: 3,
      title: "Site Labour Camp",
      location: "Sarjapur, Bangalore",
      image: "/sarjapur/sarjapur3.jpeg",
      status: "Active",
    },    
          {
      id: 4,
      title: "Site Labour Camp",
      location: "Sarjapur, Bangalore",
      image: "/sarjapur/sarjapur4.jpeg",
      status: "Active",
    },    
              
  ];
  
  // Sarjapur projects
  const sarjapurProjects2 = [
    {
      id: 1,
      title: "Construction site",
      location: "Sarjapur, Bangalore",
      image: "/sarjapur/sarjapur5.jpeg",
      status: "Active",
    },    
          {
      id: 2,
      title: "Construction site",
      location: "Sarjapur, Bangalore",
      image: "/sarjapur/sarjapur6.jpeg",
      status: "Active",
    },    
          {
      id: 3,
      title: "Site Labour Camp",
      location: "Sarjapur, Bangalore",
      image: "/sarjapur/sarjapur7.jpeg",
      status: "Active",
    },    
          {
      id: 4,
      title: "Site Labour Camp",
      location: "Sarjapur, Bangalore",
      image: "/sarjapur/sarjapur8.jpeg",
      status: "Active",
    },     
              
  ];// Chennai projects
  const chennaiProjects = [
    {
      id: 1,
      title: "Construction site",
      location: "Chennai, Tamil Nadu",
      image: "/chennai/chennai1.jpeg",
      status: "Active",
    },    
          {
      id: 2,
      title: "Construction site",
      location: "Chennai, Tamil Nadu",
      image: "/chennai/chennai2.jpeg",
      status: "Active",
    },    
          {
      id: 3,
      title: "Construction site",
      location: "Chennai, Tamil Nadu",
      image: "/chennai/chennai3.jpeg",
      status: "Active",
    },    
          {
      id: 4,
      title: "Site Labour Camp",
      location: "Chennai, Tamil Nadu",
      image: "/chennai/chennai4.jpeg",
      status: "Active",
    },     
              
  ];
  const guddurProjects = [
    {
      id: 1,
      title: "Construction site",
      location: "Gudur, Andhra Pradesh",
      image: "/guddur/guddur1.jpeg",
      status: "Active",
    },    
          {
      id: 2,
      title: "Construction site",
      location: "Gudur, Andhra Pradesh",
      image: "/guddur/guddur2.jpeg",
      status: "Active",
    },    
          {
      id: 3,
      title: "Site Labour Camp",
      location: "Gudur, Andhra Pradesh",
      image: "/guddur/guddur3.jpeg",
      status: "Active",
    },    
          {
      id: 4,
      title: "Site Labour Camp",
      location: "Gudur, Andhra Pradesh",
      image: "/guddur/guddur4.jpeg",
      status: "Active",
    },     
              
  ];
const mundraNMRProjects = [
    {
      id: 1,
      title: "Construction site",
      location: "Mundra, Gujarat",
      image: "/mundra/mundra1.jpeg",
      status: "Active",
    },    
          {
      id: 2,
      title: "Construction site",
      location: "Mundra, Gujarat",
      image: "/mundra/mundra2.jpeg",
      status: "Active",
    },    
          {
      id: 3,
      title: "Site Labour Camp",
      location: "Mundra, Gujarat",
      image: "/mundra/mundra3.jpeg",
      status: "Active",
    },    
          {
      id: 4,
      title: "Site Labour Camp",
      location: "Mundra, Gujarat",
      image: "/mundra/mundra4.jpeg",
      status: "Active",
    },     
              
  ];

  const cyberCityProjects = [
    {
      id: 1,
      title: "Construction site",
      location: "Chennai, Tamil Nadu",
      image: "/cyber city/cyber city1.jpeg",
      status: "Active",
    },    
          {
      id: 2,
      title: "Construction site",
      location: "Chennai, Tamil Nadu",
      image: "/cyber city/cyber city2.jpeg",
      status: "Active",
    },    
          {
      id: 3,
      title: "Site Labour Camp",
      location: "Chennai, Tamil Nadu",
      image: "/cyber city/labour camp1.jpeg",
      status: "Active",
    },    
          {
      id: 4,
      title: "Site Labour Camp",
      location: "Chennai, Tamil Nadu",
      image: "/cyber city/labour camp2.jpeg",
      status: "Active",
    },     
              
  ];
  
  const google = [
    {
      id: 1,
      title: "Construction site",
      location: "Hyderabad",
      image: "/google/google1.jpeg",
      status: "Active",
    },    
        {
      id: 2,
      title: "Construction site",
      location: "Hyderabad",
      image: "/google/google2.jpeg",
      status: "Active",
    },    
          
          {
      id: 3,
      title: "Site Labour Camp",
      location: "Hyderabad",
      image: "/google/google3.jpg",
      status: "Active",
    },   
       {
      id: 4,
      title: "Site Labour Camp",
      location: "Hyderabad",
      image: "/google/google4.jpg",
      status: "Active",
    },    
           
              
  ];
  
  
  const chennaiIt = [
    {
      id: 1,
      title: "Construction site",
      location: "Chennai, Tamil Nadu",
      image: "/chennai it/chennai it1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Chennai, Tamil Nadu",
      image: "/chennai it/chennai it2.jpeg",
      status: "Active",
    }, {
      id: 3,
      title: "Labour Camp",
      location: "Chennai, Tamil Nadu",
      image: "/chennai it/chennai it3.jpeg",
      status: "Active",
    }, {
      id: 4,
      title: "Labour Camp",
      location: "Chennai, Tamil Nadu",
      image: "/chennai it/chennai it4.jpeg",
      status: "Active",
    },    
           
              
  ];
  
  const angul = [
    {
      id: 1,
      title: "Construction site",
      location: "Angul, Odisha",
      image: "/angul/angul1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Angul, Odisha",
      image: "/angul/angul2.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Labour Camp",
      location: "Angul, Odisha",
      image: "/angul/angul3.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Construction site",
      location: "Angul, Odisha",
      image: "/angul/angul4.jpeg",
      status: "Active",
    },   
           
              
  ];
  return (
    <section
      id="ongoing-projects"
      className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20 bg-gray-50"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
            Current Ongoing Projects -
            <span className="text-yellow-500"> Chennai</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Currently active projects where our skilled workforce is making a
            difference across Chennai's infrastructure and construction
            landscape.
          </p>
        </div>

        {/* Ongoing Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-18 mb-20">
          {ongoingProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 hover:-translate-y-2"
            >
              {/* Project Image Only */}
              <div className="relative h-70 overflow-hidden">
                <img loading="lazy"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x320/3B82F6/FFFFFF?text=Ongoing+Project`;
                  }}
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Hyderabad Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              On Going Work On Different Sites Location{" "}
              <span className="text-yellow-500">July 2025</span>
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Hyderabad</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">July 2025</span>
              </div>
            </div>
          </div>

          {/* Hyderabad Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {hydProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gujarat (Mundra) Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Gujarat ( Mundra )</span> Sites
              Location (Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Mundra, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Gujarat Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gujaratProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Mundra+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Surat Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Surat</span> Sites Location (Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Surat, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Surat Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suratProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Surat+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mumbai Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Mumbai</span> Sites Location (Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Mumbai Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mumbaiProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Mumbai+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Andhra Pradesh (Airport) Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Andhra Pradesh (Airport)</span> Sites
              Location (Supply) <span className="text-gray-600"></span>
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Andhra Pradesh</span>
              </div>
            </div>
          </div>

          {/* Andhra Pradesh Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=AP+Airport+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tamil Nadu Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Tamil Nadu</span> Sites Location (Supply){" "}
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Tamil Nadu Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tnProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=TN+Airport+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orissa Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Orissa</span> Sites Location (Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Orissa</span>
              </div>
            </div>
          </div>

          {/* Orissa Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {orissaProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Orissa+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Adani Khavrah Gujarat Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Adani Khavrah (Gujarat)</span>{" "}
              Sites Location (Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Khavrah, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Adani Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adaniProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Adani+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gurgaon (Haryana) Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Gurgaon (Haryana)</span> Sites
              Location (Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Gurgaon, Haryana</span>
              </div>
            </div>
          </div>

          {/* Gurgaon Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gurgaonProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>




        </div>
        
        
        {/* Kolar Bangalore Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Kolar (Bangalore)</span> Sites
              Location (Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Kolar, Bangalore</span>
              </div>
            </div>
          </div>

          {/* Kolar Bangalore Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bangaloreProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


{/* hosur Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Hosur (Tamil Nadu)</span> Sites
              Location (Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Hosur, Tamil Nadu</span>
              </div>
            </div>
          </div>




          {/* hosur Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hosurProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>{/* sarjapur Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Sarjapur (Bangalore)</span> Sites
              Location 1 (Measurement)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Sarjapur, Bangalore</span>
              </div>
            </div>
          </div>




          {/* sarjapur Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sarjapurProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        {/* sarjapur Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Sarjapur (Bangalore)</span> Sites
              Location 2 (Measurement)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Sarjapur, Bangalore</span>
              </div>
            </div>
          </div>




          {/* sarjapur Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sarjapurProjects2.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* chennai Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Chennai (Tamil Nadu)</span> Sites
              Location  (Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>




          {/* chennai Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chennaiProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        
        
         {/* guddur Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Gudur (Andhra Pradesh)</span> Sites
              Location  (Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Gudur, Andhra Pradesh</span>
              </div>
            </div>
          </div>




          {/* guddur Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guddurProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        
        {/* mundra NMR Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Mundra (Gujarat)</span> Sites
              Location  (NMR-Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Mundra, Gujarat</span>
              </div>
            </div>
          </div>




          {/* mundra Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mundraNMRProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



  {/*cyber city Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Cyber City (Chennai)</span> Sites
              Location  (Supply)
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Cyber City, Chennai</span>
              </div>
            </div>
          </div>




          {/* cyber city Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cyberCityProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        
        {/*google Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Google Project (Hyderabad)</span> Sites
              Location 
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Hyderabad</span>
              </div>
            </div>
          </div>




          {/* cyber city Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {google.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        
        {/*chennai it Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">IT Park (Chennai)</span> Sites
              Location 
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>




          {/* it park Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chennaiIt.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        
        
         {/*angul Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Hospital Project (Odisha)</span> Sites
              Location 
            </h3>
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-lg font-medium">Angul, Odisha</span>
              </div>
            </div>
          </div>




          {/* angul Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {angul.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Gurgaon+Site+${project.id}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>






        {/* Bottom Info */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Excellence in Every Project
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              These ongoing projects demonstrate our commitment to quality,
              safety, and timely delivery across multiple states and
              infrastructure needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-300">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-yellow-500" />
                Real-time Progress Monitoring
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-yellow-500" />
                Safety First Approach
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-yellow-500" />
                Quality Assurance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProjectsSection;
