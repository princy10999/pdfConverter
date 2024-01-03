import { useRouter } from "next/router";
import React from "react";
import { FaBackspace, FaEnvelope, FaFacebook, FaLock, FaUserCircle } from "react-icons/fa";
import TextFieldComponent from "../../src/component/common/textFieldComponent";

const index = () => {
    const router = useRouter()
    return (
        <div className="grid">
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="/img/logo.svg"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-2xl font-medium tracking-tight text-gray-500">
                            Reset your password
                        </h2>
                    </div>
                    <div className=""></div>
                    <div className="grid w-auto">
                        <label className="text-black text-xs">
                            Enter your email and check your inbox for instructions. Please also check your spam folder.
                        </label>
                    </div>
                    <form className="mt-8 space-y-5" action="#" method="POST">
                        <TextFieldComponent
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            icon={<FaEnvelope size={"18px"} />}
                        />
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="group relative flex w-30 justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:bg-red-600 focus:ring-offset-2"
                            >
                                Send
                            </button>
                        </div>

                        <div className="flex justify-center">
                            <button type="button" class="group relative flex w-30 justify-center rounded-md bg-gray-300 py-2 px-8 text-sm font-medium text-red-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2" onClick={() => { router.push('/login') }}>
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <FaBackspace />
                                </span>
                                Back
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default index;
