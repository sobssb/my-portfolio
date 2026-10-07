import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 500,
    measureRef: lineRef,
  });

  return (
    <section
      id="contact"
      className="scroll-mt-10 relative z-300 text-white min-h-screen flex flex-col"
    >
      {/* Name of developer */}
      <div ref={nameRef} className="whitespace-nowrap w-full px-3 relative">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">
          Get in Touch
        </h1>
      </div>

      <div className=" w-full flex flex-row flex-nowrap justify-between gap-1 md:-mt-17 -mt-6 text-[11px]">
        <p>LET'S CHAT</p>
        <p>LET'S CHAT</p>
        <p>LET'S CHAT</p>
        <p>LET'S CHAT</p>
      </div>

      <div className="my-10 mx-auto flex w-[min(92%,72rem)] flex-1 items-center">
        <a
          href="mailto:oluwashileshittu@gmail.com"
          className="group flex min-h-[clamp(9rem,28vw,21rem)] w-full cursor-pointer touch-manipulation items-center justify-center gap-[0.12em] whitespace-nowrap rounded-full border border-white/40 bg-[linear-gradient(145deg,#ff684d_0%,#ff3d1f_58%,#df2d16_100%)] p-[clamp(1rem,4vw,4rem)] text-[clamp(2.25rem,9vw,9rem)] leading-none font-black text-white no-underline shadow-[0_10px_0_#a92616,0_20px_32px_rgba(0,0,0,0.35),inset_0_2px_0_rgba(255,255,255,0.35),inset_0_-4px_0_rgba(117,17,4,0.18)] transition-[transform,box-shadow,filter] duration-[160ms] hover:-translate-y-[3px] hover:brightness-[1.08] hover:shadow-[0_13px_0_#a92616,0_24px_36px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.4),inset_0_-4px_0_rgba(117,17,4,0.18)] active:translate-y-2 active:brightness-[0.96] active:shadow-[0_2px_0_#a92616,0_6px_12px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.25)] focus-visible:outline-3 focus-visible:outline-offset-8 focus-visible:outline-white motion-reduce:transition-none"
        >
          <span>LET'S TALK</span>
          <FiArrowUpRight
            aria-hidden="true"
            className="h-[0.72em] w-[0.72em] shrink-0 transition-transform duration-[160ms] group-hover:translate-x-[0.08em] group-hover:-translate-y-[0.08em] motion-reduce:transition-none"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
