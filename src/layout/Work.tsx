import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";

const Work = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 230,
    measureRef: lineRef,
  });
  return (
    <section className="relative z-300 bg-white min-h-screen text-black">
      {/* Name of developer */}
      <div ref={nameRef} className="whitespace-nowrap w-full px-3 ">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">
          Selected Works
        </h1>
      </div>

      <div>
        <div>
          <div className="w-full h-40 bg-red-900"></div>
          <div>
            <div>
              <h2>this it the name of the project</h2>
              <p>short detail of the project</p>
            </div>

            <div>
              <h3>tech stack</h3>
              <p>the tech stack</p>
            </div>

            <div>
              <div>
                <p>Live Site</p>
                <h3>View project</h3>
              </div>
              <div>
                <p>Industory</p>
                <h3>Market-place</h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full h-40 bg-red-900"></div>
          <div>
            <div>
              <h2>this it the name of the project</h2>
              <p>short detail of the project</p>
            </div>

            <div>
              <h3>tech stack</h3>
              <p>the tech stack</p>
            </div>

            <div>
              <div>
                <p>Live Site</p>
                <h3>View project</h3>
              </div>
              <div>
                <p>Industory</p>
                <h3>Market-place</h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full h-40 bg-red-900"></div>
          <div>
            <div>
              <h2>this it the name of the project</h2>
              <p>short detail of the project</p>
            </div>

            <div>
              <h3>tech stack</h3>
              <p>the tech stack</p>
            </div>

            <div>
              <div>
                <p>Live Site</p>
                <h3>View project</h3>
              </div>
              <div>
                <p>Industory</p>
                <h3>Market-place</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
