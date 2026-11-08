import { useRef, useState } from "react";
import useElementSize from "../hooks/useElementSize";
import { ServiceContent } from "../content/ServiceContent";
import { useH1Scroll } from "../hooks/useH1Scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Services = () => {
  const { serviceList } = ServiceContent();
  const [activeService, setActiveService] = useState<number | null>(null);
  const lineRef = useRef(null);
  const container = useRef<HTMLDivElement>(undefined as any);
  const childContainer = useRef<HTMLDivElement>(undefined as any);
  const serviceCards = useRef<HTMLDivElement[]>([]);
  const serviceNumbers = useRef<HTMLSpanElement[]>([]);
  const serviceTitles = useRef<HTMLHeadingElement[]>([]);
  const serviceDescriptions = useRef<HTMLParagraphElement[]>([]);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 500,
    measureRef: lineRef,
  });
  useH1Scroll(container, lineRef);

  useGSAP(
    () => {
      serviceCards.current.forEach((card, index) => {
        const number = serviceNumbers.current[index];
        const title = serviceTitles.current[index];
        const description = serviceDescriptions.current[index];
        if (!number || !title || !description) return;

        /* gsap.from(card, {
          borderColor: null,
          scrollTrigger: {
            trigger: card,
            start: "top 60%",
            end: "top 30%",
          },
        }); */

        gsap.fromTo(
          number,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              end: "top 30%",
              scrub: true,
            },
          },
        );

        SplitText.create([title, description], {
          type: "chars",
          autoSplit: true,
          onSplit: (self) =>
            gsap.fromTo(
              self.chars,
              { color: "#a3a3a3", opacity: 0 },
              {
                color: "#ffffff",
                opacity: 1,
                duration: 1,
                ease: "none",
                stagger: 0.15,
                scrollTrigger: {
                  trigger: card,
                  start: "top 60%",
                  end: "top 30%",
                  scrub: true,
                },
              },
            ),
        });
      });
    },
    { scope: container, revertOnUpdate: true },
  );

  return (
    <section
      ref={container}
      id="services"
      className="relative z-300 text-white min-h-screen scroll-mt-10"
    >
      {/* Name of developer */}
      <div ref={nameRef} className="whitespace-nowrap w-full px-3">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">
          Services
        </h1>
      </div>

      <div ref={childContainer}>
        {serviceList.map((list, index) => (
          <div
            ref={(element) => {
              if (element) serviceCards.current[index] = element;
              else delete serviceCards.current[index];
            }}
            key={list.number}
            role="button"
            tabIndex={0}
            aria-pressed={activeService === list.number}
            onClick={() =>
              setActiveService(
                activeService === list.number ? null : list.number,
              )
            }
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActiveService(
                  activeService === list.number ? null : list.number,
                );
              }
            }}
            className={`group transition-[padding] duration-400 ease-out services relative grid grid-cols-[20%_minmax(0,1fr)] md:grid-cols-[20%_40%_40%] gap-y-3 border-y-[0.1px] mb-10 last:mb-0 border-[rgba(243,237,227,0.1)] py-5 ${
              activeService === list.number ? "is-active pl-3" : "hover:pl-3"
            }`}
          >
            <span
              ref={(element) => {
                if (element) serviceNumbers.current[index] = element;
                else delete serviceNumbers.current[index];
              }}
              className="absolute left-3 top-5"
            >
              ({list.number})
            </span>

            <h2
              ref={(element) => {
                if (element) serviceTitles.current[index] = element;
                else delete serviceTitles.current[index];
              }}
              className="col-start-2 min-w-0 text-[18px] span"
            >
              <strong>{list.title}</strong>
            </h2>

            <p
              ref={(element) => {
                if (element) serviceDescriptions.current[index] = element;
                else delete serviceDescriptions.current[index];
              }}
              className="col-start-2 min-w-0 md:max-w-65 md:col-start-3 mr-3 text-[16px]"
            >
              {list.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
