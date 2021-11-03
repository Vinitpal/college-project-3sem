import OverviewCard from "./OverviewCard";
import learning from "/Images/learning.jpg";
import campusAndFacility from "/Images/campus-and-facility.png";
import placement from "/Images/placement.jpg";

const Overview = () => {
  const overviewArr = [
    {
      title: "Learning",
      desc: "The courses offered are aimed at equipping the student with requisite knowledge and skills to confront the real world challenges, the students undergo summer training programs, take real time projects, and pursue renowned certifications that help them in widening their perspective.",
      image: learning,
    },
    {
      title: "Campus and facilities",
      desc: "Day boarding and residential facilities; sports and art appreciation; presentations and guest lectures; spacious classrooms and well stocked library, proficient gurus and professional teaching methodologies. SSTC is all this and many more.",
      image: campusAndFacility,
    },
    {
      title: "Placement",
      desc: "On our campus, students can take advantage of learning opportunities and employment opportunities, and we also have recruiters from several multinational companies. Most of our students earn at least 8 LPA",
      image: placement,
    },
  ];

  return (
    <div className="overview-section">
      {overviewArr.map((item, i) => (
        <OverviewCard
          key={i}
          title={item.title}
          desc={item.desc}
          image={item.image}
        />
      ))}

      {/* Campus and facilities */}

      {/* Placement */}
    </div>
  );
};

export default Overview;
