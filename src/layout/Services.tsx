import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";

const Services = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 500,
    measureRef: lineRef,
  });
  return (
    <section className="relative z-300 text-white min-h-screen">
      {/* Name of developer */}
      <div ref={nameRef} className="whitespace-nowrap w-full px-3">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">
          Services
        </h1>
      </div>

      <div className="px-3">
        <div>
          <div>(1)</div>
          <div>
            <h2>Strategy</h2>
            <p>
              Clear, actionable plans to align business vison with long-term
              goals and measurable success.
            </p>
          </div>
        </div>
        <div>
          <div>(2)</div>
          <div>
            <h2>Brand Identity</h2>
            <p>
              Memorable designs that capture the essence of your brand and
              connect with your audience.
            </p>
          </div>
        </div>
        <div>
          <div>(3)</div>
          <div>
            <h2>Web Design</h2>
            <p>
              Beautiful, user-friendly websites that create seamless experience
              and elevate your business.
            </p>
          </div>
        </div>
        <div>
          <div>(4)</div>
          <div>
            <h2>Web Development</h2>
            <p>
              React + typeScript website with gsap and lenis to grow your
              business and perform at the highest level.
            </p>
          </div>
        </div>
        <div>
          <div>(5)</div>
          <div>
            <h2>Web Apps</h2>
            <p>
              Custom applications tailored to streamline operations and enhance
              user engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
