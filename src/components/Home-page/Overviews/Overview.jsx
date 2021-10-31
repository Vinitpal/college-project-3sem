const Overview = () => {
  return (
    <div className="h-screen flex justify-around items-center">
      <div className="w-3/12 h-96 bg-blue-400">
        {/* Learning */}
        <img
          src="https://www.beaconhills.vic.edu.au/app/uploads/2021/03/7JG1498-scaled.jpg"
          alt="img"
        />
        <div>
          <h1>Learning</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            officiis laudantium! Culpa illo, accusantium deserunt eveniet, quasi
            blanditiis unde deleniti rerum velit laborum libero provident.
          </p>
        </div>
        <button>Find out more</button>
      </div>
      <div className="w-3/12 h-96 bg-blue-400">
        {/* Campus and facilities */}
      </div>
      <div className="w-3/12 h-96 bg-blue-400">{/* Placement */}</div>
    </div>
  );
};

export default Overview;
