import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="flex w-max items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          praiseolatunji22@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Olatunji Praise. All Rights Reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/praiyz"
              className="flex items-center gap-2 text-3xl font-bold hover:text-gray-500 transition"
            >
              <FaGithub />
              <span className="text-lg font-normal">Github</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/praise-olatunji-507644331/"
              className="flex items-center gap-2 text-3xl font-bold hover:text-gray-500 transition"
            >
              <FaLinkedin />
              <span className="text-lg font-normal">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/itzprince.praise.58"
              className="flex items-center gap-2 text-3xl font-bold hover:text-gray-500 transition"
            >
              <FaFacebook />
              <span className="text-lg font-normal">Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
