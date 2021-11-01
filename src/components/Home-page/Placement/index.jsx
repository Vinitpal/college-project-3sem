const index = () => {
  return (
    <div className="h-screen flex justify-evenly items-center bg-gray-200">
      <div className="w-5/12 flex flex-col items-center">
        <h1 className="text-5xl font-semibold my-10">Our Top Recruiters</h1>
        <div className="flex flex-wrap justify-center text-center mb-4 ">
          {[...Array(10)].map((_, i) => (
            <img
              className="m-4 w-24"
              src="https://cdn.discordapp.com/attachments/753151975570276352/904658365001646080/368px-Google_2015_logo.png"
              alt="recruiter"
            />
          ))}
        </div>
      </div>
      <div className="w-5/12">
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
