import AboutImg from "../assets/about.png";

export default function About() {
  const config = {
    line1:
      " Hi, Myself Prasanth who worked as an Application developer in Divum corporate Services for two years.",
    line2:
      "I worked in front-end domain. I'm proficient in Frontend skills like React.js,Redux,Redux Tool Kit, Axios, Tailwind CSS, SaSS, CSS3 and many more.",
  };

  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="md:w-1/2 py-5">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p>{config.line2}</p>
        </div>
      </div>
    </section>
  );
}
