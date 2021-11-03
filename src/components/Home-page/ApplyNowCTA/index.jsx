// big hero image with apply now button and text

import "./applyNowCTA.css";

const index = () => {
  return (
    <div className="cta-section">
      <div className="bg-overlay"></div>
      <div className="text-container">
        <h3>Towards a better future</h3>
        <h1 className="">Shri Shankracharya Technical Campus</h1>
        <div>
          <button className="btn bg-blue-600 hover:bg-blue-700">
            Enroll Now
          </button>
          <button className="btn bg-pink-600 hover:bg-pink-700">
            Pay a visit
          </button>
        </div>
      </div>
      <div
        style={{
          background: `url(${"https://cdn.discordapp.com/attachments/753151975570276352/904670907191148554/alexis-brown-omeaHbEFlN4-unsplash.jpg"}) no-repeat center center/cover`,
        }}
        className="w-full h-full "
      ></div>
    </div>
  );
};

export default index;
