import React from 'react'
import { FaGoogleDrive, FaDropbox } from "react-icons/fa";


interface ConvertButtonProps {
    title?: string;
    convertText?: string;
    buttonText?: string;
    DescriptionText?: string;
    linkText?: any;
}

const ConvertButtonComponent = (props: ConvertButtonProps) => {
    return (
        <div className="bg-[#f3f0ec]">
            <div className="md:container md:mx-auto p-6 ">
                <div className="text-center pt-1.5 px-6 pb-7">
                    <p className="text-4xl font-semibold text-[#383e45] mb-2">{props?.title}</p>
                    <h2 className="text-[#383e45] text-lg font-normal mb-2">{props?.convertText}<br />
                        {props?.linkText && (<>
                            Powered By <a href="https://www.webitoinfotech.com/" className="text-[#e5322d] visited:text-[#383e45]...">
                                Solid Documents
                            </a>.</>)}

                    </h2>
                </div>
                <div className="mb-2 justify-center flex gap-3">
                    <button className="bg-[#e5322d] px-14 py-6 text-3xl font-semibold rounded-lg  hover:bg-[#383e45] text-white ..." >
                        {props?.buttonText}
                    </button>
                    <div className="flex flex-col gap-2 justify-center  ...">
                        <button className="flex justify-center items-center bg-[#e5322d] h-9 w-9 rounded-full hover:bg-[#383e45] text-white ...">
                            <FaGoogleDrive />
                        </button>
                        <button className="flex justify-center items-center bg-[#e5322d] h-9 w-9 rounded-full hover:bg-[#383e45] text-white ...">
                            <FaDropbox />
                        </button>
                    </div>
                </div>
                <h2 className="text-sm text-center text-[#161616]">{props?.DescriptionText}</h2>
            </div>
        </div >
    )
}

export default ConvertButtonComponent