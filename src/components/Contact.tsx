import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 mb-2 rounded-full backdrop-blur-md border border-white/20 font-bold text-white drop-shadow-md"
            >
              Get In Touch
            </motion.span>
            <h2 className="mb-4 font-medium text-white">Let's Connect</h2>
            <p className="text-white max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="mb-4 text-xl font-medium text-white">
                  Contact Information
                </h3>
                <p className="text-white/70 mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: personalInfo.email,
                    href: `mailto:${personalInfo.email}`,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: personalInfo.phone,
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: personalInfo.location,
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? motion.a : motion.div;
                  return (
                    <Wrapper
                      key={idx}
                      href={item.href}
                      whileHover={{
                        backdropFilter: "blur(16px)",
                        scale: 1.02,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }}
                      className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-none border border-white/20 shadow-lg transition-all group duration-200 hover:cursor-pointer"
                    >
                      <div className="p-3 rounded-lg backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white/80">{item.label}</p>
                        <p className="text-white/90">{item.value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <div>
                <p className="text-white/70 mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {[
                    {
                      icon: Github,
                      link: personalInfo.links.github,
                    },
                    {
                      icon: Linkedin,
                      link: personalInfo.links.linkedin,
                    },
                    {
                      icon: Twitter,
                      link: personalInfo.links.twitter,
                    },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        backdropFilter: "blur(16px)",
                        scale: 1.02,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }}
                      className="p-3 rounded-2xl backdrop-blur-none border border-white/20 shadow-lg hover:cursor-pointer hover:text-white transition-all"
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                y: -6,
                backdropFilter: "blur(16px)",
                transition: {
                  duration: 0.05,
                  ease: "easeOut",
                },
              }}
              onHoverEnd={() => {}}
              whileTap={{ scale: 0.98 }}
              className="p-8 rounded-2xl border border-white/20 shadow-lg 
                                    transition-[transform,filter] duration-200 ease-out 
                                    backdrop-blur-none"
            >
              <h3 className="mb-6 font-medium text-xl text-white">
                Send a Message
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {[
                  {
                    id: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Your name",
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "your.email@example.com",
                  },
                  {
                    id: "subject",
                    label: "Subject",
                    type: "text",
                    placeholder: "What's this about?",
                  },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block mb-2 text-white/80"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-lg backdrop-blur-md border bg-white/10 hover:bg-white/20 focus:bg-white/20 border-white/20 focus:border-white/40 focus:outline-none transition-colors text-white"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block mb-2 text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    className="text-white w-full px-4 py-3 rounded-lg backdrop-blur-md border bg-white/10 hover:bg-white/20 focus:bg-white/20 border-white/20 focus:border-white/40 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 transition-all text-white backdrop-blur-sm"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 pt-8 border-t border-white/20 text-center text-white/70"
      >
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. Built with React,
          Three.js & Motion.
        </p>
      </motion.footer>
    </div>
  );
}
