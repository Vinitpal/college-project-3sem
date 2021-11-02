import byjus from "/Images/byjus.png";
import facebook from "/Images/facebook.png";
import google from "/Images/google.png";
import jio from "/Images/jio.png";
import tcs from "/Images/tcs.png";
import vedantu from "/Images/vedantu.png";
import paytm from "/Images/paytm.png";
import wipro from "/Images/wipro.png";

const index = () => {
  const imgArr = [
    { title: byjus },
    { title: facebook },
    { title: google },
    { title: jio },
    { title: tcs },
    { title: vedantu },
    { title: paytm },
    { title: wipro },
  ];

  return (
    <div className="py-6 lg:py-0 h-full lg:h-screen flex flex-col lg:flex-row justify-evenly items-center bg-gray-100">
      <div className="w-10/12 lg:w-6/12 flex flex-col items-center text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-semibold my-10">
          Our Top Recruiters
        </h1>
        <div className="flex flex-wrap justify-center text-center mb-4 ">
          {imgArr.map((img, i) => (
            <img
              key={i}
              className="my-4 mx-4 lg:mx-10 w-24 lg:w-28"
              src={img.title}
              alt="recruiter"
            />
          ))}
        </div>
      </div>
      <div className="mb-10 lg:mb-10 w-10/12 lg:w-5/12">
        <img
          className="shadow-md rounded-md"
          src="https://cdn.discordapp.com/attachments/753151975570276352/904660818233278474/naassom-azevedo-unsplash.jpg"
          alt="students"
        />
      </div>
    </div>
  );
};

export default index;
