import OverviewCard from "./OverviewCard";

const Overview = () => {
  return (
    <div className="h-screen flex justify-around items-center py-4 mb-4 border-b-2 ">
      {[...Array(3)].map((_, i) => (
        <OverviewCard key={i} />
      ))}

      {/* Campus and facilities */}

      {/* Placement */}
    </div>
  );
};

export default Overview;
