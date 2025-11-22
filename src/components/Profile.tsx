import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import profileImage from "../../public/assets/profile.png";

export function Profile() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24"
    >
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:order-1 order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full opacity-75" />

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              >
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:order-2 order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 mb-2 rounded-full bg-white/10 border border-white/20 font-bold text-white drop-shadow-md">
                <span className="text-white font-medium">
                  Welcome to my portfolio
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="block text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
                {personalInfo.name}
              </span>
              <span className="block text-xl font-medium sm:text-2xl lg:text-3xl text-white/70 ">
                {personalInfo.title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-white/10 hover:bg-white/20 transition-colors border-white/80 text-white backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/80 transition-colors text-white backdrop-blur-sm">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center"
        >
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-300 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
