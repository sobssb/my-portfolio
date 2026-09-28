
import img from "../assets/pngwing.com (1) (2).png";

type props = {
  className: string;
};

const Welcome = ({ className }: props) => {
  return (
    <section className={`px-2 lg:px-3 ${className} w-full left-1/2 top-1/2 -translate-1/2 bg-red-600 min-h-screen grid place-content-center opacity-20`}>
      <div>
      <h3 className="text-[#6b0f0f]">Welcome to</h3>
      <h3 className="text-[#ff3d1f]">Shittu Oluwashile</h3>
      <img
        className="max-w-60"
        src={img}
        alt="hero image"
      />
      <h3>Boluwatife Portfolio</h3>
      <h4>Scroll Down </h4>
      </div>
    </section>
  );
};

export default Welcome;
