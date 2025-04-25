import logoFooter from '../assets/logo-footer.svg';

import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-[#262522] rounded-3xl px-10 py-6 flex items-center justify-between mt-auto">
      <div className="flex items-center gap-5">
        <a href="/">
          <img src={logoFooter} alt="logo footer" />
        </a>

        <a
          href="https://github.com/shchipina/meal-mate"
          className="text-amber-50 font-medium"
          target='_blank'
        >
          GitHub
        </a>
      </div>


      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/olena-shchipina-7460832a0/"
          target="_blank"
          className="text-white text-[20px] hover:text-[#333] hover:bg-amber-50 hover:rounded-full p-1 ease-in-out"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://t.me/Shchipina_Olena"
          target="_blank"
          className="text-white text-[20px] hover:text-[#333] hover:bg-amber-50 hover:rounded-full p-1 ease-in-out"
        >
          <FaTelegram />
        </a>

        <a
          href="mailto:shchipina.olena@gmail.com"
          target="_blank"
          className="text-white text-[20px] hover:text-[#333] hover:bg-amber-50 hover:rounded-full p-1 ease-in-out"
        >
          <SiGmail />
        </a>

      </div>
    </footer>
  );
}