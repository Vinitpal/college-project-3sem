import ServicesCard from "./ServicesCard";

const ServicesInfo = [
  {
    title: "Choose your career",
    options: [
      "Bachelors of Engineering",
      "Management Studies",
      "Master of Computer Application",
      "Pharmaceutical Science",
    ],
  },
  {
    title: "Choose your Institute",
    options: [
      "Shri Shankracharya Techinical Campus",
      "Shri Shankracharya College of Pharma. Science",
      "Shri Shankracharya Institute of Ph. Sc. & Research",
    ],
  },
];

const Services = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-around">
      {/* Choose your career */}
      {ServicesInfo.map((item, index) => (
        <ServicesCard key={index} title={item.title} options={item.options} />
      ))}
    </div>
  );
};

export default Services;
