

const Nav: React.FC = () => {
  const links = [
    {
      name: "Skills",
      path: "#skills",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Resume",
      path: "#resume",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav className="flex gap-8 min-w-[300px]">
      {links.map((link) => {
        return (
          <a className="text-[1.8rem] hover:text-primary-one" href={link.path}>
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
