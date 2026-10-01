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
              Responsive, component-driven interface built with react +
              typeScript and tailwind css - structure to scale and enhance the
              visual appeal and user interaction.
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
              Cart state logic, inventory filtering and e-commerce UI tuned for
              real-world convertion.
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
              Interface grids and flowcharts built for roadmaps and live data
              representation.
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
              Fully functional prototypes that simulate real performance before
              a single line ships.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span>05</span> // Review
          </div>
          <div>
            <h2>CODE REVIEW, REFACTORING</h2>
            <p>
              Elevate projects through precise code reviews, strategic
              refactoring ensuring top-tier code quality and cohensive frontend
              implementation.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span>06</span> // Website Motions
          </div>
          <div>
            <h2>INTERACTIVE WEBSITE MOTIONS</h2>
            <p>
              Enhance websites with captivating motions using cutting-edge
              technology like GSAP with lenis, incorporating dynamic and
              interactive elements to boost user engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalCraft;
