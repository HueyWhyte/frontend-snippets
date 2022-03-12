import { useState } from "react";
import { NavLink } from "remix";
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";

const linkss = [
  { url: "courses", name: "Courses" },
  { url: "innovation", name: "Innovation" },
  { url: "platform", name: "Platform" },
  { url: "resources", name: "Resources" },
  { url: "about", name: "About" },
];

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed flex h-16 w-full flex-row items-center bg-purple-600 text-white md:pr-[10%] md:pl-[10%]">
      <section className="">
        <NavLink to="/eduo" className="ml-3 text-3xl font-bold">
          Eduo.
        </NavLink>
      </section>

      <IoIosMenu
        className="ml-auto mr-3 md:hidden"
        size={30}
        onClick={() => setShowMenu(!showMenu)}
      />

      <section className="ml-auto hidden items-center md:flex">
        {linkss.map((link, index) => (
          <NavLink
            key={index}
            className="m-4 text-sm"
            to={`/fashion/${link.url}`}
          >{`${link.name}`}</NavLink>
        ))}

        <NavLink
          className="m-4 rounded-md bg-white p-3  text-sm font-bold text-purple-600 shadow-md shadow-purple-800"
          to={`/fashion`}
        >
          Request Demo
        </NavLink>
      </section>

      <section
        className={`${
          showMenu ? "flex" : "hidden"
        } fixed top-0 right-0 h-screen w-2/3 flex-col bg-purple-600 shadow-md shadow-purple-800 transition-all duration-500`}
      >
        <IoIosCloseCircle
          className="ml-auto mr-3 mt-4 md:hidden"
          size={30}
          onClick={() => setShowMenu(!showMenu)}
        />

        {linkss.map((link, index) => (
          <NavLink
            key={index}
            onClick={() => setShowMenu(!showMenu)}
            className="m-4 text-sm"
            to="/eduo"
          >{`${link.name}`}</NavLink>
        ))}

        <NavLink
          className="m-4 rounded-md bg-white p-3 text-center text-sm font-bold text-purple-600 shadow-md shadow-purple-800"
          to={`/eduo`}
        >
          Request Demo
        </NavLink>
      </section>
    </nav>
  );
}

export default Navigation;
