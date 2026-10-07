import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import image from "../assets/92e59c6cdbf5b944246f8595e7b5646b.jpg";
import { AboutContent } from "../content/AboutContent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(useGSAP, Draggable);

const About = () => {
  const { aboutList } = AboutContent();
  const lineRef = useRef(null);
  const container = useRef<HTMLElement>(undefined as any);
  const imageDrag = useRef<HTMLImageElement>(undefined as any);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 500,
    measureRef: lineRef,
  });

  useGSAP(
    () => {
      if (!imageDrag.current) return;
      Draggable.create(imageDrag.current, {
        type: "x,y",
        bounds: container.current,
        inertia: true,
      });
    },
    { scope: container },
  );
  return (
    <section
      id="about"
      ref={container}
      className="relative z-300 text-white min-h-screen scroll-mt-10"
    >
      {/* Name of developer */}
      <div ref={nameRef} className="whitespace-nowrap w-full px-3">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5 mb-0">
          About Oluwashile
        </h1>
      </div>

      <div className="px-3 md:px-0">
        <div className=" w-70 mx-auto my-5 wrapper">
          <img ref={imageDrag} src={image} alt="avater for me" />
        </div>
        <div>
          {aboutList.map((list, i) => (
            <div
              key={i}
              className={`mt-10 ${i === 0 ? "md:ml-[40%] mt-30 md:mr-[20%]" : i === 1 ? "mt-30 md:mr-[20%] md:ml-[40%]" : "mt-30 md:ml-[20%] md:mr-[40%]"} `}
            >
              <h3>{list.subTitle}</h3>
              <h2 className="text-3xl mr-[20%]">
                {list.title}
                <span className="text-[#ff3d1f]"> {list.titleSpan}</span>
              </h2>

              {list.text?.map((info, i) => (
                <p
                  key={i}
                  className={`mt-5 ${i === 0 ? " md:mr-[40%]" : i === 1 ? " md:mr-[40%] " : " md:mr-[40%]"} `}
                >
                  {info}
                </p>
              ))}

              {list.journey?.map((info, i) => (
                <p key={i} className="mt-5 ">
                  <strong>{info.strong} </strong> <br />{" "}
                  <span className="mb-5 inline-block"></span>
                  {info.text}
                </p>
              ))}
            </div>
          ))}

          <h3 className="mt-15 text-center">Download Resume</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
