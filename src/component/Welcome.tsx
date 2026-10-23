import img from "../assets/pngwing.com (1) (2).png";
import image from "../assets/92e59c6cdbf5b944246f8595e7b5646b.jpg";

type props = {
  className: string;
};

const Welcome = ({ className }: props) => {
  return (
    <section
      className={`px-3 ${className} w-full left-1/2 top-1/2 -translate-1/2 bg-red-600 grid place-content-center  z-300 min-h-screen text-center opacity-1`}
    >
      <div>
        <h3 className="text-[#6b0f0f]">Welcome to</h3>
        <h3 className="text-[#ff3d1f]">Shittu Oluwashile</h3>
        <div className="max-w-60 relative">
          <img className="w-full " src={img} alt="hero image" />
          <div className=" max-w-50 mx-auto my-5 wrapper absolute left-1/2 top-1/2 -translate-y-25 -translate-x-1/2 bottom-0">
            <img src={image} alt="avater for me" />
          </div>
        </div>
        <h3>Boluwatife Portfolio</h3>
        <h4>Scroll Down </h4>
      </div>
    </section>
  );
};

export default Welcome;
