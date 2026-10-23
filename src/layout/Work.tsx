import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import { WorkContent } from "../content/WorkContent";
import { useH1Scroll } from "../hooks/useH1Scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Work = () => {
  const { workList } = WorkContent();
  const container = useRef<HTMLDivElement>(undefined as any);
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 230,
    measureRef: lineRef,
  });

  useH1Scroll(container, lineRef);

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
        {workList.map((list) => (
          <div key={list.id} className="mb-5">
            <div className="w-full h-60 bg-red-900 rounded-[10px]"></div>
            <div>
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
