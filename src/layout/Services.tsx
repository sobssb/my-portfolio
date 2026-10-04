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
            <h2>Web Design & Implementation</h2>
            <p>
              Turning designs and ideas into responsive, functional websites with attention to layout, usability and visual detail.
            </p>
          </div>
        </div>
        <div>
          <div>(2)</div>
          <div>
            <h2>Front-End Development</h2>
            <p>
              Building responsive interfaces with React, TypeScript and tailwind CSS using reusable components and organised code.
            </p>
          </div>
        </div>
        <div>
          <div>(3)</div>
          <div>
            <h2>Interactive Websites</h2>
            <p>
              Adding purposeful animations and interactions to make websites feel more engaging and responsive.
            </p>
          </div>
        </div>
        <div>
          <div>(4)</div>
          <div>
            <h2>Marketplace Interfaces</h2>
            <p>
             Creating product-focused interfaces with browsing, filtering, cart interactions and other e-commerce pattern.
            </p>
          </div>
        </div>
        <div>
          <div>(5)</div>
          <div>
            <h2>Website Improvements</h2>
            <p>
              Improving existing fron-end interfaces through responsive fixes, component refactoring, UI improvements and cleaner implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
