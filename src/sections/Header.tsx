export const Header = () => {
  return (
    <div className="select-none flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/50 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item ">
          projects
        </a>
        <a href="#about" className="nav-item">
          about
        </a>
        <a href="#contact" className="nav-item  ">
          contact
        </a>
      </nav>
    </div>
  );
};
