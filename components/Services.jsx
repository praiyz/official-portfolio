import { serviceData } from "@/assets/assets";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";  // Importing framer-motion

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      
      <motion.h4
        className="text-center mb-2 text-lg font-Outfit"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}  /* Trigger on scroll */
      >
        What I Offer
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}  /* Trigger on scroll */
      >
        My Services
      </motion.h2>

      
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}  /* Trigger on scroll */
      >
        <b className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-500 to-gray-200 bg-clip-text text-transparent opacity-100 hover:opacity-50 transition-opacity duration-500 cursor-pointer">
          Olatunji Praise – Full Stack Developer
        </b>
        <br />
        I'm a passionate Full Stack Developer specializing in Next.js, with
        experience building scalable, high-performance web applications...
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}  /* Trigger on scroll */
      >
       
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            initial={{ opacity: 0, y: 20 }}   /* Scroll entrance effect */
            whileInView={{ opacity: 1, y: 0 }}  /* Trigger scroll animation */
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}  
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5 text-gray-800 dark:text-gray-300">
              Read More
              <Image src={assets.right_arrow} className="w-4" alt="" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
