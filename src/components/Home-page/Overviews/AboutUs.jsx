// overview of college's vision and ethic

import WaveSvg from "/Images/wave-haikei-4.svg";

const AboutUs = () => {
  return (
    <div
      style={{
        background: `url(${WaveSvg}) no-repeat bottom center/cover`,
      }}
      className="about-us-section"
    >
      <div className=" w-11/12 lg:w-1/3">
        {/* todo - Carousel */}
        <h1 className="my-2 text-3xl font-semibold">Lorem Ipsum Dolor</h1>
        <p className="text-xl text-subHeadLine">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          consequatur debitis at possimus adipisci quae ut quam in porro fugit.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quasi
          omnis fuga quae, commodi at.
        </p>
      </div>
      <div className="my-12 w-10/12 lg:my-0 lg:w-1/3">
        <img
          src="https://sstc.ac.in/assets/home/autonomous.jpg"
          alt="autonomous"
        />
      </div>
    </div>
  );
};

export default AboutUs;
