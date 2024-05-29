import websiteImg from "../assets/ecommerce-websites.jpg";
import websiteImg2 from "../assets/food-ecommerce.jpg";
import websiteImg3 from "../assets/website-blog.jpg";

export default function Projects() {
  const config = {
    Projects: [
      {
        image: websiteImg,
        description: "A Ecommerse website build with ReactJs",
        link: "https://github.com/Prasanth2706",
      },
      {
        image: websiteImg2,
        description: "Food Ecommerse website like Swiggy, build with Angular",
        link: "https://github.com/Prasanth2706",
      },
      {
        image: websiteImg3,
        description: " Basic blog website build with Nextjs and MongoJS",
        link: "https://github.com/Prasanth2706",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-10">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my projects i have built using ReactJs,Vannila
            CSS.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.Projects.map((project) => (
            <div className="relative">
              <img className="h-[200px] w-[500px]" src={project.image} />
              <div className="project-desc">
                <p className="text-center px-5 py-5">{project.description}</p>
              <div className="flex justify-center">
                  <a className="btn" target="_blank" href={project.link}>View Project</a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
