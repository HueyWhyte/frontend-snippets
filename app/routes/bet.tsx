import { FiBell, FiHome, FiSettings } from "react-icons/fi";

const Bet = () => {
  return (
    <main className="flex w-full h-screen ">
      <nav className="w-14 flex flex-col items-center bg-red-200">
        <FiHome />
        <FiSettings />
      </nav>

      <section className="w-[21%] flex flex-col bg-yellow-200 mx-1 p-1">
        section1
      </section>

      <section className="flex-1 flex flex-col bg-blue-200">section2</section>

      <section className="w-[21%] flex flex-col m-1">
        <div className="flex items-center my-3 ml-5">
          <FiBell />

          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
            className="rounded-full w-10 h-10 mx-2 ml-5"
          />

          <div className="">
            <p className="text-sm">John Doe Awesome</p>
            <p className="font-bold text-gray-600">GH 35.56</p>
          </div>
        </div>

        <div className="bg-gray-100 p-2 rounded-lg h-full">
          <h3>Invoice for payment</h3>
        </div>
      </section>
    </main>
  );
};

export default Bet;
