import { NavLink } from "remix";

const linkss = [
  { url: "courses", name: "Courses" },
  { url: "innovation", name: "Innovation" },
  { url: "platform", name: "Platform" },
  { url: "resources", name: "Resources" },
  { url: "about", name: "About" },
];

function Navigation() {
  return (
    <nav className="fixed hidden h-16 w-full flex-row items-center bg-purple-600 text-white md:flex md:pr-[10%] md:pl-[10%]">
      <section className="">
        <NavLink to="/eduo" className="text-3xl font-bold">
          Eduo.
        </NavLink>
      </section>

      <section className="ml-auto">
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
    </nav>
  );
}

export default Navigation;
