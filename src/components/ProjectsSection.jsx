import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Clock,
  CheckCircle,
  Building2,
  Zap,
  Factory,
  Home,
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      client: "TATA Projects",
      title: "Smart City Infrastructure (Hyderabad)",
      icon: Building2,
      workforce: "250+",
      duration: "18 months",
      highlights: [
        "Supplied 250+ skilled and unskilled labourers across phases",
        "Trades included Electricians, Plumbers, Masonry Workers, and Helpers",
        "Ensured uninterrupted labour flow for 18 months",
        "Successfully supported project completion ahead of deadline",
      ],
    },
    {
      id: 2,
      client: "L&T",
      title: "Metro Rail Development (Mumbai & Chennai)",
      icon: Zap,
      workforce: "300+",
      duration: "Ongoing",
      highlights: [
        "Deployed over 300 workers at different stations and depot sites",
        "Included specialized trades like Shuttering Carpenters and Barbenders",
        "Assisted in night-shift deployment to maintain construction pace",
        "Introduced a digital attendance system for L&T supervisors",
      ],
    },
    {
      id: 3,
      client: "ADANI",
      title: "Coastal Power Project (Gujarat)",
      icon: Zap,
      workforce: "High-skilled",
      duration: "14+ months",
      highlights: [
        "Delivered workforce for high-risk environments, including welders and industrial painters",
        "Safety-trained before deployment in collaboration with Adani's safety teams",
        "Maintained zero injury rate for 14 consecutive months",
      ],
    },
    {
      id: 4,
      client: "KEC International",
      title: "Transmission Lines (Pan India)",
      icon: Zap,
      workforce: "Multi-state",
      duration: "Ongoing",
      highlights: [
        "Ongoing workforce supply in Kerala, Mumbai, Chennai, Gujarat & Hyderabad",
        "High-demand project requiring fast mobilization and terrain-readiness",
        "Coordination across multiple states managed seamlessly",
      ],
    },
    {
      id: 5,
      client: "Robomatics Automation",
      title: "Smart Factory Setup (Hyderabad)",
      icon: Factory,
      workforce: "Specialized",
      duration: "Project-based",
      highlights: [
        "Provided specialized technicians, cable helpers, electricians, and welders",
        "Enabled the client to complete advanced manufacturing unit installation",
        "Introduced technical evaluation of candidates before deployment",
      ],
    },
    {
      id: 6,
      client: "Vijay Nirman Construction",
      title: "Residential Towers (Hyderabad)",
      icon: Home,
      workforce: "200+",
      duration: "Peak periods",
      highlights: [
        "Delivered over 200+ skilled workers (Tiling, Masonry, Barbending)",
        "Onsite supervisors from LABOURBridge coordinated daily tasks",
        "Assisted in managing peak workforce periods",
      ],
    }, {
      id: 7,
      client: "Godrej Properties",
      title: "Residential Building Project (Gurugram)",
      icon: Building2,
      workforce: "200+",
      duration: "Project-based",
      highlights: [
        "Supplied skilled and unskilled manpower including carpenters, masons, bar benders, steel fixers, electricians, plumbers, painters, helpers, and supervisors.",
        "Supported structural, finishing, and MEP activities by meeting fluctuating workforce requirements.",
        "Delivered reliable workforce solutions while maintaining high standards of safety, productivity, and quality.",
      ],
    },
    
 {
  id: 8,
  client: "Capacit'e Infraprojects Limited",
  title: "High-Rise Building Projects (Mumbai & Noida)",
  icon: Building2,
  workforce: "200+",
  duration: "Project-based",
  highlights: [
    "Supplied skilled and unskilled manpower including Mivan specialists, carpenters, masons, bar benders, steel fixers, electricians, plumbers, painters, gypsum workers, helpers, and supervisors.",
    "Supported structural, finishing, and MEP activities through rapid workforce mobilization and efficient resource planning.",
    "Ensured statutory compliance, safety standards, and reliable workforce management to maintain project timelines and productivity.",
  ],
},
{
  id: 9,
  client: "Punj Lloyd",
  title: "Construction Project (Gurugram)",
  icon: Building2,
  workforce: "150+",
  duration: "Project-based",
  highlights: [
    "Supplied skilled and unskilled manpower including carpenters, bar benders, fitters, welders, masons, helpers, painters, electricians, plumbers, and finishing specialists.",
    "Managed recruitment, deployment, attendance, payroll, statutory compliance, and continuous workforce replacement to ensure uninterrupted operations.",
    "Supported timely project execution through disciplined workforce coordination, safety compliance, and efficient manpower management.",
  ],
},
{
  id: 10,
  client: "NCC Limited",
  title: "Solar & MPL Infrastructure Projects",
  icon: Building2,
  workforce: "300+",
  duration: "Project-based",
  highlights: [
    "Supplied skilled and unskilled manpower including carpenters, bar benders, steel fixers, masons, shuttering carpenters, Mivan specialists, electricians, fitters, welders, painters, helpers, and supervisors.",
    "Managed recruitment, onboarding, attendance, payroll, statutory compliance, and workforce replacement to ensure uninterrupted project execution.",
    "Supported civil, structural, mechanical, and finishing activities through rapid workforce mobilization while maintaining safety, quality, and project timelines.",
  ],
},
{
  id: 11,
  client: "Afcons Infrastructure",
  title: "Jamnagar Greenfield Project",
  icon: Building2,
  workforce: "300+",
  duration: "Project-based",
  highlights: [
    "Supplied skilled and unskilled manpower including Mivan carpenters, shuttering carpenters, bar benders, steel fixers, fitters, welders, masons, electricians, plumbers, painters, gypsum workers, helpers, and site supervisors.",
    "Managed recruitment, deployment, attendance, payroll, statutory compliance, and continuous workforce availability while adhering to international safety and quality standards.",
    "Supported structural, civil, mechanical, and finishing activities through proactive workforce planning, ensuring uninterrupted progress and improved construction productivity.",
  ],
},

{
  id: 12,
  client: "CTRLS Data Centers",
  title: "Data Center Project (Hyderabad)",
  icon: Building2,
  workforce: "200+",
  duration: "Project-based",
  highlights: [
    "Supplied skilled and unskilled manpower including shuttering carpenters, bar benders, steel fixers, fitters, electricians, plumbers, MEP support staff, painters, gypsum installers, helpers, and supervisors.",
    "Managed recruitment, rapid workforce mobilization, attendance, payroll, statutory compliance, and continuous workforce replacement to ensure uninterrupted project execution.",
    "Supported structural construction, MEP installations, and finishing works while maintaining high safety standards, quality, and timely project milestones.",
  ],
},

{
  id: 13,
  client: "Balajee Infratech",
  title: "NALCO Construction Project (Odisha)",
  icon: Building2,
  workforce: "200+",
  duration: "Project-based",
  highlights: [
    "Supplied skilled and unskilled manpower including carpenters, bar benders, steel fixers, fitters, welders, masons, electricians, plumbers, painters, helpers, and supervisors.",
    "Managed end-to-end workforce operations including recruitment, mobilization, attendance, payroll, statutory compliance, and continuous manpower replacement.",
    "Supported structural, civil, and finishing activities through efficient workforce planning while maintaining safety, quality, and uninterrupted project execution.",
  ],
},
{
  id: 14,
  client: "PMCH",
  title: "Patna Medical College & Hospital Redevelopment Project",
  icon: Building2,
  workforce: "300+",
  duration: "Project-based",
  highlights: [
    "Supplied skilled and unskilled manpower including Mivan specialists, shuttering carpenters, bar benders, steel fixers, masons, electricians, plumbers, painters, gypsum installers, helpers, and site supervisors.",
    "Managed recruitment, workforce mobilization, attendance, payroll, statutory compliance, labour welfare, and continuous manpower replacement for uninterrupted project execution.",
    "Supported structural works, MEP installations, and finishing activities while maintaining safety, quality, and timely completion of this landmark healthcare infrastructure project.",
  ],
},

{
  id: 15,
  client: "ITD Cementation India Limited",
  title: "Infrastructure & Industrial Project (Mundra, Gujarat)",
  icon: Building2,
  workforce: "250+",
  duration: "Project-based",
  highlights: [
    "Supplied skilled and unskilled manpower including Mivan carpenters, shuttering carpenters, bar benders, steel fixers, masons, fitters, welders, electricians, plumbers, painters, gypsum installers, helpers, and site supervisors.",
    "Managed recruitment, deployment, attendance, payroll, statutory compliance, and workforce replacement to ensure uninterrupted manpower availability throughout the project.",
    "Supported structural, civil, mechanical, and finishing activities while maintaining safety, quality, and timely achievement of critical project milestones.",
  ],
},
{
  id: 16,
  client: "Kanwar Enterprises",
  title: "Industrial Construction Project (Mundra, Gujarat)",
  icon: Building2,
  workforce: "200+",
  duration: "Project-based",
  highlights: [
    "Supplied skilled and unskilled manpower including Mivan specialists, shuttering carpenters, carpenters, bar benders, fitters, welders, masons, electricians, plumbers, painters, gypsum workers, helpers, and supervisors.",
    "Managed recruitment, onboarding, attendance, payroll, statutory compliance, and continuous workforce support to ensure uninterrupted project execution.",
    "Supported multiple construction work fronts through timely manpower mobilization while maintaining safety, productivity, and quality standards.",
  ],
},
{
  id: 17,
  client: "LCC Projects",
  title: "Infrastructure Project (Mundra, Gujarat)",
  icon: Building2,
  workforce: "200+",
  duration: "Project-based",
  highlights: [
    "Supplied skilled and unskilled manpower including Mivan specialists, shuttering carpenters, bar benders, steel fixers, masons, fitters, welders, electricians, plumbers, painters, gypsum installers, helpers, and supervisors.",
    "Managed recruitment, deployment, attendance, payroll, statutory compliance, labour welfare, and continuous workforce planning for uninterrupted project execution.",
    "Supported structural, civil, and finishing activities through rapid manpower mobilization while maintaining safety, productivity, and project timelines.",
  ],
},
{
  id: 18,
  client: "M/s Kruti",
  title: "Industrial Construction Project (Mundra, Gujarat)",
  icon: Building2,
  workforce: "200+",
  duration: "Project-based",
  highlights: [
    "Supplied skilled and unskilled manpower including Mivan carpenters, shuttering carpenters, bar benders, steel fixers, masons, fitters, welders, electricians, plumbers, painters, gypsum workers, helpers, and site supervisors.",
    "Managed end-to-end manpower services including recruitment, mobilization, attendance, payroll, statutory compliance, and continuous workforce replacement.",
    "Supported industrial and infrastructure construction activities while maintaining safety standards, workforce productivity, and timely project milestones.",
  ],
},
  ];

  return (
    <section
      id="projects"
      className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20 bg-white w-full overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Key <span className="text-yellow-500">Projects Delivered</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Over the years, M/s LABOURBridge India has had the privilege of
            contributing to some of India's most prestigious infrastructure and
            construction projects. Each project has strengthened our commitment
            to timely deployment, skilled supervision, and uncompromised labour
            standards.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-500 group-hover:bg-yellow-400 p-3 rounded-2xl transition-colors mr-4 flex-shrink-0">
                      <Icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                        {project.client}
                      </h3>
                      <p className="text-gray-600 font-medium mb-3">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      {project.workforce} Workers
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      {project.duration}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      Multiple Sites
                    </span>
                  </div>
                </div>

                {/* Project Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Achievements:
                  </h4>
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join these industry leaders and experience the LABOURBridge
              difference. From skilled technicians to project management
              support, we deliver excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-300">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-yellow-500" /> Zero
                Injury Records
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-yellow-500" /> On-time
                Delivery
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-yellow-500" />{" "}
                Multi-state Operations
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
