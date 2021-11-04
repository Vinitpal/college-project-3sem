import { FaQuoteLeft } from "react-icons/fa";

const TestimonyCard = () => {
  return (
    <div className="testimony-card">
      <FaQuoteLeft className="text-2xl my-4 text-gray-500" />
      <p className="text-gray-700 ">
        I really enjoy my time here at college! I got to meet a lot of amazing
        peoples and along with many oppurtunities.
      </p>
      <div className="testimony-user">
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
