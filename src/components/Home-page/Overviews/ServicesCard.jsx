import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const ServicesOptions = ({ option }) => {
  return (
    <div className="flex items-center lg:ml-10 border-b-2 pb-2 my-1 text-md hover:text-white hover:font-semibold text-main ">
      <FiArrowRightCircle className="text-main text-xl lg:text-lg" />
      <a className="ml-2 " href="#xyz">
        {option}
      </a>
    </div>
  );
};

const ServicesCard = ({ title, options }) => {
  return (
    <div className="bg-tertiary py-8 px-10 my-10 lg:my-0 lg:h-80 rounded-md shadow-md w-10/12 lg:w-5/12">
      <h3 className=" text-4xl font-medium mt-2 mb-6 text-main">{title}</h3>
      <div className="flex flex-col text-main">
        {options.map((option, i) => (
          <ServicesOptions key={i} option={option} />
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
