import TestimonyCard from "./TestimonyCard";
import "./testimonial.css";

const index = () => {
  return (
    <div className="testimony-section">
      <div className="testimony-wrapper">
        <h1>Hear from our students</h1>
        <p className="leading-normal lg:leading-loose lg:text-base text-gray-600">
          Over 10,000+ students graduate every year from our college
        </p>
        <button className="testimony-cta">Read success stories</button>
      </div>
      <div className="testimony-card-container">
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
