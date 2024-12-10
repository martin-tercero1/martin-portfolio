import Nav from "./Nav/Nav";
import Button from "../shared/Button/Button";

interface HeaderProps {
    title: String;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
      // min-w-[320px] max-w-[1100px]
      <header className="py-8 xl:py-12 text-primary-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex gap-3 items-center">
            <img
              className="w-24 header-logo"
              src="./logo martin.svg"
              alt="Martin Tercero Logo"
            />
            <a href="/">
              <h1 className="text-4xl font-semibold">
                Martin<span className="text-primary-two">.</span>
              </h1>
            </a>
          </div>

          {/* Desktop Nav Bar and Hire Me Button */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <a href="mailto:martintercero20@hotmail.com">
              <Button text="Hire me"></Button>
            </a>
          </div>

          {/* Mobile Nav */}
          <div className="xl:hidden"></div>
        </div>
      </header>
    );
};

export default Header;