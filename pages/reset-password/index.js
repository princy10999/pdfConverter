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
                            className="mx-auto h-12 w-auto"
                            src="/img/logo.svg"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-2xl font-medium tracking-tight text-gray-500">
                            Reset your password
                        </h2>
                    </div>

                    <form className="mt-8 space-y-2" action="#" method="POST">
                        <TextFieldComponent
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Your new password"
                            icon={<FaLock size={"18px"} />}
                        />
                        <TextFieldComponent
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            placeholder="Repeat your new password"
                            icon={<FaLock size={"18px"} />}
                        />
                        {/* <div className="flex items-center justify-center my-5">
                            <div className="flex items-center">
                                <a
                                    href="#"
                                    className="font-medium text-red-600 hover:text-red-600"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div> */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="group relative flex w-30 justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:bg-red-600 focus:ring-offset-2"
                            >
                                Reset
                            </button>
                        </div>

                        <div className="flex items-center justify-center my-5">
                            <div className="flex items-center justify-between gap-2">
                                <label className="ml-2 block text-base text-gray-900">
                                    Don't have an account?
                                </label>
                                <a
                                    // href="#"
                                    className="font-medium text-red-600 hover:text-red-600 cursor-pointer"
                                    onClick={() => { router.push('/sign-up') }}
                                >
                                    Create an account
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center my-5">
                            <div className="flex items-center justify-between gap-2">
                                <label className="ml-2 block text-base text-gray-900">
                                    Already have iLovePDF account?
                                </label>
                                <a
                                    // href="#"
                                    className="font-medium text-red-600 hover:text-red-600 cursor-pointer"
                                    onClick={() => { router.push('/login') }}
                                >
                                    Log in.
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default index;
