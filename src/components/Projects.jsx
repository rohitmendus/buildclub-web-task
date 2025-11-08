import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { FaGlobe, FaLeaf, FaRocket } from "react-icons/fa";

const projects = [
  {
    title: "Smart Campus Portal",
    desc: "A digital ecosystem connecting students and faculty with real-time updates and resources.",
    icon: <FaGlobe />,
    link: "https://example.com/smart-campus",
  },
  {
    title: "EcoTrack",
    desc: "An IoT-powered sustainability tracker built by our team for smarter energy use.",
    icon: <FaLeaf />,
    link: "https://example.com/ecotrack",
  },
  {
    title: "BuildWeek Hackathon",
    desc: "Our flagship event where teams build and launch IoT projects in just 48 hours!",
    icon: <FaRocket />,
    link: "https://example.com/buildweek",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-background text-text px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-24 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/5 to-background"></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-10 sm:mb-14 relative z-10"
      >
        Our <span className="text-secondary">Projects</span>
      </motion.h2>

      {/* Project Cards */}
      <div
        className="
          relative z-10
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8 sm:gap-10
          justify-items-center            /* center cards in 1–2 col */
          lg:justify-items-stretch        /* stretch on desktop */
          items-stretch                   /* make rows equal height */
          max-w-7xl mx-auto
        "
      >
        {projects.map((proj, idx) => {
          const isLastSingleOnTwoCols =
            projects.length % 2 === 1 && idx === projects.length - 1;

          return (
            <div
              key={proj.title}
              className={`
                w-full
                ${isLastSingleOnTwoCols ? "sm:col-span-2 flex justify-center lg:col-span-1" : ""}
              `}
            >
              <ProjectCard {...proj} delay={idx * 0.2} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
