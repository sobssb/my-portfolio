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
    <section id="digital" className="relative z-300 text-white min-h-screen flex flex-col scroll-mt-10">
      <div ref={nameRef} className="whitespace-nowrap w-full  relative px-3 ">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">
          Digital Craft
        </h1>
      </div>

      <div className="px-3 flex flex-row gap-5 overflow-x-scroll no-scroll my-auto h-full [&::webkit-scrollbar]:hidden scrollbar-none ">
        {digitalList.map((list, i) => (
          <div
            className=" grow border-[0.1px] border-[rgba(243,237,227,0.1)] py-10 px-5 min-w-85 min-h-110  relative "
            key={i}
          >
            <span className="text-9xl text-transparent [-webkit-text-stroke:0.4px_#ff3d1f] absolute right-0 -top-6 ">
              {list.number}
            </span>

            <div className="mt-25 mb-6 text-[20px]">
              <span>{list.number}</span> {list.subTitle}
            </div>
            <div>
              <h2 className="text-3xl mb-5">{list.title}</h2>
              <p className="text-[16px]">{list.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalCraft;
