import { Link, MetaFunction } from "remix";
import Layout from "~/components/eduo/Layout";
import { AiFillPlayCircle, AiFillCamera } from "react-icons/ai";

const pros = [
  { id: 1, title: "Schools", price: "16,032", color: "green" },
  { id: 2, title: "Users", price: "10M", color: "red" },
  { id: 3, title: "Contries", price: "119", color: "purple" },
];
const some = [
  {
    id: 1,
    title: "Hours Freed",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: 2,
    title: "Real-Time Intellligence",
    img: "https://images.unsplash.com/photo-1598986119545-ea2701477e93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80",
  },
  {
    id: 3,
    title: "Student Centered",
    img: "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
  },
  {
    id: 4,
    title: "Mastery Focued",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 5,
    title: "Any Platform",
    img: "https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 6,
    title: "Million of Resources",
    img: "https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

const courses = [
  {
    id: 1,
    title: "Master English: How to Improve your English Speaking",
    price: "16,032",
    color: "green",
    star: "4.6",
    category: "English Speaking",
    img: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    id: 2,
    title: "Intermediate: Zero to Hero Website Development",
    price: "10M",
    color: "red",
    star: "5.0",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    title: "Expert Web Developer: Full-Stack Laravel Expert",
    price: "119",
    color: "blue",
    star: "4.2",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80",
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

export const meta: MetaFunction = () => {
  return {
    title: "Eduo",
    description: "",
  };
};

const Eduo = () => {
  return (
    <Layout>
      <section className="flex h-full w-full flex-col bg-purple-600 pt-16 pb-16 text-white md:flex-row md:pr-[10%] md:pl-[10%]">
        <div className="flex w-full flex-col p-3 md:w-[60%]">
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

          <div className="mt-20 flex justify-between md:justify-start">
            {pros.map((pro) => (
              <div
                key={pro.id}
                className="flex w-[30%] flex-col items-center rounded-xl bg-white pt-4 pb-4 shadow-md shadow-purple-800 md:mr-8 md:w-[20%] md:pl-8 md:pr-8"
              >
                <svg
                  className={`h-14 w-14 rounded-full bg-${pro.color}-200 p-3 text-${pro.color}-400`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>

                <p className={`mt-2 text-${pro.color}-400 font-bold`}>
                  {pro.price}
                </p>
                <p className="text-gray-800">{pro.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex md:w-[40%]">
          <img
            src="https://i.pinimg.com/originals/f4/23/20/f42320bb91db89d78fa7cf7e47f7da82.png"
            alt=""
            className="h-full"
          />
        </div>
      </section>

      <section className="flex h-full w-full flex-col-reverse p-3 pt-16 pb-16 md:flex-row md:pr-[10%] md:pl-[10%]">
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
                <svg
                  className="h-11 w-11"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>

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
        <div className="mr-auto ml-auto flex flex-col md:w-1/2">
          <h2 className="text-center text-4xl font-bold">
            Our Popular Courses
          </h2>
          <p className="mt-8 mb-8 text-center text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
            expedita repellendus, culpa dolorum eos veritatis quo vero ea.
          </p>
        </div>

        <div className="flex flex-wrap">
          {courses.map((course) => (
            <div
              key={course.id}
              className="m-3 w-full rounded-xl p-2 shadow-md md:ml-auto md:mr-auto md:w-[30%]"
            >
              <img
                src={course.img}
                alt=""
                className="h-60 w-full rounded-md object-cover"
              />

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

      <section className="flex h-full w-full flex-col p-2 pt-16 pb-16 md:flex-row md:pr-[10%] md:pl-[10%]">
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

          <button className="rounded-md bg-white pt-2 pb-2 pl-4 pr-4 font-semibold shadow-sm shadow-purple-600 transition-all duration-200 hover:bg-purple-600 hover:text-white">
            Click Here to Apply
          </button>
        </div>

        <div className="flex-1">
          <img
            className="mt-8 rounded-lg"
            src="https://th.bing.com/th/id/OIP.2_6eG8f4NDpqC3vguiA4DAHaIH?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
      </section>

      <section className="flex h-full flex-col bg-purple-200 p-4 md:mr-[5%] md:ml-[5%] md:rounded-3xl md:p-16">
        <div className="mr-auto ml-auto flex flex-col md:w-1/2">
          <h2 className="mt-6 text-center text-4xl font-bold md:mt-0">
            Our innovation
          </h2>
          <p className="mt-8 mb-8 text-center text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
            expedita repellendus, culpa dolorum eos veritatis quo vero ea.
          </p>
        </div>

        <div className="felx-wrap flex w-full flex-col flex-wrap justify-between md:flex-row">
          {some.map((som) => (
            <div
              key={som.id}
              className="m-4 flex flex-col items-center justify-center rounded-2xl bg-white p-4 md:w-[30%]"
            >
              <img src={som.img} alt="" className="h-40 w-full object-cover" />
              <p className="mt-4 mb-4 text-xl font-bold">{som.title}</p>

              <button className="rounded-md bg-purple-700 pt-2 pb-2 pl-4 pr-4 text-white hover:bg-purple-600">
                Show me
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 mb-10 ml-auto mr-auto flex flex-col items-center justify-center p-5 md:w-4/5">
        <h2 className="mt-4 text-center text-4xl font-bold">
          Student Testimonials
        </h2>

        <p className="mt-4 mb-9 text-center">
          Lorem ipsum dolor sit amet consectetur laudantium <br /> adipisicing
          elit. Molestiae expedita
        </p>

        <div className="mr-auto ml-auto flex flex-col md:flex-row">
          <img src="" alt="" />

          <div className="mr-auto ml-auto rounded-[45px] border border-purple-800 p-6 md:w-2/3">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              enim, <br /> similique quam, in expedita soluta cumque aliquid,
              officiis porro ut architecto veritatis quisquam laudantium? Ullam.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
                className="h-20 w-20 rounded-full object-cover"
              />
              <p className="text-xl font-bold">Jon Doe</p>
              <p>Student</p>
            </div>
          </div>

          <img src="" alt="" />
        </div>
      </section>

      <section className="mt-10 mb-10 flex w-full flex-col items-center justify-center rounded-3xl border-t-2 border-purple-900 p-3 md:w-3/4 md:p-5">
        <h2 className="mt-4 text-center text-4xl font-bold">Get In Touch</h2>

        <p className="mt-4 mb-4 text-center">
          Lorem ipsum dolor sit amet consectetur laudantium <br /> adipisicing
          elit. Molestiae expedita
        </p>

        <div className="flex w-[98%] items-center justify-center rounded-2xl border border-purple-900 bg-slate-200 p-1 md:w-4/5">
          <input
            type="text"
            className="flex-1 rounded-2xl bg-transparent pt-3 pb-3 pl-2 pr-2 outline-none md:mr-2 md:pl-7 md:pr-7"
            placeholder="Enter your email address"
          />
          <button className="rounded-xl bg-purple-700 p-3 font-bold text-white hover:bg-purple-600 md:pt-5 md:pb-5 md:pl-8 md:pr-8">
            Subscribe
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Eduo;
