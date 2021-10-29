// overview of college's vision and ethic
const AboutUs = () => {
  return (
    <div className="w-full h-screen bg-main flex items-center justify-around">
      <div className="w-1/3">
        {/* Carousel */}
        <h1 className="my-2 text-3xl font-semibold">Lorem Ipsum Dolor</h1>
        <p className="text-xl text-subHeadLine">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          consequatur debitis at possimus adipisci quae ut quam in porro fugit.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quasi
          omnis fuga quae, commodi at.
        </p>
      </div>
      <div className="w-1/3">
        {/* INFO */}
        <img
          src="https://sstc.ac.in/assets/home/autonomous.jpg"
          alt="autonomous"
        />
      </div>
    </div>
  );
};

export default AboutUs;
