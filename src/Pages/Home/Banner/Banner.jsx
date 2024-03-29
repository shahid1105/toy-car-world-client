import banner from "../../../assets/images/banner/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url("${banner}")`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="text-base-300">
            <h1 className="mb-5 text-5xl font-bold text-violet-300">
              Toy Car World
            </h1>
            <p className="mb-8 mt-10 md:ps-24 md:pr-24 lg:ps-24 lg:pr-24 ">
              Toy cars are miniature replicas of real vehicles, designed for
              children is play and enjoyment. They are typically made of plastic
              or die-cast metal and come in various shapes, sizes, and colors.
              Toy cars often feature details such as moving wheels, opening
              doors, and realistic designs to enhance the imaginative play
              experience. Children can create their own races, explore imaginary
              worlds, and engage in role-playing scenarios with toy cars,
              fostering creativity, motor skills, and cognitive development.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
