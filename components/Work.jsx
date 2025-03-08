import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        className="text-center mb-2 text-lg font-Outfit"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Latest Work
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <b className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-500 to-gray-200 bg-clip-text text-transparent opacity-100 hover:opacity-50 transition-opacity duration-500 cursor-pointer">
          My web development portfolio
        </b>{" "}
        <br />
        Explore a collection of my projects, showcasing my skills in full-stack
        development with technologies like Next.js, React, Node.js, and more.
        From dynamic web applications to seamless user experiences, each project
        highlights my ability to build efficient, scalable, and user-friendly
        solutions 🚀{" "}
        <b className="text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-fadeIn">
          Let's collaborate
        </b>{" "}
      </motion.p>

      <motion.div
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {workData.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="block"
          >
            <div
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute gap-4 bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-between duration-500 group-hover:bottom-7 p-3">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-400 transition">
                  <Image
                    src={assets.send_icon}
                    alt="send-icon"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          </a>
        ))}
      </motion.div>

      <motion.a
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-gray-300 hover:text-white duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Show More{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </div>
  );
};

export default Work;
