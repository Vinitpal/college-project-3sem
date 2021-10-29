import { FiArrowRightCircle } from "react-icons/fi";

const Services = () => {
  return (
    <div className="w-full h-screen bg-main flex items-center justify-around">
      {/* Choose your career */}
      <div className="bg-blue-900  py-16 px-12 rounded-md shadow-md w-5/12">
        <h3 className=" text-4xl font-medium mt-2 mb-4 text-main">
          Choose your career
        </h3>
        <div className="flex flex-col text-paragraph">
          <div className="flex items-center ml-10 my-1 text-md hover:text-highlight text-paragraph ">
            <FiArrowRightCircle />
            <a className="ml-2 " href="#xyz">
              Bachelors of Engineering
            </a>
          </div>
          <div className="flex items-center ml-10 my-1 text-md hover:text-highlight text-paragraph">
            <FiArrowRightCircle />{" "}
            <a className="ml-2 " href="#xyz">
              Management Studies
            </a>
          </div>
          <div className="flex items-center ml-10 my-1 text-md hover:text-highlight text-paragraph">
            <FiArrowRightCircle />
            <a className="ml-2 " href="#xyz">
              Master of Computer Application
            </a>
          </div>
          <div className="flex items-center ml-10 my-1 text-md hover:text-highlight text-paragraph">
            <FiArrowRightCircle />
            <a className="ml-2 " href="#xyz">
              Pharmaceutical Science
            </a>
          </div>
        </div>
      </div>
      {/* Choose your Institute */}
      <div className="bg-blue-900  py-16 px-12 rounded-md shadow-md w-5/12">
        <h3 className=" text-4xl font-medium mt-2 mb-4 text-main">
          Choose your Institute
        </h3>
        <div className="flex flex-col">
          <div className="flex items-center ml-10 my-1 text-md hover:text-highlight text-paragraph">
            <FiArrowRightCircle />
            <a className="ml-2 " href="#xyz">
              Shri Shankracharya Techinical Campus
            </a>
          </div>
          <div className="flex items-center ml-10 my-1 text-md hover:text-highlight text-paragraph">
            <FiArrowRightCircle />
            <a className="ml-2 " href="#xyz">
              Shri Shankracharya College of Pharma. Science
            </a>
          </div>
          <div className="flex items-center ml-10 my-1 text-md hover:text-highlight text-paragraph">
            <FiArrowRightCircle />
            <a className="ml-2 " href="#xyz">
              Shri Shankracharya Institute of Pharma. Sc. & Research
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
