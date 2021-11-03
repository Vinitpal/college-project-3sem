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
        <h1 className="my-2 text-2xl lg:text-3xl font-semibold">
          Striving for Excellence
        </h1>
        <p className="text-base lg:text-lg text-subHeadLine">
          SSTC is an place where we celebrate youth and exuberance and attempt
          to instil in students a sense of social responsibility, human values
          and concern for environment. We not only strive to train the students
          to become excellent scientists, technologists, thinkers and leaders of
          the society, but also help them to mould themselves into better human
          beings.
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
