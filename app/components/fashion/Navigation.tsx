import { Link } from "remix";

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
    <nav className="fixed flex w-full h-16 bg-white flex-row items-center p-3 shadow-sm shadow-gray-200">
      <section>
        <Link to="/fashion">
          <img
            src="https://th.bing.com/th/id/R.d274f48cbe6e7081140c6c661f112407?rik=leuylBUb7lWV5g&pid=ImgRaw&r=0"
            className="w-9 h-9 m-4"
            alt=""
          />
        </Link>
      </section>

      <section className="ml-auto">
        {linkss.map((link, index) => (
          <Link
            key={index}
            className="m-4 text-md font-bold"
            to={`/fashion/${link.url}`}
          >{`${link.name}`}</Link>
        ))}
      </section>
    </nav>
  );
}

export default Navigation;
