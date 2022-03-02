import { Link } from "remix";
import Layout from "~/components/eduo/Layout";
import { AiFillPlayCircle, AiFillCamera } from "react-icons/ai";

const some = [
  { id: 1, title: "Schools", price: "16,032", color: "green" },
  { id: 2, title: "Users", price: "10M", color: "red" },
  { id: 3, title: "Contries", price: "119", color: "blue" },
];

const courses = [
  {
    id: 1,
    title: "Master English: How to Improve your English Speaking",
    price: "16,032",
    color: "green",
    star: "4.6",
    category: "English Speaking",
  },
  {
    id: 2,
    title: "Intermediate: Zero to Hero Website Development",
    price: "10M",
    color: "red",
    star: "5.0",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Expert Web Developer: Full-Stack Laravel Expert",
    price: "119",
    color: "blue",
    star: "4.2",
    category: "Web Development",
  },
];

const benefits = [
  {
    id: 1,
    title: "Online degree",
    description: `Fugiat accusamus adipisci perspiciatis sapiente dolores similiqu
              e quisquam ut id earum.`,
    color: "green",
  },
  {
    id: 2,
    title: "Short courses",
    description: `Maxime accusamus adipisci perspiciatis sapiente dolores
            similique quisquam ut id earum`,
    color: "purple",
  },
  {
    id: 3,
    title: "Learn with experts",
    description: `perspiciatis sapiente dolores
            similique quisquam ut id earum, maxime dolorem eaque, commodi`,
    color: "red",
  },
];

const Eduo = () => {
  return (
    <Layout className="flex min-h-screen w-full flex-col ">
      <section className="flex h-full w-full bg-purple-600 pt-16 pb-16 text-white md:pr-[10%] md:pl-[10%]">
        <div className="flex w-[60%] flex-col">
          <h1 className="text-6xl font-bold">
            Take Your Learning <br /> To The Next Level
          </h1>

          <p className="mt-4 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            tempora fugiat accusamus adipisci perspiciatis sapiente dolores
            similique quisquam ut id earum, maxime dolorem eaque, commodi
            velit?.
          </p>

          <div className="flex items-center">
            <p className="mr-11 cursor-pointer rounded-md bg-white p-3 text-sm font-bold text-purple-600 shadow-md shadow-purple-800">
              Request Demo
            </p>

            <div className="flex items-center">
              <AiFillPlayCircle className="mr-2" size={47} />
              <p>What's Eduo?</p>
            </div>
          </div>

          <div className="mt-20 flex">
            {some.map((som) => (
              <div
                key={som.id}
                className="mr-4 flex flex-col items-center rounded-xl bg-white pl-8 pr-8 pt-4 pb-4 shadow-md shadow-purple-800"
              >
                <img src="" alt="" className="h-14 w-14" />
                <p className={`mt-2 text-${som.color}-400 font-bold`}>
                  {som.price}
                </p>
                <p className="text-gray-800">{som.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[40%]">
          <img src="" alt="" />
        </div>
      </section>

      <section className="flex h-full w-full pt-16 pb-16 md:pr-[10%] md:pl-[10%]">
        <div className="flex-1">
          <p>some image</p>
        </div>

        <div className="flex-1 ">
          <h2 className="text-4xl font-bold">
            Benefit from our online learning
          </h2>

          <div className="mt-11">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="mt-3 mb-3 flex">
                <img src="" className="h-11 w-11 rounded-full" alt="" />

                <div className="ml-3">
                  <h5 className="font-bold">{benefit.title}</h5>
                  <p className="text-gray-500">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex h-full w-full flex-col pt-16 pb-16 md:pr-[10%] md:pl-[10%]">
        <div className="mr-auto ml-auto flex w-1/2 flex-col">
          <h2 className="text-center text-4xl font-bold">
            Our Popular Courses
          </h2>
          <p className="mt-8 mb-8 text-center text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
            expedita repellendus, culpa dolorum eos veritatis quo vero ea.
          </p>
        </div>

        <div className="flex">
          {courses.map((course) => (
            <div key={course.id} className="m-3 w-1/3 rounded-xl p-2 shadow-md">
              <img src="" alt="" />

              <div className="mt-2 mb-2 flex">
                <p className="mr-auto rounded-2xl bg-purple-200 pt-1 pb-1 pr-3 pl-3 text-purple-600">
                  {course.category}
                </p>

                <p className="rounded-3xl bg-purple-700 pr-5 pl-5 pt-1 pb-1 text-white">
                  {course.star}
                </p>
              </div>

              <p className="font-bold">{course.title}</p>

              <div className="mt-2 mb-2 flex">
                <div className="mr-auto flex items-center">
                  <AiFillPlayCircle color="purple" size={20} />
                  <p className="ml-2">10 Lessons</p>
                </div>

                <div className="flex items-center">
                  <AiFillCamera color="purple" size={20} />
                  <p className="ml-2">Online Class</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-full w-full pt-16 pb-16 md:pr-[10%] md:pl-[10%]">
        <div className="flex-1">
          <h2 className="text-4xl font-bold">Become an instructor</h2>
          <p className="mt-8 mb-8 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
            expedita repellendus, culpa dolorum eos veritatis quo vero ea
            exercitationem error deserunt consectetur.
          </p>
          <p className="mt-8 mb-8 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
            expedita repellendus, culpa dolorum eos veritatis quo vero ea exer.
          </p>
        </div>

        <div className="flex-1">
          <img src="" alt="" />
        </div>
      </section>

      <section className="flex h-full flex-col rounded-full bg-purple-200 pt-16 pb-16 md:mr-[5%] md:ml-[5%]">
        <div className="mr-auto ml-auto flex w-1/2 flex-col">
          <h2 className="text-center text-4xl font-bold">Our innovation</h2>
          <p className="mt-8 mb-8 text-center text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
            expedita repellendus, culpa dolorum eos veritatis quo vero ea.
          </p>
        </div>

        <div>
          {some.map((som) => (
            <div>
              <p>asf;amsf iasfhas f</p>
            </div>
          ))}
          <p>lsit items</p>
        </div>
      </section>
    </Layout>
  );
};

export default Eduo;
