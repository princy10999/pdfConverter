import React, { ReactComponentElement } from "react";

interface TextFieldProps {
  id?: string;
  type?: string;
  name: string;
  value?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  required?: boolean;
  icon?: any;
}
const TextFieldComponent = (props: TextFieldProps) => {
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-2 ">
      {props?.icon && (
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-10 pl-3 py-2">
          {props?.icon}
        </span>
      )}
      <input
        id={props?.id}
        name={props?.name}
        type={props?.type || "text"}
        autoComplete={props?.name}
        required={props?.required}
        className={
          props.className ||
          "relative block w-full mr-15 appearance-none rounded border border-gray-300 px-10 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-b-gray-800 focus:outline-none focus:ring-gray-800 sm:text-sm"
        }
        placeholder={props?.placeholder}
        value={props?.value}
      />
    </div>
  );
};

export default TextFieldComponent;
