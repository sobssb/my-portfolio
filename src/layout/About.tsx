import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import image from "../assets/92e59c6cdbf5b944246f8595e7b5646b.jpg";
import { AboutContent } from "../content/AboutContent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/Draggable";

// icon
import { MdOutlineFileDownload } from "react-icons/md";

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
              className="mt-30 grid grid-cols-1 gap-y-3 md:grid-cols-5 md:gap-y-0 text-white"
            >
              <h3
                className={`text-[10.5px] font-semibold tracking-[0.08em]  md:col-start-1 md:row-start-1 ${i < 2 ? "md:justify-self-end md:text-right" : "md:px-3"}`}
              >
                {list.subTitle}
              </h3>
              <div
                className={`min-w-0 md:row-start-1 ${i < 2 ? "md:col-start-3 md:col-span-2" : "md:col-start-2 md:col-span-2"}`}
              >
                <h2 className="mb-0 text-3xl leading-[1.12] ">
                  {list.title}
                  <span className="text-[#ff3d1f] span"> {list.titleSpan}</span>
                </h2>

                {list.text?.map((info, i) => (
                  <p key={i} className="mt-5 text-[16px] leading-[1.3] ">
                    {info}
                  </p>
                ))}

                {list.journey?.map((info, i) => (
                  <p key={i} className="mt-5 text-[16px] leading-[1.3] ">
                    <strong>{info.strong}</strong>
                    <br />
                    {info.text}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="my-15 mx-auto flex w-fit flex-1 items-center">
            <a
              href="#"
              className="group flex w-fit cursor-pointer touch-manipulation items-center justify-center gap-[0.12em] whitespace-nowrap rounded-full border border-white/40 bg-[linear-gradient(145deg,#ff684d_0%,#ff3d1f_58%,#df2d16_100%)] py-3 px-3 text-2xl leading-none font-black text-white no-underline shadow-[0_10px_0_#a92616,0_20px_32px_rgba(0,0,0,0.35),inset_0_2px_0_rgba(255,255,255,0.35),inset_0_-4px_0_rgba(117,17,4,0.18)] transition-[transform,box-shadow,filter] duration-160 hover:-translate-y-px hover:brightness-[1.08] hover:shadow-[0_13px_0_#a92616,0_24px_36px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.4),inset_0_-4px_0_rgba(117,17,4,0.18)] active:translate-y-1 active:brightness-[0.96] active:shadow-[0_2px_0_#a92616,0_6px_12px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.25)] focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-white motion-reduce:transition-none"
            >
              <span>Download Resume</span>
              <MdOutlineFileDownload
                aria-hidden="true"
                className="h-[0.72em] w-[0.72em] shrink-0"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
