import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import { DigitalContent } from "../content/DigitalContent";

const DigitalCraft = () => {
  const { digitalList } = DigitalContent();
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 500,
    measureRef: lineRef,
  });
  return (
    <section
      id="digital"
      className="relative z-300 text-white min-h-screen flex flex-col scroll-mt-10"
    >
      <div ref={nameRef} className="whitespace-nowrap w-full  relative px-3 ">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">
          Digital Craft
        </h1>
      </div>

      <div className="px-3 flex flex-row gap-5 overflow-x-scroll no-scroll my-auto h-full [&::webkit-scrollbar]:hidden scrollbar-none ">
        {digitalList.map((list, i) => (
          <div
            className="relative flex min-h-110 min-w-85 grow flex-col rounded-2xl border border-[rgba(243,237,227,0.16)] bg-[linear-gradient(150deg,rgba(243,237,227,0.055),rgba(243,237,227,0.012)_72%)] p-[clamp(1.5rem,3vw,2.5rem)]"
            key={i}
          >
            <span
              className="absolute top-4 right-6 text-[9rem] leading-none font-extrabold text-transparent [-webkit-text-stroke:1px_rgba(255,61,31,0.42)]"
              aria-hidden="true"
            >
              {list.number}
            </span>

            <div className="relative z-1 flex justify-between gap-4 border-b border-[rgba(243,237,227,0.16)] pb-[0.85rem] text-[0.8rem] font-semibold text-[rgba(243,237,227,0.76)]">
              <span>{list.subTitle}</span>
              <span className="last:text-[#ff684d]">{list.number}</span>
            </div>
            <div className="relative z-1 mt-auto pt-20">
              <h2 className="mb-4 max-w-[15ch] text-[clamp(1.4rem,2.4vw,1.8rem)] leading-[1.1] font-extrabold">
                {list.title}
              </h2>
              <p className="max-w-[34ch] text-base leading-[1.65] font-normal text-[rgba(243,237,227,0.72)]">
                {list.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalCraft;
