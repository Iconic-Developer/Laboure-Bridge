
import Navbar from "./NavbarCSS.jsx";
import Footer from "./Footer.jsx";
import TrainingVideos from "./TrainingVideos.jsx";

import {
  ArrowRight,
  ArrowUpRight,
  Hammer,
  Ruler,
  Wrench,
  Building2,
  HardHat,
  ShieldCheck,
  Users,
  TrendingUp,
  Award,
  BriefcaseBusiness,
  ClipboardCheck,
  BookOpen,
  CheckCircle2,
  Target,
  Factory,
  GraduationCap,
  UserCheck,
  Settings,
  ChartNoAxesCombined,
} from "lucide-react";

import FeatureCards from "./FeatureCards.jsx";


const programs = [
  {
    id: 1,
    title: "Skilled Carpenter (Shuttering)",
    category: "CONSTRUCTION TRADE",
    icon: Hammer,
    description:
      "Develop practical expertise in shuttering systems, formwork installation, construction drawings and quality workmanship.",
    skills: [
      "Measurement and drawing interpretation",
      "Timber and plywood handling",
      "Formwork for columns, beams and slabs",
      "Cutting, assembly and dismantling",
      "Tool maintenance and site safety",
    ],
  },
  {
    id: 2,
    title: "Bar Bender & Steel Fixer",
    category: "STEEL REINFORCEMENT",
    icon: Ruler,
    description:
      "Build precision and confidence in reinforcement work through practical steel cutting, bending and placement techniques.",
    skills: [
      "Bar bending schedules",
      "Steel cutting and bending",
      "Reinforcement placement",
      "Steel tying techniques",
      "Drawing interpretation and quality",
    ],
  },
  {
    id: 3,
    title: "Fitter",
    category: "ENGINEERING & MAINTENANCE",
    icon: Wrench,
    description:
      "Develop technical capabilities in mechanical fitting, equipment assembly, alignment and preventive maintenance.",
    skills: [
      "Precision measurement",
      "Mechanical fitting and assembly",
      "Equipment alignment",
      "Hand and power tool usage",
      "Preventive maintenance",
    ],
  },
  {
    id: 4,
    title: "Scaffolding Technician",
    category: "INDUSTRIAL SAFETY",
    icon: Building2,
    description:
      "Learn safe scaffolding operations, inspection procedures, load management and fall protection practices.",
    skills: [
      "Scaffolding erection and dismantling",
      "Inspection techniques",
      "Fall protection",
      "Load management",
      "Hazard identification and safety standards",
    ],
  },
  {
    id: 5,
    title: "Construction Helpers",
    category: "FOUNDATION SKILLS",
    icon: HardHat,
    description:
      "Build a strong foundation in construction site operations, teamwork, material handling and workplace safety.",
    skills: [
      "Material handling",
      "Housekeeping and site operations",
      "Basic tool usage",
      "Workplace communication",
      "Teamwork and safety awareness",
    ],
  },
];


const benefits = [
  {
    icon: Target,
    title: "Industry-focused training",
    description:
      "Practical, job-ready training designed around real industry requirements.",
  },
  {
    icon: GraduationCap,
    title: "Experienced trainers",
    description:
      "Learn from experienced industry professionals and mentors.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-focused learning",
    description:
      "Build safe working habits and awareness at every stage.",
  },
  {
    icon: TrendingUp,
    title: "Career progression",
    description:
      "Develop skills that open doors to greater responsibilities.",
  },
  {
    icon: Award,
    title: "Better employability",
    description:
      "Improve professional capabilities and workplace productivity.",
  },
  {
    icon: Users,
    title: "Continuous development",
    description:
      "Encouragement and support for lifelong learning and growth.",
  },
];


const careerStages = [
  {
    number: "01",
    title: "Helper",
    description: "Build foundational workplace skills.",
    icon: HardHat,
  },
  {
    number: "02",
    title: "Skilled Worker",
    description: "Develop specialized trade expertise.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Senior Technician",
    description: "Take on advanced technical responsibilities.",
    icon: Award,
  },
  {
    number: "04",
    title: "Supervisor",
    description: "Progress towards site management roles.",
    icon: BriefcaseBusiness,
  },
];


function LMS() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-800">

      <Navbar />

      <main>

        {/* ================= HERO SECTION ================= */}

       ```jsx
<section
  id="home"
  className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 text-[#101F35]"
>
  {/* Background Gradients */}
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-400/15 blur-3xl" />
  <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
  <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-sky-300/10 blur-3xl" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">

    {/* Hero Content */}
    <div className="max-w-2xl">

      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold tracking-wider text-orange-600 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-orange-500" />
        LEARNING & DEVELOPMENT
      </div>

      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#101F35] sm:text-5xl lg:text-6xl">
        Building Skilled
        <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 bg-clip-text text-transparent">
          Professionals.
        </span>
        Creating Better Futures.
      </h1>

      <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
        Empowering workers through continuous learning, technical
        expertise and workplace safety. Developing a skilled,
        confident and productive workforce for tomorrow.
      </p>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row">

        <a
          href="#training-programs"
          className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
        >
          Explore Training Programs
          <ArrowRight size={19} />
        </a>

        <a
          href="#about"
          className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/80 px-7 py-4 font-semibold text-[#101F35] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50"
        >
          Discover Our Mission
          <ArrowUpRight size={18} />
        </a>

      </div>

      {/* Feature Highlights */}
      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-slate-200 pt-7">

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-orange-500" size={25} />
          <span className="text-sm font-medium text-slate-600">
            Safety First
          </span>
        </div>

        <div className="flex items-center gap-3">
          <GraduationCap className="text-orange-500" size={25} />
          <span className="text-sm font-medium text-slate-600">
            Skill Development
          </span>
        </div>

        <div className="flex items-center gap-3">
          <TrendingUp className="text-orange-500" size={25} />
          <span className="text-sm font-medium text-slate-600">
            Career Growth
          </span>
        </div>

      </div>
    </div>

    {/* Hero Visual */}
  
<div className="relative mx-auto w-full max-w-lg">

  <div className="absolute inset-5 rounded-full bg-orange-400/20 blur-3xl" />

  <div className="relative overflow-hidden rounded-3xl border border-white bg-white/80 p-4 shadow-[0_25px_80px_-20px_rgba(30,64,100,0.20)] backdrop-blur-xl sm:p-6">

    {/* Card Header */}
    <div className="mb-5 flex items-center justify-between">
      <div>
        <p className="text-xs font-bold tracking-widest text-orange-500">
          OUR PURPOSE
        </p>
        <h3 className="mt-1.5 text-lg font-bold text-[#101F35] sm:text-xl">
          Skills That Build Futures
        </h3>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 p-2.5 text-white shadow-lg shadow-orange-500/25">
        <HardHat size={25} />
      </div>
    </div>

    {/* Central Illustration */}
    <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-[#EDF5FC] via-[#E4F0FA] to-[#FFF0E5] sm:h-[290px]">

      {/* Decorative Circles */}
      <div className="absolute h-52 w-52 rounded-full border border-orange-400/30" />
      <div className="absolute h-40 w-40 rounded-full border border-blue-400/30" />
      <div className="absolute h-28 w-28 rounded-full bg-orange-300/20 blur-2xl" />

      {/* Main Icon */}
      <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-2xl shadow-orange-500/30 sm:h-36 sm:w-36">
        <HardHat
          size={78}
          strokeWidth={1.2}
          className="sm:h-24 sm:w-24"
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute left-5 top-6 rounded-xl border border-white bg-white/90 p-2.5 text-orange-500 shadow-lg sm:left-8">
        <Hammer size={21} />
      </div>

      <div className="absolute right-5 top-12 rounded-xl border border-white bg-white/90 p-2.5 text-blue-600 shadow-lg sm:right-8">
        <Wrench size={21} />
      </div>

      <div className="absolute bottom-6 left-7 rounded-xl border border-white bg-white/90 p-2.5 text-emerald-600 shadow-lg">
        <ShieldCheck size={21} />
      </div>

      <div className="absolute bottom-6 right-7 rounded-xl border border-white bg-white/90 p-2.5 text-blue-600 shadow-lg">
        <Building2 size={21} />
      </div>

    </div>

    {/* Learning Process */}
    <div className="mt-4 grid grid-cols-3 gap-2">

      {[
        { icon: BookOpen, label: "LEARN" },
        { icon: Settings, label: "PRACTICE" },
        { icon: Award, label: "GROW" },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50 p-2.5 text-center transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <Icon className="mx-auto mb-1.5 text-orange-500" size={21} />
            <span className="text-[10px] font-bold tracking-wider text-slate-600">
              {item.label}
            </span>
          </div>
        );
      })}

    </div>

  </div>



</div>

  </div>
</section>

 {/* ================= FEATURE CARDS ================= */}

        <FeatureCards />

        {/* ================= INTRODUCTION ================= */}

        <section id="about" className="bg-white px-5 py-20 sm:px-8 lg:py-24">

          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="text-xs font-bold tracking-[0.2em] text-orange-600">
                MORE THAN MANPOWER
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#101F35] sm:text-4xl lg:text-5xl">
                Developing People.
                <span className="block text-orange-500">
                  Strengthening Industries.
                </span>
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-600">
                At M/s Labour Bridges India, we believe that people are the
                foundation of every successful project. Our mission goes
                beyond connecting businesses with reliable manpower. We
                are committed to transforming lives through continuous
                learning, skill development and career advancement.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                We invest in the growth of every worker through structured
                learning programs designed to improve technical expertise,
                workplace safety, confidence and employability.
              </p>

              <div className="mt-8 rounded-xl border-l-4 border-orange-500 bg-slate-50 p-5">
                <p className="font-semibold leading-7 text-[#101F35]">
                  "Empower workers with knowledge, enhance their skills,
                  and help them earn better livelihoods."
                </p>
                <p className="mt-3 text-xs font-bold tracking-widest text-orange-600">
                  OUR VISION
                </p>
              </div>

            </div>


          


<div className="relative isolate w-full max-w-full overflow-hidden">

  {/* Background Decorative Effects */}
  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-200/40 blur-3xl" />

  <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-orange-200/40 blur-3xl" />

  {/* Main Card */}
  <div className="relative w-full overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-[#F4F8FD] to-[#FFF4EB] p-5 shadow-[0_20px_60px_-20px_rgba(30,64,100,0.15)] sm:p-6">

    {/* Header */}
    <div className="mb-5 flex items-center gap-3">

      <div className="rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 p-2.5 shadow-lg shadow-orange-500/20">
        <Factory size={25} className="text-white" />
      </div>

      <div className="min-w-0">
        <h3 className="text-lg font-bold text-[#101F35]">
          Building Workforce Excellence
        </h3>
        <p className="mt-0.5 text-xs text-slate-500">
          Skills for a stronger tomorrow
        </p>
      </div>

    </div>

    {/* Compact Feature List */}
    <div className="space-y-2.5">

      {[
        {
          title: "Technical Expertise",
          text: "Develop practical industry skills.",
          icon: Settings,
        },
        {
          title: "Workplace Safety",
          text: "Build awareness and safe work habits.",
          icon: ShieldCheck,
        },
        {
          title: "Professional Confidence",
          text: "Prepare for real-world responsibilities.",
          icon: UserCheck,
        },
        {
          title: "Career Advancement",
          text: "Create opportunities for professional growth.",
          icon: TrendingUp,
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group flex min-w-0 items-center gap-3 rounded-xl border border-slate-100 bg-white/90 p-3 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-md"
          >

            <div className="shrink-0 rounded-lg bg-orange-50 p-2 transition-colors group-hover:bg-orange-100">
              <Icon className="text-orange-500" size={21} />
            </div>

            <div className="min-w-0">
              <h4 className="text-sm font-bold text-[#101F35]">
                {item.title}
              </h4>

              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                {item.text}
              </p>
            </div>

          </div>
        );
      })}

    </div>

    {/* Bottom Highlight */}
    <div className="mt-4 flex min-w-0 items-center gap-2.5 rounded-xl border border-orange-100 bg-orange-50/80 p-3">
      <ShieldCheck className="shrink-0 text-orange-500" size={20} />

      <p className="text-xs font-semibold leading-relaxed text-[#101F35]">
        Empowering people. Strengthening industries. Building futures.
      </p>
    </div>

  </div>

</div>



          </div>
        </section>


       


        {/* ================= TRAINING PROGRAMS ================= */}

        <section
          id="training-programs"
          className="bg-[#F5F7FA] px-5 py-20 sm:px-8 lg:py-24"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-14 max-w-2xl text-center">

              <span className="text-xs font-bold tracking-[0.2em] text-orange-600">
                BUILD YOUR EXPERTISE
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[#101F35] sm:text-4xl">
                Our Training Programs
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Industry-oriented training pathways designed to build
                practical, job-ready skills across construction,
                manufacturing, infrastructure and engineering.
              </p>

            </div>


            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {programs.map((program) => {
                const Icon = program.icon;

                return (
                  <article
                    key={program.id}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl sm:p-7"
                  >

                    <div className="mb-7 flex items-start justify-between">

                      <div className="rounded-2xl bg-orange-50 p-4 transition group-hover:bg-orange-500">
                        <Icon
                          size={33}
                          strokeWidth={1.7}
                          className="text-orange-600 transition group-hover:text-white"
                        />
                      </div>

                      <span className="text-xs font-bold text-slate-300">
                        0{program.id}
                      </span>

                    </div>

                    <span className="text-[10px] font-bold tracking-[0.16em] text-orange-600">
                      {program.category}
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-[#101F35]">
                      {program.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {program.description}
                    </p>

                    <div className="my-6 h-px bg-slate-100" />

                    <h4 className="mb-4 text-sm font-bold text-[#101F35]">
                      Key learning areas
                    </h4>

                    <ul className="flex-1 space-y-3">

                      {program.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-1 shrink-0 text-orange-500"
                          />
                          {skill}
                        </li>
                      ))}

                    </ul>

                    <a
                      href="#join"
                      className="mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-[#101F35] transition group-hover:text-orange-600"
                    >
                      Explore Program
                      <ArrowRight size={17} />
                    </a>

                  </article>
                );
              })}

            </div>

          </div>

        </section>

        {/* training videos section */}

<TrainingVideos />



      


        {/* ================= PRACTICAL LEARNING ================= */}

        <section
          id="learning-method"
          className="bg-white px-5 py-20 sm:px-8 lg:py-24"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-14 max-w-2xl text-center">

              <span className="text-xs font-bold tracking-[0.2em] text-orange-600">
                LEARN BY DOING
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[#101F35] sm:text-4xl">
                Learning Through Practical Experience
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Our training combines structured learning with hands-on
                experience, helping workers develop the confidence and
                competence needed to perform effectively on site.
              </p>

            </div>


            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Classroom Sessions",
                  description: "Understand technical concepts and essential knowledge.",
                  icon: BookOpen,
                },
                {
                  number: "02",
                  title: "Practical Exercises",
                  description: "Apply knowledge through hands-on activities.",
                  icon: Settings,
                },
                {
                  number: "03",
                  title: "Supervised Workshops",
                  description: "Develop skills with guidance and demonstrations.",
                  icon: Users,
                },
                {
                  number: "04",
                  title: "Continuous Assessment",
                  description: "Evaluate skills through real-world scenarios.",
                  icon: ClipboardCheck,
                },
              ].map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="rounded-2xl border border-slate-200 p-6 transition hover:border-orange-300 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="rounded-xl bg-orange-50 p-3">
                        <Icon size={29} className="text-orange-600" />
                      </div>

                      <span className="text-3xl font-bold text-slate-100">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-lg font-bold text-[#101F35]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>

        </section>


        {/* ================= CAREER GROWTH ================= */}

        <section
          id="career-growth"
          className="bg-[#F5F7FA] px-5 py-20 sm:px-8 lg:py-24"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-16 max-w-2xl text-center">

              <span className="text-xs font-bold tracking-[0.2em] text-orange-600">
                CAREER GROWTH & BETTER PAY
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[#101F35] sm:text-4xl">
                Your Skills. Your Growth. Your Future.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                As individuals acquire new skills, demonstrate competence
                and gain certifications, they can become eligible for
                higher-paying roles, greater responsibilities and
                long-term career progression.
              </p>

            </div>


            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {careerStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div key={stage.number} className="relative">

                    <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">

                      <div className="flex items-center justify-between">
                        <span className="text-4xl font-bold text-orange-100">
                          {stage.number}
                        </span>

                        <div className="rounded-xl bg-orange-50 p-3">
                          <Icon size={27} className="text-orange-600" />
                        </div>
                      </div>

                      <h3 className="mt-8 text-xl font-bold text-[#101F35]">
                        {stage.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {stage.description}
                      </p>

                    </div>

                    {index !== careerStages.length - 1 && (
                      <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-orange-500 lg:block">
                        <ArrowRight size={25} />
                      </div>
                    )}

                  </div>
                );
              })}

            </div>

            <p className="mt-9 text-center text-sm text-slate-500">
              By investing in skills today, workers can build stable
              careers and brighter futures for themselves and their families.
            </p>

          </div>

        </section>


        {/* ================= WHY CHOOSE US ================= */}

        <section
          id="why-us"
          className="bg-white px-5 py-20 sm:px-8 lg:py-24"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-14 max-w-2xl text-center">

              <span className="text-xs font-bold tracking-[0.2em] text-orange-600">
                THE LABOUR BRIDGES ADVANTAGE
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[#101F35] sm:text-4xl">
                Why Choose M/s Labour Bridges India?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                We combine manpower solutions with structured training
                to develop a workforce ready for modern industry requirements.
              </p>

            </div>


            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-orange-200 hover:bg-white hover:shadow-md"
                  >

                    <div className="h-fit shrink-0 rounded-xl bg-orange-100 p-3">
                      <Icon size={26} className="text-orange-600" />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#101F35]">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {benefit.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </section>


        {/* ================= COMMITMENT ================= */}

        <section
          id="commitment"
          className="bg-[#F5F7FA] px-5 py-20 sm:px-8 lg:py-24"
        >

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="text-xs font-bold tracking-[0.2em] text-orange-600">
                OUR COMMITMENT
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#101F35] sm:text-4xl">
                Investing in People.
                <span className="block text-orange-500">
                  Building India's Future.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                At M/s Labour Bridges India, we are committed to creating
                a skilled workforce that contributes to India's
                infrastructure and industrial growth. Every worker deserves
                the opportunity to learn, grow and achieve financial
                stability through meaningful employment.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                We proudly partner with organizations that value skilled
                professionals and invest in workforce development. By
                combining manpower solutions with structured training,
                we help businesses build stronger teams while enabling
                workers to unlock their full potential.
              </p>

            </div>


            
<div className="relative mb-2 isolate w-full max-w-full overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-[#F4F8FD] to-[#FFF4EB] p-6 shadow-[0_20px_60px_-20px_rgba(30,64,100,0.12)] sm:p-8">

  {/* Header */}
  <div className="mb-7 flex items-center gap-4">

    <div className="rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 p-3 shadow-lg shadow-orange-500/20">
      <ChartNoAxesCombined size={30} className="text-white" />
    </div>

    <h3 className="text-2xl font-bold text-[#101F35]">
      Our Shared Vision
    </h3>

  </div>

  {/* Vision Points */}
  <div className="space-y-3">

    {[
      "Empowering workers through knowledge",
      "Developing a skilled industrial workforce",
      "Supporting sustainable employment",
      "Creating opportunities for lifelong success",
    ].map((item) => (
      <div
        key={item}
        className="group flex items-start gap-3 rounded-xl border border-slate-100 bg-white/90 p-3 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-md"
      >

        <CheckCircle2
          size={21}
          className="mt-0.5 shrink-0 text-orange-500"
        />

        <p className="text-sm leading-7 text-[#334155]">
          {item}
        </p>

      </div>
    ))}

  </div>

  {/* Bottom Highlight */}
  <div className="mt-7 border-t border-slate-200 pt-6">

    <p className="text-lg font-bold leading-8 text-[#101F35]">
      Bridging Skills with Opportunities, Building Careers
      for a Better Tomorrow.
    </p>

    <p className="mt-3 text-xs font-bold tracking-widest text-orange-600">
      M/S LABOUR BRIDGES INDIA
    </p>

  </div>

</div>




            

          </div>

        </section>


        {/* ================= FINAL CTA ================= */}

        <section
          id="join"
          className="relative overflow-hidden bg-orange-500 px-5 py-20 text-white sm:px-8 lg:py-24 mb-4"
        >

          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[40px] border-white/10" />

          <div className="relative mx-auto max-w-4xl text-center">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <GraduationCap size={36} />
            </div>

            <span className="text-xs font-bold tracking-[0.2em] text-orange-100">
              YOUR JOURNEY STARTS HERE
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Join Our Learning Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-orange-50">
              Whether you are a construction helper taking your first
              step, a carpenter mastering advanced shuttering techniques,
              a bar bender improving precision, a fitter seeking technical
              excellence or a scaffolding professional committed to safety,
              M/s Labour Bridges India is here to support your journey.
            </p>

            <p className="mt-6 text-lg font-semibold leading-8">
              Together, we are not just filling jobs—we are building
              careers, empowering people and creating opportunities
              for lifelong success.
            </p>

            <a
              href="https://labourbridges.talentlms.com/plus/courses" target="_blank"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#101F35] px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-[#1c3655]"
            >
              Explore Our Training
              <ArrowRight size={19} />
            </a>

            <p className="mt-7 text-sm font-semibold tracking-wide text-orange-100">
              M/s Labour Bridges India
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default LMS;
