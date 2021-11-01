import TestimonyCard from "./TestimonyCard";

// card + carousel
const index = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-around">
      <div className="text-center leading-loose">
        <h1 className="text-5xl font-semibold">Hear from our students</h1>
        <p className="text-gray-600">
          Over 10,000+ students graduate every year from our college
        </p>
        <button className="shadow-sm bg-blue-500 hover:bg-blue-600 transition transform active:scale-95 rounded-md outline-none text-main my-3 px-3 py-1">
          Read success stories
        </button>
      </div>
      <div className="flex justify-around text-center">
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
