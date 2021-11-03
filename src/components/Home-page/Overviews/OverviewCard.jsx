import { IoIosArrowForward } from "react-icons/io";

const OverviewCard = ({ title, desc, image }) => {
  return (
    <div className="group overview-card">
      <img
        className="overview-img"
        // 325 x 220
        src={image}
        alt="img"
      />
      <div className="mt-4 mb-6 lg:h-64">
        <h1 className="overview-title">{title}</h1>
        <p className="overview-text">{desc}</p>
      </div>
      <button className="overview-cta">
        <div className="overview-btn-bg"></div>
        <div style={{ height: "2px" }} className="overview-btn-arrow"></div>
        <IoIosArrowForward className="-ml-3 z-10" />
        Find out more
      </button>
    </div>
  );
};

export default OverviewCard;
