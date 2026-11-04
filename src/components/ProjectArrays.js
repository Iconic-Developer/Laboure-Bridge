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
  image: "/angul/angul1.avif",
  status: "Active",
},
{
  id: 2,
  title: "Construction site",
  location: "Angul, Odisha",
  image: "/angul/angul2.avif",
  status: "Active",
},
{
  id: 3,
  title: "Labour Camp",
  location: "Angul, Odisha",
  image: "/angul/angul3.avif",
  status: "Active",
},
{
  id: 4,
  title: "Construction site",
  location: "Angul, Odisha",
  image: "/angul/angul4.avif",
  status: "Active",
}, 
           
              
  ];
  
  
  const pune = [
    {
      id: 1,
      title: "Construction site",
      location: "Pune, Maharashtra",
      image: "/pune/pune1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Pune, Maharashtra",
      image: "/pune/pune2.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Labour Camp",
      location: "Pune, Maharashtra",
      image: "/pune/labour camp1.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Construction site",
      location: "Pune, Maharashtra",
      image: "/pune/labour camp2.jpeg",
      status: "Active",
    },   
           
              
  ];
  
  
  const gurugram = [
    {
      id: 1,
      title: "Construction site",
      location: "Gurugram, Haryana",
      image: "/gurugram/gurugram1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Gurugram, Haryana",
      image: "/gurugram/gurugram2.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Labour Camp",
      location: "Gurugram, Haryana",
      image: "/gurugram/labour camp1.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Construction site",
      location: "Gurugram, Haryana",
      image: "/gurugram/labour camp2.jpeg",
      status: "Active",
    },   
           
              
  ];
  
  const mahalaxmi = [
    {
      id: 1,
      title: "Construction site",
      location: "Mahalaxmi, Mumbai",
      image: "/mahalaxmi/mahalaxmi1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Mahalaxmi, Mumbai",
      image: "/mahalaxmi/mahalaxmi2.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Labour Camp",
      location: "Mahalaxmi, Mumbai",
      image: "/mahalaxmi/labour camp1.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Construction site",
      location: "Mahalaxmi, Mumbai",
      image: "/mahalaxmi/labour camp2.jpeg",
      status: "Active",
    },   
           
              
  ];
  
  
  const perambur = [
    {
      id: 1,
      title: "Construction site",
      location: "Perambur, Chennai",
      image: "/perambur/perambur1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Perambur, Chennai",
      image: "/perambur/perambur2.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Labour Camp",
      location: "Perambur, Chennai",
      image: "/perambur/labour camp1.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Construction site",
      location: "Perambur, Chennai",
      image: "/perambur/labour camp2.jpeg",
      status: "Active",
    },   
           
              
  ]; 
  
  
  const kalamboli = [
    {
      id: 1,
      title: "Construction site",
      location: "Kalamboli, Mumbai",
      image: "/kalmboli/kalamboli1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Kalamboli, Mumbai",
      image: "/kalmboli/kalamboli2.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Labour Camp",
      location: "Kalamboli, Mumbai",
      image: "/kalmboli/labour camp1.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Construction site",
      location: "Kalamboli, Mumbai",
      image: "/kalmboli/labour camp2.jpeg",
      status: "Active",
    },   
           
              
  ];
  
  const panchkhula = [
    {
      id: 1,
      title: "Construction site",
      location: "Panchkhula, Haryana",
      image: "/panchkhula/panchkhula1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Panchkhula, Haryana",
      image: "/panchkhula/panchkhula2.jpeg",
      status: "Active",
    }, {
      id: 3,
      title: "Labour Camp",
      location: "Panchkhula, Haryana",
      image: "/panchkhula/labour camp1.jpeg",
      status: "Active",
    }, {
      id: 4,
      title: "Construction site",
      location: "Panchkhula, Haryana",
      image: "/panchkhula/labour camp2.jpeg",
      status: "Active",
    },   
           
              
  ];
  
  const raipur = [
    {
      id: 1,
      title: "Construction site",
      location: "Raipur, Chhattisgarh",
      image: "/raipur/construction_1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Raipur, Chhattisgarh",
      image: "/raipur/construction_2.jpeg",
      status: "Active",
    },
      {
      id: 3,
      title: "Construction site",
      location: "Raipur, Chhattisgarh",
      image: "/raipur/construction_3.jpeg",
      status: "Active",
    },  
    {
      id: 4,
      title: "Construction site",
      location: "Raipur, Chhattisgarh",
      image: "/raipur/construction_4.jpeg",
      status: "Active",
      
      
    },
    
  ];
  
  const bom3 = [
    {
      id: 1,
      title: "Construction site",
      location: "Mumbai, Maharashtra",
      image: "/bom3/construction_1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Mumbai, Maharashtra",
      image: "/bom3/construction_2.jpeg",
      status: "Active",
    },
    
    
    {
      id: 3,
      title: "Construction site",
      location: "Mumbai, Maharashtra",
      image: "/bom3/construction_3.jpeg",
      status: "Active",
    }, 
    
    {
      id: 4,
      title: "Labour Camp",
      location: "Mumbai, Maharashtra",
      image: "/bom3/camp.jpeg",
      status: "Active",
    },   
           
              
  ];
  
  const bengal = [
    {
      id: 1,
      title: "Construction site",
      location: "Kolkata, West Bengal",
      image: "/bengal/bengal_1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Kolkata, West Bengal",
      image: "/bengal/bengal_2.jpeg",
      status: "Active",
    },
    
    
    {
      id: 3,
      title: "Construction site",
      location: "Kolkata, West Bengal",
      image: "/bengal/bengal_3.jpeg",
      status: "Active",
    }, 
    
    {
      id: 4,
      title: "Construction site",
      location: "Kolkata, West Bengal",
      image: "/bengal/bengal_4.jpeg",
      status: "Active",
    },   
           
              
  ];

  const dlf = [
    {
      id: 1,
      title: "Construction site",
      location: "Gurugram, Haryana",
      image: "/dlf/construction_1.jpeg",
      status: "Active",
    }, {
      id: 2,
      title: "Construction site",
      location: "Gurugram, Haryana",
      image: "/dlf/construction_2.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Labour Camp",
      location: "Gurugram, Haryana",
      image: "/dlf/camp_1.jpeg",
      status: "Active",
    }, {
      id: 1,
      title: "Construction site",
      location: "Gurugram, Haryana",
      image: "/dlf/camp_2.jpeg",
      status: "Active",
    },   
           
              
  ];

  export default projectArrays;