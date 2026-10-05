type ServiceType = {
  number: number;
  title: string;
  text: string;
};

type ServiceContentType = ServiceType[];

export const ServiceContent = () => {
  const serviceList: ServiceContentType = [
    {
      number: 1,
      title: "Web Design & Implementation",
      text: "Turning designs and ideas into responsive, functional websites with attention to layout, usability and visual detail.",
    },
    {
      number: 2,
      title: "Front-End Development",
      text: "Building responsive interfaces with React, TypeScript and tailwind CSS using reusable components and organised code.",
    },
    {
      number: 3,
      title: "Interactive Websites",
      text: " Adding purposeful animations and interactions to make websites feel more engaging and responsive.",
    },
    {
      number: 4,
      title: "Marketplace Interfaces",
      text: "Creating product-focused interfaces with browsing, filtering, cart interactions and other e-commerce pattern.",
    },
    {
      number: 5,
      title: "Website Improvements",
      text: "Improving existing fron-end interfaces through responsive fixes, component refactoring, UI improvements and cleaner implementation.",
    },
  ];

  return { serviceList };
};
