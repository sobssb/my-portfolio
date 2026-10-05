import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import { ServiceContent } from "../content/ServiceContent";

const Services = () => {
  const { serviceList } = ServiceContent();
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 500,
    measureRef: lineRef,
  });
  return (
    <section id="services" className="relative z-300 text-white min-h-screen scroll-mt-10">
      {/* Name of developer */}
      <div ref={nameRef} className="whitespace-nowrap w-full px-3">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">
          Services
        </h1>
      </div>

      <div>
        {serviceList.map((list) => (
          <div
            key={list.number}
            className="relative grid grid-cols-[20%_minmax(0,1fr)] md:grid-cols-[20%_40%_40%] gap-y-3 border-y-[0.1px] mb-10 last:mb-0 border-[rgba(243,237,227,0.1)] py-5"
          >
            <span className="absolute left-3 top-5">({list.number})</span>

            <h2 className="col-start-2 min-w-0">
              <strong>{list.title}</strong>
            </h2>

            <p className="col-start-2 min-w-0 md:max-w-65 md:col-start-3 mr-3">
              {list.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
