import { useRouter } from "next/router";
import React from "react";
import { FaEnvelope, FaFacebook, FaLock, FaUserCircle } from "react-icons/fa";
import TextFieldComponent from "../../src/component/common/textFieldComponent";

const index = () => {
    const router = useRouter()
    return (
        <div className="grid">
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-8 w-auto"
                            src="/img/logo.svg"
                            alt="Your Company"
                        />

                    </div>
                    <div className="flex justify-center">
                        ICON
                    </div>
                    <div className="flex items-center justify-center my-5">
                        <div className="flex items-center justify-between gap-2">
                            <p className="ml-2 block text-xl text-gray-900">
                                You have been sccessfully registered
                            </p>
                            <p className="ml-2 block text-sm text-gray-900">
                                You have been sccessfully registered
                            </p>
                        </div>
                    </div>
                    {/* <form className="mt-8 space-y-2" action="#" method="POST">
                        <TextFieldComponent
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            icon={<FaEnvelope size={"18px"} />}
                        />
                        <TextFieldComponent
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            icon={<FaLock size={"18px"} />}
                        />
                        <div className="flex items-center justify-center my-5">
                            <div className="flex items-center">
                                <a
                                    // href="#"
                                    className="font-medium text-red-600 hover:text-red-600 cursor-pointer"
                                    onClick={() => { router.push('/forget-password') }}
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="group relative flex w-30 justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:bg-red-600 focus:ring-offset-2"
                            >
                                Login
                            </button>
                        </div>

                        

                    </form> */}
                </div>
            </div>
        </div>
    );
};

export default index;
