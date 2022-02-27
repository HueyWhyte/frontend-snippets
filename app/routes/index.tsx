import { Link } from "remix";

const templates = [{ url: "fashion", name: "Fashion Design" }];

const Index = () => {
  return (
    <div className="flex flex-col">
      <h1 className="buz-font text-8xl text-center mt-20 mb-20 underline">
        Available Templates
      </h1>

      <section className="w-5/6 mr-auto ml-auto">
        {templates.map((template) => (
          <Link to={`${template.url}`}>
            <h3 className="buz-font text-lg">{template.name}</h3>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Index;
