type workContent = {
  id: number;
  title: string;
  text: string;
  stackTitle: string;
  stackText: string;
  liveTitle: string;
  liveText: string;
  industry: string;
  industryText: string;
};

type WorkContentType = workContent[];

export const WorkContent = () => {
  const workList: WorkContentType = [
    {
      id: 1,
      title: "Swap & Shop",
      text: "A responsive marketplace interface where users can browse, search and explore products across different categories. Built to practice real-world e-commerce UI patterns, product filtering, navigation and reusable React components.",
      stackTitle: "Tech Stack",
      stackText: "React . TypeScript . Tailwind CSS . Vite",
      liveTitle: "Live Site",
      liveText: "View project",
      industry: "Industry",
      industryText: "Market-place",
    },
    {
      id: 2,
      title: "Roadmap Genius",
      text: "Short detail of the project.",
      stackTitle: "Tech Stack",
      stackText: "React . TypeScript . Tailwind CSS . Vite",
      liveTitle: "Live Site",
      liveText: "View project",
      industry: "Industry",
      industryText: "Market-place",
    },
    {
      id: 3,
      title: "FarmMag",
      text: "Short detail of the project.",
      stackTitle: "Tech Stack",
      stackText: "React . TypeScript . Tailwind CSS . Vite",
      liveTitle: "Live Site",
      liveText: "View project",
      industry: "Industory",
      industryText: "Market-place",
    },
  ];
  return { workList };
};
