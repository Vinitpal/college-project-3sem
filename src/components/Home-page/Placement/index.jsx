import byjus from "/Images/byjus.png";
import facebook from "/Images/facebook.png";
import google from "/Images/google.png";
import jio from "/Images/jio.png";
import tcs from "/Images/tcs.png";
import vedantu from "/Images/vedantu.png";
import paytm from "/Images/paytm.png";
import wipro from "/Images/wipro.png";

import "./placement.css";

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
    <div className="placement-section">
      <div className="recruiters">
        <h1>Our Top Recruiters</h1>
        <div className="recruiters-img-container">
          {imgArr.map((img, i) => (
            <img key={i} src={img.title} alt="recruiter" />
          ))}
        </div>
      </div>
      <div className="placement-catchy-img">
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
