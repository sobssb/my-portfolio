type journey = {
  strong: string;
  text: string;
};

type AboutType = {
  subTitle: string;
  title: string;
  titleSpan: string;
  text?: string[];
  journey?: journey[];
};

type AboutContentType = AboutType[];

export const AboutContent = () => {
  const aboutList: AboutContentType = [
    {
      subTitle: "APPROACH",
      title: "Designing with Purpose and",
      titleSpan: "Calrity",
      text: [
        "I beleive good digital products are more than just visual interfaces. They should be clear, useful and enjoyable to use.",
        "As i build and learn, I focus on understanding the purpose behind a product, creating intuitive interface and writing code that is structured and maintainable. Every project gives me an opportunity to improve both by technical skills and my understanding of how real products are built.",
      ],
    },
    {
      subTitle: "INFORMATION",
      title: "From Curiosity to",
      titleSpan: "Code",
      text: [
        "I'm Shile, a self taught Frontend Developer and Computer Science student with a growing passion for building for the web.",
        "My journey into technology started with curiosty about how websites work. That curiosity led me from graphic designer into front-end developer, where i began learning HTML, CSS and JavaScript and eventually moved into React, Tailwind CSS and TypeScript.",
        "I currently focus on building personal projects that allow me to apply what i learn to real-world problems and develop stronger pratical skills.",
        "My long-term goal is to become a full-stack software developer capable of building complete applications from the user interface to the backend.",
        "I'm still learning, experimenting and improving with every projects, and i'm excited about where the journey will take me.",
      ],
    },
    {
      subTitle: "BACKGROUND",
      title: "From Graphic Design to",
      titleSpan: "Code",
      text: [
        " I started my creative journer in graphic design, learning how composition, typography, colour and visual hierachy can communicate ideas effectively.",
        "As i becocome more interested in technology, i discovered that coding gave me another way to solve problems creatively. I began exploring web development and gradually moved from designing interfaces to building them.",
        "Today, i combine the visual perspective i developed through graphic design with my growing technical skills in front-end development.",
      ],
    },
    {
      subTitle: "JOURNEY",
      title: "From Graphic Design to Front-End",
      titleSpan: "Development",
      journey: [
        {
          strong: "2023-Graphic Design Foundation",
          text: "Built a foundation in CorelDraw, Photoshop, layout, colour and visual composition.",
        },
        {
          strong: "2023-2025- Graphic Design",
          text: "Worked on personal and university-related design projects, including branding, posters and event materials.",
        },
        {
          strong: "2024-2027-B.Sc. Computer Science",
          text: "Studying Computer Science at Olabisi Onabanjo University, Nigeria.",
        },
        {
          strong: "2025-Front-End Development Begins",
          text: "Started learning web development with HTML, CSS and javaScript and began building personal projects.",
        },
        {
          strong: "2025-Front-End Development Program / SIWES",
          text: "Gained pratical exposure to web development through SIWES and continues developing my front-end skiils.",
        },
        {
          strong: "2026-React, Tailwind CSS & TypeScript",
          text: "Expanded my front-end development skills by learning React, Tailwind CSS and TypeScript and applying them to personal projects.",
        },
      ],
    },
  ];

  return { aboutList };
};
