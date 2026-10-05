type DigitalType = {
  number: string;
  subTitle: string;
  title: string;
  text: string;
};

type DigitalContentType = DigitalType[];

export const DigitalContent = () => {
  const digitalList: DigitalContentType = [
    {
      number: "01",
      subTitle: "// Engineering",
      title: "FRONT-END DEVELOPMENT",
      text: "React, TypeScript, Tailwind CSS, reusable components, responsive layout and structural front-end architecture.",
    },
    {
      number: "02",
      subTitle: "// Commerce",
      title: "MARKETPLACE DEVELOPMENT",
      text: "Product interfaces, filtering, cart state, product discovery and e-commerce UI patterns.",
    },
    {
      number: "03",
      subTitle: "// Data",
      title: "SYSTEM VISUALIZATION",
      text: "Dashboards, information-heavy interfaces, grids, tables and visual representations of structured data.",
    },
    {
      number: "04",
      subTitle: "// Prototyping",
      title: "INTERACTIVE PROTOTYPING",
      text: "Turning concepts and designs into functional interfaces that demonstrate product ideas and user flow.",
    },
    {
      number: "05",
      subTitle: "// Code",
      title: "CLEAN CODE & REFACTORING",
      text: "Reusable components, organised project structure, refactoring and improving maintainability as project evolve.",
    },
    {
      number: "06",
      subTitle: "// Motion",
      title: "INTERACTIVE WEB MOTIONS",
      text: "Exploring GSAP and smooth-scrolling technique to create purposeful animations and interactive experience.",
    },
  ];

  return { digitalList };
};
