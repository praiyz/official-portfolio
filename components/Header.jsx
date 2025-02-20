import { assets } from "@/assets/assets";
import Image from "next/image";

import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        viewport={{ once: false }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32"
        />
      </motion.div>

      {/* Name & Hand Icon */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Olatunji Praise ❤
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-6" />
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo bg-gradient-to-r from-gray-900 via-gray-500 to-gray-200 bg-clip-text text-transparent opacity-100 hover:opacity-50 transition-opacity duration-500"
      >
        Fullstack developer based in Lagos
      </motion.h1>

      {/* Description - p tag */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: false }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a fullstack developer from Lagos, Nigeria with certification from
        Gomycode, and have built multiple websites and web apps.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Me Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow"
            className="w-4"
          />
        </motion.a>

        {/* Resume Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
          href="https://drive.google.com/file/d/1ck8mmuvbrfko6BHgHcc7Dc1SRsc_CnMq/view?usp=sharing"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
