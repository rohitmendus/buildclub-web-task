import { motion } from "framer-motion";
import DefaultImage from "../assets/placeholder.png";

export default function ProjectCard({
  title,
  desc,
  icon,
  link,
  image = DefaultImage,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: "0 0 20px rgba(255, 247, 5, 0.25)",
      }}
      className="
        relative
        flex flex-col h-full            
        bg-background/80 border border-gray-200 backdrop-blur-md
        rounded-2xl shadow-lg overflow-hidden
        text-left hover:border-secondary transition-all duration-300 group
        w-full sm:max-w-md lg:max-w-none  
        mx-auto
      "
    >
      {/* Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-48 lg:h-52 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-secondary text-primary p-2 rounded-full shadow-md">
          <span className="text-lg sm:text-xl">{icon}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-4 sm:p-6">   
        <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 text-primary">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-accent leading-relaxed">
          {desc}
        </p>

        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="
              mt-4 md:mt-6              
              inline-block
              bg-secondary text-primary font-semibold
              px-4 sm:px-6 py-2 sm:py-3
              rounded-lg shadow-md
              hover:bg-primary hover:text-secondary
              transition-all duration-300
              text-sm sm:text-base
              self-start md:self-auto  
            "
          >
            View Project →
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
