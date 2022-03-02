import { NavLink } from "remix";

const linkss = [
  { url: "", name: "Home" },
  { url: "services", name: "Services" },
  // { url: "about", name: "About" },
  // { url: "gallery", name: "Gallery" },
  // { url: "testimonial", name: "Testimonial" },
  // { url: "contact", name: "Contact" },
];

function Navigation() {
  return (
    <nav className="fixed flex h-16 w-full flex-row items-center bg-white p-3 shadow-sm shadow-gray-200">
      <section>
        <NavLink to="/fashion">
          <img
            src="https://th.bing.com/th/id/R.d274f48cbe6e7081140c6c661f112407?rik=leuylBUb7lWV5g&pid=ImgRaw&r=0"
            className="m-4 h-9 w-9"
            alt=""
          />
        </NavLink>
      </section>

      <section className="ml-auto">
        {linkss.map((link, index) => (
          <NavLink
            key={index}
            className="text-md m-4 font-bold"
            to={`/fashion/${link.url}`}
          >{`${link.name}`}</NavLink>
        ))}
      </section>
    </nav>
  );
}

export default Navigation;
