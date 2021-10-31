import OverviewCard from "./OverviewCard";

const Overview = () => {
  return (
    <div className="h-screen flex justify-around items-center">
      {[...Array(3)].map((_, i) => (
        <OverviewCard key={i} />
      ))}

      {/* Campus and facilities */}

      {/* Placement */}
    </div>
  );
};

export default Overview;
