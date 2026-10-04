import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import image from "../assets/92e59c6cdbf5b944246f8595e7b5646b.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(useGSAP, Draggable);

const About = () => {
  const lineRef = useRef(null);
  const container = useRef<HTMLElement>(undefined as any);
  const imageDrag = useRef<HTMLImageElement>(undefined as any);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 500,
    measureRef: lineRef,
  });

  useGSAP(
    () => {
      if (!imageDrag.current) return;
      Draggable.create(imageDrag.current, {
        type: "x,y",
        bounds: container.current,
        inertia: true,
      });
    },
    { scope: container },
  );
  return (
    <section
      ref={container}
      className="relative z-300 text-white min-h-screen "
    >
      {/* Name of developer */}
      <div ref={nameRef} className="whitespace-nowrap w-full px-3">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">
          About Oluwashile
        </h1>
      </div>

      <div className="px-3">
        <div className=" w-50 mx-auto my-5 wrapper">
          <img ref={imageDrag} src={image} alt="avater for me" />
        </div>
        <div>
          <div>
            <h3>APPROACH</h3>
            <h2 className="text-3xl mr-[20%]">
              Designing with Purpose and
              <span className="text-[#ff3d1f]"> Calrity</span>
            </h2>
            <p className="mt-5 ">
              I beleive good digital products are more than just visual interfaces. They should be clear, useful and enjoyable to use.
            </p>
            <p className="mt-5 ">
              As i build and learn, I focus on understanding the purpose behind a product, creating intuitive interface and writing code that is structured and maintainable. Every project gives me an opportunity to improve both by technical skills and my understanding of how real products are built.
            </p>
          </div>

          <div>
            <h3 className="mt-5">INFORMATION</h3>
            <h2 className="text-3xl mr-[20%]">
              From Curiosity to
              <span className="text-[#ff3d1f]"> Code</span>
            </h2>
            <p className="mt-5 ">
              I'm Shile, a self taught Frontend Developer and Computer Science student with a growing passion for building for the web.<br/> <span className="mb-7 inline-block"></span>
              
              My journey into technology started with curiosty about how websites work. That curiosity led me from graphic designer into front-end developer, where i began learning HTML, CSS and JavaScript and eventually moved into React, Tailwind CSS and TypeScript. <br /> <span className="mb-7 inline-block"></span>
              
              I currently focus on building personal projects that allow me to apply what i learn to real-world problems and develop stronger pratical skills.
            </p>

            <p className="mt-5 ">
                    My long-term goal is to become a full-stack software developer capable of building complete applications from the user interface to the backend.<br /> <span className="mb-7 inline-block"></span>

                    I'm still learning, experimenting and improving with every projects, and i'm excited about where the journey will take me.
            </p>
          </div>

          <div>
            <h3 className="mt-5">BACKGROUND</h3>
            <h2 className="text-3xl mr-[20%]">
              From Graphic Design to 
              <span className="text-[#ff3d1f]"> Code</span>
            </h2>

            <p className="mt-5 ">
              I started my creative journer in graphic design, learning how composition, typography, colour and visual hierachy can communicate ideas effectively.<br /> <span className="mb-7 inline-block"></span> As i becocome more interested in technology, i discovered that coding gave me another way to solve problems creatively. I began exploring web development and gradually moved from designing interfaces to building them.
            </p>

            <p className="mt-5 ">
              Today, i combine the visual perspective i developed through graphic design with my growing technical skills in front-end development.
            </p>
          </div>

          <div>
            <h3 className="mt-5">JOURNEY</h3>
            <h2 className="text-3xl mr-[20%]">
              From Graphic Design to Front-End 
              <span className="text-[#ff3d1f]"> Development</span>
            </h2>

            <p className="mt-5 ">
              <strong>2023-Graphic Design Foundation</strong><br /> <span className="mb-5 inline-block"></span>
              Built a foundation in CorelDraw, Photoshop, layout, colour and visual composition.
            </p>

            <p className="mt-5 ">
              <strong>2023-2025- Graphic Design</strong><br /> <span className="mb-5 inline-block"></span>
              Worked on personal and university-related design projects, including branding, posters and event materials.
            </p>

            <p className="mt-5 ">
              <strong>2024-Present-B.Sc. Computer Science</strong><br /> <span className="mb-5 inline-block"></span>
              Studying Computer Science at Olabisi Onabanjo University, Nigeria.
            </p>

            <p className="mt-5 ">
              <strong>2025-Front-End Development Begins</strong><br /> <span className="mb-5 inline-block"></span>
              Started learning web development with HTML, CSS and javaScript and began building personal projects.
            </p>

            <p className="mt-5 ">
              <strong>2025-Front-End Development Program / SIWES</strong><br /> <span className="mb-5 inline-block"></span>
              Gained pratical exposure to web development through SIWES and continues developing my front-end skiils.
            </p>

            <p className="mt-5 ">
              <strong>2026-React, Tailwind CSS & TypeScript</strong><br /> <span className="mb-5 inline-block"></span>
              Expanded my front-end development skills by learning React, Tailwind CSS and TypeScript and applying them to personal projects.
            </p>
          </div>

          <h3 className="mt-5">Download Resume</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
