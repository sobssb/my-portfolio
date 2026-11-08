import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import { WorkContent } from "../content/WorkContent";
import { useH1Scroll } from "../hooks/useH1Scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const { workList } = WorkContent();
  const container = useRef<HTMLDivElement>(undefined as any);
  const imageFrames = useRef<HTMLDivElement[]>([]);
  const copies = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 230,
    measureRef: lineRef,
  });

  useH1Scroll(container, lineRef);

  useGSAP(
    () => {
      imageFrames.current.forEach((imageFrame, index) => {
        const copy = copies.current[index];

        if (!imageFrame || !copy) return;

        const timeline = gsap.timeline({
          defaults: {
            duration: 0.8,
            ease: "none",
          },
          scrollTrigger: {
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            // markers: true,
            invalidateOnRefresh: true,
            trigger: imageFrame,
          },
        });

        timeline
          .from(imageFrame, {
            scale: 0.5,
            autoAlpha: 0,
            opacity: 0,
          })
          .from(
            copy,
            {
              y: 24,
              autoAlpha: 0,
              opacity: 0,
            },
            "+=1",
          );
      });
    },
    { scope: container },
  );

  return (
    <section
      id="work"
      ref={container}
      className="relative z-300 bg-white min-h-screen text-black scroll-mt-10 pb-7"
    >
      {/* Name of developer */}
      <div
        ref={nameRef}
        className="whitespace-nowrap w-full px-3 relative z-10"
      >
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">
          Selected Works
        </h1>
      </div>

      <div className="px-3">
        {workList.map((list, index) => (
          <div key={list.id} className="mb-5">
            <div
              ref={(element) => {
                if (element) imageFrames.current[index] = element;
                else delete imageFrames.current[index];
              }}
              className="w-full h-60 bg-red-900 rounded-[10px]"
            ></div>

            <div
              ref={(element) => {
                if (element) copies.current[index] = element;
                else delete copies.current[index];
              }}
            >
              <div className="flex row gap-3 justify-between items-start mt-4 mb-7">
                <div>
                  <h2>{list.title}</h2>
                  <p className="max-w-150">{list.text}</p>
                </div>
                <div className="font-bold">({list.id})</div>
              </div>

              <div>
                <div className="mb-7">
                  <p>{list.liveTitle}</p>
                  <h3>{list.liveText}</h3>
                </div>
                <div className="mb-7">
                  <p>{list.industry}</p>
                  <h3>{list.industryText}</h3>
                </div>
              </div>
              <div className="mb-7">
                <h3>{list.stackTitle}</h3>
                <p>{list.stackText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
