
import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="banner container mx-auto flex items-center justify-between px-6 py-6">
      <div className="banner-content  items-center">
        <h1 className="text-6xl font-extrabold mb-2">
          Build Your Idle <br />{" "}
          <span className="text-6xl font-extrabold bg-gradient-to-r from-[#FF4B23] via-[#E91E63] via-[#A52BCB] to-[#7C3AED] bg-clip-text text-transparent">
            {" "}
            Development Stack
          </span>
        </h1>
        <p className="mb-2">
          Explore frontend, backend, database, and tooling options, <br />{" "}
          compare them side by side, and put together the stack that fits <br />{" "}
          your next project.
        </p>

        
        <div className="flex gap-4">
          <button className="bg-orange-500 text-white px-5 py-3 rounded-lg">
            Explore Technologies
          </button>

          <button className="border border-slate-300 px-5 py-3 rounded-lg">
            Learn More
          </button>
        </div>

      </div>
      <div className="banner-image items-center justify-center">
        <img src={BannerImage} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
