// big hero image with apply now button and text
const index = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Image overlay */}
      {/* Text with CTA */}

      <div className="absolute inset-0 w-full h-full bg-gray-400 bg-opacity-70 lg:bg-opacity-50"></div>
      <div className="w-full lg:w-auto text-center leading-loose absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-xl lg:text-2xl text-gray-900">
          Towards a better future
        </h3>
        <h1 className="text-3xl lg:text-4xl font-semibold">
          Shri Shankracharya Technical Campus
        </h1>
        <div>
          <button className="mt-10 mx-4 py-2 lg:py-2.5 px-6 lg:px-8 transition duration-300 text-lg lg:text-xl outline-none bg-blue-600 hover:bg-blue-700 text-main rounded-xl shadow-md ">
            Enroll Now
          </button>
          <button className="mt-10 mx-4 py-2 lg:py-2.5 px-6 lg:px-8 text-lg lg:text-xl border-2 border-pink-600 bg-pink-600 hover:bg-pink-700 hover:border-pink-700 outline-none text-main rounded-xl shadow-md ">
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
