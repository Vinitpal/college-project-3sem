import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const ServicesOptions = ({ option }) => {
  return (
    <div className="service-item group">
      <FiArrowRightCircle className="service-item-icon" />
      <a
        className="ml-2 text-sm lg:text-base group-hover:text-white"
        href="#xyz"
      >
        {option}
      </a>
    </div>
  );
};

const ServicesCard = ({ title, options }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <div className="flex flex-col text-main">
        {options.map((option, i) => (
          <ServicesOptions key={i} option={option} />
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
