import { twMerge } from "tailwind-merge";

interface HeaderProps {
  activeSection: string;
}
export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <div className="select-none flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/50 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#"
          className={twMerge(
            "nav-item",
            activeSection === "home" ? "active" : ""
          )}
        >
          Home
        </a>
        <a
          href="#projects"
          className={twMerge(
            "nav-item",
            activeSection === "projects" ? "active" : ""
          )}
        >
          projects
        </a>
        <a
          href="#about"
          className={twMerge(
            "nav-item",
            activeSection === "about" ? "active" : ""
          )}
        >
          about
        </a>
        <a
          href="#contact"
          className={twMerge(
            "nav-item ",
            activeSection === "contact" ? "active" : ""
          )}
        >
          contact
        </a>
      </nav>
    </div>
  );
};
