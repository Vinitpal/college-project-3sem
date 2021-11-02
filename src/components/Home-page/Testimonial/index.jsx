import TestimonyCard from "./TestimonyCard";

// card + carousel
const index = () => {
  return (
    <div className="py-8 lg:py-0 h-full lg:h-screen flex flex-col items-center justify-around">
      <div className="text-center leading-loose mb-10 lg:mb-0 ">
        <h1 className="text-4xl lg:text-5xl font-semibold">
          Hear from our students
        </h1>
        <p className="text-gray-600">
          Over 10,000+ students graduate every year from our college
        </p>
        <button className="shadow-md bg-blue-500 hover:bg-blue-600 transition transform active:scale-95 rounded-md outline-none text-main my-3 px-3 py-1">
          Read success stories
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-around text-center">
        {[...Array(3)].map((_, idx) => (
          <TestimonyCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default index;

// {
//   /* Username + pic */
// }
// {
//   /* <div className="flex items-center">
//             <img
//               src="https://cdn.discordapp.com/attachments/753151975570276352/866536124222537778/unknown.png"
//               alt="profile-pic"
//             />
//             <p>James Don</p>
//             <p>Developer at xyz</p>
//           </div> */
// }
