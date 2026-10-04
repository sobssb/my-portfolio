import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";

const DigitalCraft = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 500,
    measureRef: lineRef,
  });
  return (
    <section className="relative z-300 text-white min-h-screen">
      <div ref={nameRef} className="whitespace-nowrap w-full  relative px-3">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">Digital Craft
        </h1>
      </div>

      <div>
        <div>
          <div>
            <span>01</span> // Engineering
          </div>
          <div>
            <h2>FRONT-END DEVELOPMENT</h2>
            <p>
              React, TypeScript, Tailwind CSS, reusable components, responsive layout and structural front-end architecture.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span>02</span> // Commerce
          </div>
          <div>
            <h2>MARKETPLACE DEVELOPMENT</h2>
            <p>
              Product interfaces, filtering, cart state, product discovery and e-commerce UI patterns.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span>03</span> // Data
          </div>
          <div>
            <h2>SYSTEM VISUALIZATION</h2>
            <p>
              Dashboards, information-heavy interfaces, grid, tables and visual representation of structured data.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span>04</span> // Prototyping
          </div>
          <div>
            <h2>HIGH-END PROTOTYPING</h2>
            <p>
              Turning concepts and designs into functional interfaces that demonstrate product ideas and user flows.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span>05</span> // Code
          </div>
          <div>
            <h2>CLEAN CODE & REFACTORING</h2>
            <p>
              Resuable components, organized project structure, refactoring and improving maintainability as project evolve.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span>06</span> // Motion
          </div>
          <div>
            <h2>INTERACTIVE WEB MOTIONS</h2>
            <p>
              Exploring GSAP and smooth-scrollig technique to create purposeful animations and interactive experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalCraft;
