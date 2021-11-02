import OverviewCard from "./OverviewCard";

const Overview = () => {
  return (
    <div className="h-full lg:h-screen flex flex-col lg:flex-row justify-around items-center py-10 lg:py-4 mb-4 border-b-2 ">
      {[...Array(3)].map((_, i) => (
        <OverviewCard key={i} />
      ))}

      {/* Campus and facilities */}

      {/* Placement */}
    </div>
  );
};

export default Overview;
