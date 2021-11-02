import { FaQuoteLeft } from "react-icons/fa";

const TestimonyCard = () => {
  return (
    <div className="w-8/12 lg:w-3/12 px-6 py-4 my-8 lg:my-0 bg-gray-200 shadow-lg rounded-md flex flex-col items-center">
      <FaQuoteLeft className="text-2xl my-4 text-gray-500" />
      <p className="text-gray-700 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ab, atque
        omnis nisi dolorem accusamus!
      </p>
      <div className="flex flex-col items-center mt-6 mb-2">
        <img
          className="w-14"
          src="https://cdn.discordapp.com/attachments/753151975570276352/866536124222537778/unknown.png"
          alt="profile-pic"
        />
        <p className="font-semibold text-lg">James Don</p>
        <p className="text-gray-600 text-sm">Developer at xyz</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
