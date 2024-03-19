import { MdLocalHospital } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
const navLinks = [
  {
    path: "/",
    label: "Home",
    id: "1",
  },
  {
    path: "/services",
    label: "Services",
    id: "2",
  },
  {
    path: "/doctors",
    label: "Find a doctor",
    id: "3",
  },
  {
    path: "/contact",
    label: "Contact",
    id: "4",
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  useEffect(() => {
    const handleStickyNavbar = () => {
      window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 80) {
          navRef.current ? navRef.current.classList.add("sticky_header") : "";
        } else {
          navRef.current
            ? navRef.current.classList.remove("sticky_header")
            : "";
        }
      });
    };
    handleStickyNavbar();
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <header className=" flex items-center header">
      <div className="container">
        <nav className="flex h-16 justify-between items-center " ref={navRef}>
          <div className=" text-primary flex h-auto items-center gap-2">
            <Link to={"/"} className="flex gap-2">
              <MdLocalHospital color="text-primary" size={30} />
              <span className="text-2xl font-bold">HealthCare</span>
            </Link>
          </div>
          <ul className="flex gap-5 h-auto items-center">
            {navLinks.map((label) => (
              <li key={label.id}>
                <NavLink
                  to={label.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-primary font-bold text-base"
                      : "text-base"
                  }
                >
                  {label.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <Link to={"/"} className="hidden">
              <FaCircleUser size={24} color="text-text" />
            </Link>
            <Link to={"/auth/login"}>
              <button className="btn ">Log in</button>
            </Link>
            <span className="md:hidden block" onClick={handleToggleMenu}>
              <FaBars />
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
