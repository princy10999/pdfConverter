import React from "react";
import ILovePdf from "../../../assets/ilovepdf.svg";
import { RiComputerLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGreaterThan, FaTools } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";

const index = () => {
  return (
    <>
      <ul className="flex justify-between items-center shadow-md">
        <div className="flex items-center justify-between lg:w-auto w-[60%]">
          <li className="dropdown inline-block ml-5 lg:hidden">
            <a className="" href="#">
              <FaTools />
            </a>
            <ul className="w-72 dropdown-menu absolute top-12 left-0 hidden text-gray-700 shadow-xl p-4 bg-white z-10 border-t-4 border-red-500">
              <div className="h-auto">
                <div className="">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    ORGANIZE PDF
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      Merge PDF
                    </a>
                  </li>
                </div>
                <div className="">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    OPTIMIZE PDF
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      Compress PDF
                    </a>
                  </li>
                </div>
                <div className="">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    CONVERT TO PDF
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      PDFto JPG
                    </a>
                  </li>
                </div>
                <div className="">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    CONVERT FROM PDF
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      PDFto JPG
                    </a>
                  </li>
                </div>
                <div className="">
                  <h1 className="text-gray-400 font-semibold mb-2">EDIT PDF</h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      Rotate PDF
                    </a>
                  </li>
                </div>
                <div className="">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    PDF SECURITY
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      Unlock PDF
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li className="mr-4 text-sm ml-5">
            <a className="" href="#">
              <ILovePdf className="" />
            </a>
          </li>
          <li className="mr-4 text-sm ml-10 lg:block hidden">
            <a
              className="text-black hover:text-[#e5322d] font-semibold"
              href="#"
            >
              MERGE PDF
            </a>
          </li>
          <li className="mr-4 text-sm lg:block hidden">
            <a
              className="text-black hover:text-[#e5322d] font-semibold"
              href="#"
            >
              SPLIT PDF
            </a>
          </li>
          <li className="mr-4 text-sm lg:block hidden">
            <a
              className="text-black hover:text-[#e5322d] font-semibold"
              href="#"
            >
              COMPRESS PDF
            </a>
          </li>
          <li className="mr-4 text-sm lg:block hidden dropdown inline-block">
            <a
              className="text-black hover:text-[#e5322d] font-semibold flex items-center"
              href="#"
            >
              CONVERT PDF
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </a>
            <ul className="dropdown-menu absolute top-12 hidden text-gray-700 shadow-xl p-4 bg-white z-10 border-t-4 border-red-500">
              <div className="flex md:w-96 justify-between h-auto">
                <div className="w-1/2">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    CONVERT TO PDF
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      Word to PDF
                    </a>
                  </li>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      Powerpoint to PDF
                    </a>
                  </li>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      Excel to PDF
                    </a>
                  </li>
                </div>
                <div className="w-1/2">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    CONVERT FROM PDF
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      PDF to Word
                    </a>
                  </li>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      PDF to Powerpoint
                    </a>
                  </li>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      PDF to Excel
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li className="mr-4 text-sm lg:block hidden dropdown inline-block">
            <a
              className="text-black hover:text-[#e5322d] font-semibold flex items-center"
              href="#"
            >
              ALL PDF TOOLS
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </a>
            <ul className="w-full dropdown-menu absolute top-12 left-0 hidden text-gray-700 shadow-xl p-4 bg-white z-10 border-t-4 border-red-500">
              <div className="flex justify-between h-auto">
                <div className="w-1/2">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    ORGANIZE PDF
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      Merge PDF
                    </a>
                  </li>
                </div>
                <div className="w-1/2">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    OPTIMIZE PDF
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      Compress PDF
                    </a>
                  </li>
                </div>
                <div className="w-1/2">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    CONVERT TO PDF
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      PDFto JPG
                    </a>
                  </li>
                </div>
                <div className="w-1/2">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    CONVERT FROM PDF
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      PDFto JPG
                    </a>
                  </li>
                </div>
                <div className="w-1/2">
                  <h1 className="text-gray-400 font-semibold mb-2">EDIT PDF</h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      Rotate PDF
                    </a>
                  </li>
                </div>
                <div className="w-1/2">
                  <h1 className="text-gray-400 font-semibold mb-2">
                    PDF SECURITY
                  </h1>
                  <li className="text-md hover:bg-gray-200 hover:text-[#e5322d] py-2">
                    <a className="" href="#">
                      Unlock PDF
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </li>
        </div>
        <div className="flex items-center">
          <li className="mr-4 text-sm lg:block hidden">
            <a className="text-4xl" href="#">
              <RiComputerLine />
            </a>
          </li>
          <li className="lg:block hidden bg-gray-200 text-black hover:bg-gray-600 hover:text-white p-[13px]">
            <Link href={'/login'} className="font-semibold">
              Log in
            </Link>
          </li>
          <li className="lg:block hidden bg-[#e5322d] text-white hover:bg-gray-600 p-[13px]">
            <Link href={'/sign-up'} className="font-semibold">
              Sign up
            </Link>
          </li>
          <li className="block lg:hidden px-3 bg-[#e5322d] text-white p-3.5 cursor-pointer">
            <a className="text-2xl" href="#">
              <BsFillPersonFill />
            </a>
          </li>
          <li className="dropdown inline-block px-5 cursor-pointer">
            <a className="text-3xl" href="#">
              <RxHamburgerMenu />
            </a>
            <ul className="dropdown-menu absolute top-12 right-0 hidden text-gray-700 shadow-xl bg-white z-10">
              <div className="flex w-44 justify-between h-auto">
                <div className="">
                  <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white px-3 py-3 hover:text-[#e5322d] hover:bg-gray-100 text-md">
                    <a className="" href="#">
                      Home
                    </a>
                  </li>
                  <li className="productDropdown inline-block hover:border-l-4 hover:border-red-500 border-l-4 border-white px-3 py-3 hover:text-[#e5322d] hover:bg-gray-100 text-md">
                    <a
                      className="flex justify-between items-center w-36"
                      href="#"
                    >
                      Product
                      <FaGreaterThan />
                    </a>
                    <ul className="productDropdown-menu absolute top-0 right-44 hidden text-gray-700 shadow bg-white z-10">
                      <div className="flex w-36 justify-between h-auto">
                        <div className="">
                          <li className="w-36 hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Desktop
                            </a>
                          </li>
                          <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Moblie
                            </a>
                          </li>
                          <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Features
                            </a>
                          </li>
                          <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Api Rest
                            </a>
                          </li>
                          <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Wordpress plugin
                            </a>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="solutionsDropdown inline-block hover:border-l-4 hover:border-red-500 border-l-4 border-white px-3 py-3 hover:text-[#e5322d] hover:bg-gray-100 text-md">
                    <a
                      className="flex justify-between items-center w-36"
                      href="#"
                    >
                      Solutions
                      <FaGreaterThan />
                    </a>
                    <ul className="solutionsDropdown-menu absolute top-10 right-44 hidden text-gray-700 shadow bg-white z-10">
                      <div className="flex w-36 justify-between h-auto">
                        <div className="">
                          <li className="w-36 hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Business
                            </a>
                          </li>
                          <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Eductaion
                            </a>
                          </li>
                          <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Developers
                            </a>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white px-3 py-3 hover:text-[#e5322d] hover:bg-gray-100 text-md">
                    <a className="" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="languageDropdown inline-block hover:border-l-4 hover:border-red-500 border-l-4 border-white px-3 py-3 hover:text-[#e5322d] hover:bg-gray-100 text-md">
                    <a
                      className="flex justify-between items-center w-36"
                      href="#"
                    >
                      Language
                      <FaGreaterThan />
                    </a>
                    <ul className="languageDropdown-menu absolute right-44 top-10 hidden text-gray-700 shadow bg-white">
                      <div className="lg:flex lg:h-[270px] h-[300px] overflow-y-scroll lg:overflow-hidden lg:w-96 w-36 md:justify-between">
                        <div className="lg:w-1/3 ">
                          <li className="text-sm py-1 hover:border-l-4 hover:border-red-500 border-l-4 border-white hover:text-[#e5322d] hover:bg-gray-100 p-2">
                            <a className="" href="#">
                              English
                            </a>
                          </li>
                        </div>
                        <div className="lg:w-1/3">
                          <li className="text-sm py-1 hover:border-l-4 hover:border-red-500 border-l-4 border-white hover:text-[#e5322d] hover:bg-gray-100 p-2">
                            <a className="" href="#">
                              中文 (简体)
                            </a>
                          </li>
                        </div>
                        <div className="lg:w-1/3">
                          <li className="text-sm py-1 hover:border-l-4 hover:border-red-500 border-l-4 border-white hover:text-[#e5322d] hover:bg-gray-100 p-2">
                            <a className="" href="#">
                              Bahasa Indonesia
                            </a>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="helpDropdown inline-block hover:border-l-4 hover:border-red-500 border-l-4 border-white px-3 py-3 hover:text-[#e5322d] hover:bg-gray-100 text-md">
                    <a
                      className="flex justify-between items-center w-36"
                      href="#"
                    >
                      help
                      <FaGreaterThan />
                    </a>
                    <ul className="helpDropdown-menu absolute top-20 right-44 hidden text-gray-700 shadow bg-white z-10">
                      <div className="flex w-36 justify-between h-auto">
                        <div className="">
                          <li className="w-36 hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              FAQ
                            </a>
                          </li>
                          <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Tools
                            </a>
                          </li>
                          <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Lagel & Privacy
                            </a>
                          </li>
                          <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Our Story
                            </a>
                          </li>
                          <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white text-md hover:bg-gray-100 hover:text-[#e5322d] py-2">
                            <a className="ml-2" href="#">
                              Contact
                            </a>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="hover:border-l-4 hover:border-red-500 border-l-4 border-white px-3 py-3 hover:text-[#e5322d] hover:bg-gray-100 text-md">
                    <a className="" href="#">
                      iLoveIMG
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </li>
        </div>
      </ul>
    </>
  );
};

export default index;
