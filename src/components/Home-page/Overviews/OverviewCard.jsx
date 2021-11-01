import { IoIosArrowForward } from "react-icons/io";

const OverviewCard = () => {
  return (
    <div className="group overflow-hidden cursor-pointer w-3/12">
      <img
        className="transform transition-all duration-300 group-hover:scale-105"
        src="https://www.beaconhills.vic.edu.au/app/uploads/2021/03/7JG1498-scaled.jpg"
        alt="img"
      />
      <div className="my-4">
        <h1 className="my-7 text-3xl font-semibold group-hover:text-blue-900">
          Learning
        </h1>
        <p className="text-md text-subHeadLine leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          officiis laudantium! Culpa illo, accusantium deserunt eveniet, quasi
          blanditiis unde deleniti rerum velit laborum libero provident.
        </p>
      </div>
      <button className="w-full text-xl py-2 flex items-center relative group-hover:!text-main text-blue-900   font-semibold z-20">
        <div className="w-full h-full transform absolute -translate-x-full group-hover:translate-x-0 bg-blue-900 transition-all duration-500 -z-1"></div>
        <div
          style={{ height: "2px" }}
          className="transition-all duration-500 w-5 group-hover:w-24 bg-blue-900 group-hover:bg-main z-10"
        ></div>
        <IoIosArrowForward className="-ml-3 z-10" />
        Find out more
      </button>
    </div>
  );
};

export default OverviewCard;
