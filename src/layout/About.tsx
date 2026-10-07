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
              className="mt-30 grid grid-cols-1 gap-y-3 md:grid-cols-5 md:gap-y-0"
            >
              <h3
                className={`text-xs font-semibold tracking-[0.08em] text-[rgba(243,237,227,0.65)] md:col-start-1 md:row-start-1 ${i < 2 ? "md:justify-self-end md:text-right" : "pl-3"}`}
              >
                {list.subTitle}
              </h3>
              <div
                className={`min-w-0 md:row-start-1 ${i < 2 ? "md:col-start-3 md:col-span-2" : "md:col-start-2 md:col-span-2"}`}
              >
                <h2 className="mb-0 text-2xl leading-[1.12] md:text-4xl">
                  {list.title}
                  <span className="text-[#ff3d1f]"> {list.titleSpan}</span>
                </h2>

                {list.text?.map((info, i) => (
                  <p
                    key={i}
                    className="mt-5 text-sm leading-[1.7] text-[rgba(243,237,227,0.78)] md:text-[0.95rem]"
                  >
                    {info}
                  </p>
                ))}

                {list.journey?.map((info, i) => (
                  <p
                    key={i}
                    className="mt-5 text-sm leading-[1.7] text-[rgba(243,237,227,0.78)] md:text-[0.95rem]"
                  >
                    <strong>{info.strong}</strong>
                    <br />
                    {info.text}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <h3 className="mt-15 text-center">Download Resume</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
