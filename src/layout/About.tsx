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
              Designing for impact and{" "}
              <span className="text-[#ff3d1f]">Calrity</span>
            </h2>
            <p className="mt-5 ">
              I beleive great design is more than aesthetics. It's about
              strategy, clarity and growth. Every project i take starts with a
              deep understanding of the goals, audience and positioning.
            </p>
            <p className="mt-5 ">
              My approach blends strategy and excution, ensuring every design
              decision serves a purpose. Whether crafting a visual identity, a
              high-converting website, or seamless user experience, I focus on
              creating work that not only looks great but drives real results
            </p>
          </div>

          <div>
            <h3 className="mt-5">INFORMATION</h3>
            <h2 className="text-3xl mr-[20%]">
              From vison, dream to reality
              <span className="text-[#ff3d1f]">One day</span>
            </h2>
            <p className="mt-5 ">
              I'm Shile, a passionate self taught Frontend Developer. I Focus on
              creating responsive and interactive websites using HTML, CSS and
              javaScript. My curiosity about how the web works sparked my
              journey into tech I've been committed to learning and growing ever
              since. I'm also working on real-world projects like
              <strong>World Trip</strong>, <strong>GrowNest</strong>, to
              showcase my skills and creativity.
            </p>

            <p className="mt-5 ">
              My long goal is to become a full-stack software developer capable
              of building both frontend and backend of powerful applications.
              I'm always learning, always improving and excited about the future
              of tech and what i can contribute to it
            </p>
          </div>

          <div>
            <h3 className="mt-5">BACKGROUND</h3>
            <h2 className="text-3xl mr-[20%]">
              From Graphic Design to Coding
              <span className="text-[#ff3d1f]">Freedom</span>
            </h2>

            <p className="mt-5 ">
              I started as a graphic designer but found my passion in
              coding-solving problems creatively
            </p>

            <p className="mt-5 ">
              After learnig about graphic design, i built some personal
              projects......
            </p>
          </div>

          <div>
            <h3 className="mt-5">JOURNEY</h3>
            <h2 className="text-3xl mr-[20%]">
              The transitioning of graphic design into coding
              <span className="text-[#ff3d1f]">Freedom</span>
            </h2>

            <p className="mt-5 ">
              2023 "Graphic Design Foundation". (CorelDraw, photoShop, Layout,
              Color, Composition)
            </p>

            <p className="mt-5 ">
              2023-2025 <br />
              "Graphic Designer". CorelDraw projects for branding, posters and
              unversity events.
            </p>

            <p className="mt-5 ">
              2025-present <br />
              "Frontend Developer (In Training)". Built  projects with
              HTML/CSS/JS.
            </p>

            <p className="mt-5 ">
              2025-present <br />
              "B.Sc. in Computer Science". Olabisi Onabanjo University, Nigeria
            </p>

            <p className="mt-5 ">
              2025 "Frontend Development Program". Siwes Internship (HTML, CSS,
              javaScript).
            </p>
          </div>

          <h3 className="mt-5">Download Resume</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
