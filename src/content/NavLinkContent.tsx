type NavType = {
  text: string;
  navigate: string;
};

type NavLinkContentType = NavType[];

export const NavLinkContent = () => {
  const navList: NavLinkContentType = [
    {
      text: "WORK",
      navigate: "/#work",
    },
    {
      text: "SERVICES",
      navigate: "/#services",
    },
    {
      text: "CRAFT",
      navigate: "/#digital",
    },
    {
      text: "ABOUT",
      navigate: "/#about",
    },
    {
      text: "CONNECT",
      navigate: "/#contact",
    },
  ];
  return { navList };
};
