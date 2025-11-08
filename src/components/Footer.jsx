import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDiscord, FaTwitter } from "react-icons/fa"; 
import BuildClubLogo from "../assets/logo.png";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-primary text-background py-12 md:py-16 mt-auto overflow-hidden"
    >
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-secondary/40"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left - Logo & tagline */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={BuildClubLogo}
              alt="Buildclub Logo"
              className="h-10 w-10 object-contain"
            />
            <h2 className="text-2xl font-heading font-bold text-secondary">
              Buildclub
            </h2>
          </div>
          <p className="text-gray-300 text-sm max-w-xs text-center md:text-left">
            Innovate. Build. Collaborate. Empowering tech creators of tomorrow 🚀
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4">
            {[
            { icon: <FaGithub />, link: "https://github.com/BuildClubCET" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/build-club-cet/" },
            { icon: <FaDiscord />, link: "https://discord.com/invite/D54tWnv4dU" },
            { icon: <FaTwitter />, link: "https://twitter.com/" },
            ].map((social, i) => (
            <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                scale: 1.2,
                rotate: 5,
                color: "#fff705",
                transition: { type: "tween", duration: 0.25 },
                }}
                whileTap={{
                scale: 0.9,
                rotate: -5,
                transition: { type: "tween", duration: 0.15 },
                }}
                className="text-secondary text-2xl transition-colors duration-300 hover:text-secondary"
            >
                {social.icon}
            </motion.a>
            ))}

          </div>
        </div>

        {/* Middle - Map */}
        <div className="hidden md:flex justify-center">
          <iframe
            title="Buildclub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2684538692385!2d76.8644692748094!3d8.546929196637476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf6928c6935%3A0x6cc830083f02cf86!2sCollege%20of%20Engineering%20Trivandrum!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="300"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border border-secondary/40 shadow-md"
          ></iframe>
        </div>

        {/* Right - Quick Links */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <h3 className="font-heading font-bold text-xl text-secondary">
            Quick Links
          </h3>
          <a
            href="#home"
            className="hover:text-secondary transition text-sm text-gray-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-secondary transition text-sm text-gray-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-secondary transition text-sm text-gray-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-secondary transition text-sm text-gray-300"
          >
            Join Us
          </a>
        </div>
      </div>

      {/* Copyrights */}
      <div className="text-center text-sm text-gray-400 mt-12">
        © {new Date().getFullYear()} <span className="text-secondary font-semibold">Buildclub</span> — All rights reserved.
      </div>
    </motion.footer>
  );
}
