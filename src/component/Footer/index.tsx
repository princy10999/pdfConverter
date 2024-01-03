import React from "react";
import PlayStore from "../../../assets/google_play.svg";
import AppStore from "../../../assets/app_store.svg";
import FaceBook from "../../../assets/facebook.svg";
import Instagram from "../../../assets/instagram.svg";
import Linkedin from "../../../assets/linkedin.svg";
import Twitter from "../../../assets/twitter.svg";
import { FiAperture } from "react-icons/fi";

const index = () => {
  return (
    <div className="container mx-auto relative">
      <div className="md:flex p-2">
        <div className="md:w-1/4">
          <h1 className="text-[#e5322d] font-semibold">ILOVEPDF</h1>
          <ul>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Home
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Features
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Pricing
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Tools
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              FAQ
            </li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h1 className="text-[#e5322d] font-semibold">PRODUCT</h1>
          <ul>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              iLovePDF Desktop
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              iLovePDF Mobile
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Developers
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Wordpress Plugin
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              iloveimg.com
            </li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h1 className="text-[#e5322d] font-semibold">SOLUTIONS</h1>
          <ul>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Business
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Education
            </li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h1 className="text-[#e5322d] font-semibold">COMPANY</h1>
          <ul>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Our Story
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Blog
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Press
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Legal & Privacy
            </li>
            <li className="my-3 text-[#161616] hover:text-[#e5322d] cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="">
          <PlayStore />
        </div>
        <div className="ml-3">
          <AppStore />
        </div>
      </div>
      <hr className="mt-3 text-red-500" />
      <div className="md:flex mt-3">
        <div className="md:w-1/2">
          <div className="dropdown inline-block ml-2">
            <button className="inline-flex items-center">
              <FiAperture className="text-2xl text-gray-500" />
              <span className="mx-1 text-gray-500">English</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="dropdown-menu block absolute md:top-2 bottom-16 md:bottom-8 hidden text-gray-700 shadow-xl p-4 rounded-[12px] bg-white">
              <div className="flex md:w-96 w-72 justify-between">
                <div className="">
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      English
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Español
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Français
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Deutsch
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Italiano
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Português
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      日本語
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Pусский
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      한국어
                    </a>
                  </li>
                </div>
                <div className="">
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      中文 (简体)
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      中文 (繁體)
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      العربية
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Български
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Català
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Dutch
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Ελληνικά
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      हिन्दी
                    </a>
                  </li>
                </div>
                <div className="">
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Bahasa Indonesia
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Bahasa Melayu
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Polski
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Svenska
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      ภาษาไทย
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Türkçe
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Українська
                    </a>
                  </li>
                  <li className="text-sm py-1">
                    <a className="hover:text-[#e5322d]" href="#">
                      Tiếng Việt
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <div className="w-1/2 lg:text-end">
            <p>© iLovePDF 2023 ® - Your PDF Editor</p>
          </div>
          <Instagram className="ml-3 mr-1 cursor-pointer" />
          <Twitter className="mx-1 cursor-pointer" />
          <FaceBook className="mx-1 cursor-pointer" />
          <Linkedin className="mx-1 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default index;
