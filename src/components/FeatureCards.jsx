
import {
  Factory,
  Settings,
  ShieldCheck,
  UserCheck,
  TrendingUp,
} from "lucide-react";

const FeatureCard = () => {
  const features = [
    {
      icon: Settings,
      title: "Industry-Focused Training",
      description:
        "Practical training programs designed around real industry requirements.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Safety Standards",
      description:
        "Building a workforce that follows professional quality and safety practices.",
    },

    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Creating pathways for continuous learning and professional development.",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-50 p-6 sm:p-8 lg:p-10">

      <div className="relative z-10">

        {/* Header */}
       

       

        {/* Responsive Feature Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-slate-200/70 sm:p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h4 className="mb-2 text-base font-bold text-[#101F35] transition-colors duration-300 group-hover:text-orange-500 sm:text-lg">
                  {feature.title}
                </h4>

                <p className="text-sm leading-7 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      

      </div>
    </section>
  );
};

export default FeatureCard;
