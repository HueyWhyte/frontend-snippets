import { Link } from "react-router-dom";
import {
  FiHome,
  FiSettings,
  FiHelpCircle,
  FiArrowDown,
  FiBell,
  FiSearch,
} from "react-icons/fi";
import { IoIosPaper, IoIosWallet, IoIosStats } from "react-icons/io";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { bnb, btc, doge, eth } from "../assets/icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

//  {
//             label: "Rainfall",
//             fill: false,
//             lineTension: 0.5,
//             backgroundColor: "rgba(75,192,192,1)",
//             borderColor: "rgba(0,0,0,1)",
//             borderWidth: 2,
//             data: [65, 59, 80, 81, 56],
//           },
export const data = {
  labels: ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
  datasets: [
    {
      label: "Dataset 1",
      data: [40, 33, 20, 43, 21, 45, 44],
      borderColor: "rgb(229, 253, 94)",
      lineTension: 0.5,
      fill: "origin",
      backgroundColor: "rgba(196, 250, 0, 0.5)",
    },
  ],
};

export default function CryptoDashboard() {
  return (
    <div className="flex bg-[#21212a] w-screen h-screen text-gray-400 crypto-container">
      <section className="w-72 h-full flex flex-col pl-8  border-r border-r-gray-600">
        <div className="flex items-center h-14 text-xl font-bold  mt-3">
          <img
            src="https://www.freepnglogos.com/uploads/-d-logo-png-5.png"
            alt=""
            className="h-9 w-9 mr-4 bg-pink-200 p-2 rounded-full object-cover"
          />

          <p>ManyCrypto</p>
        </div>

        <p className="mt-20 mb-5">MENU</p>
        <Link to="/" className="flex text-xl items-center pb-2">
          <FiHome size={25} />
          <p className="p-2">Dashboard</p>
        </Link>

        <Link to="/" className="flex text-xl items-center pb-2">
          <IoIosWallet size={25} />
          <p className="p-2">Wallet</p>
        </Link>

        <Link to="/" className="flex text-xl items-center pb-2">
          <IoIosStats size={25} />
          <p className="p-2">Statistics</p>
        </Link>

        {/* <Link to="/" className="flex text-xl items-center pb-2">
          <FiHome size={25} />
          <p className="p-2">Transactions</p>
        </Link>

        <Link to="/" className="flex text-xl items-center pb-2">
          <FiHome size={25} />
          <p className="p-2">Exchenge</p>
        </Link> */}

        <Link to="/" className="flex text-xl items-center pb-2">
          <IoIosPaper size={25} />
          <p className="p-2">News</p>
        </Link>

        <p className="mt-10 mb-5">OTHERS</p>
        <Link to="/" className="flex text-xl items-center pb-2">
          <FiHelpCircle size={25} />
          <p className="p-2">Help</p>
        </Link>

        <Link to="/" className="flex text-xl items-center pb-2">
          <FiSettings size={25} />
          <p className="p-2">Settings</p>
        </Link>
      </section>

      <section className="flex flex-col flex-1 h-full">
        <div className="flex items-center h-14 text-xl px-5 rounded-xl mt-3 bg-[#191921] mx-4 shadow-xl">
          <FiSearch size={23} />
          <motion.input
            // whileFocus={{ backgroundColor: "#2c4cff" }}
            type="text"
            name="search"
            id="search"
            placeholder="Search Crypto currency, new, etc..."
            className="bg-transparent flex-1 px-5 h-full outline-none "
          />
        </div>

        <section className="flex flex-col mt-3 bg-[#191921] mx-4 shadow-xl rounded-xl p-5 ">
          <p className="font-bold text-white text-2xl">Total Balance</p>

          <div className="flex mt-4 w-ful">
            <div className="flex-1 mr-3">
              <p>My Balance</p>
              <h2 className="text-5xl text-white my-3">$932,128.00</h2>
              <p>19.3523523 BTC</p>
            </div>

            <div className="flex flex-col w-[22%] mx-6">
              <div className="flex items-center">
                <img src={eth} alt="" className="w-11 h-11" />

                <div className="px-3 mr-auto">
                  <p className="text-white font-bold text-xl">$1,331.00</p>
                  <p>Income</p>
                </div>
              </div>

              <motion.p
                whiteTap={{}}
                whileHover={{ backgroundColor: "#1e7cf7" }}
                className="bg-blue-600 rounded-lg py-3 text-center text-white font-bold mt-auto cursor-pointer shadow-sm shadow-blue-600"
              >
                RECEIVE
              </motion.p>
            </div>

            <div className="flex flex-col w-[22%]">
              <div className="flex items-center">
                <img src={btc} alt="" className="w-11 h-11" />

                <div className="px-3 mr-auto">
                  <p className="text-white font-bold text-xl">$234.00</p>
                  <p>Expense</p>
                </div>
              </div>

              <motion.p
                whiteTap={{}}
                whileHover={{ backgroundColor: "#00cea1" }}
                className="bg-teal-500 rounded-lg py-3 text-center text-white font-bold mt-auto cursor-pointer shadow-sm shadow-teal-500"
              >
                SEND
              </motion.p>
            </div>
          </div>
        </section>

        <section className="flex flex-col mt-3 bg-[#191921] mx-4 shadow-xl rounded-xl p-5 ">
          <p className="font-bold text-white text-2xl">Watchlist</p>

          <div className="flex mt-4 overflow-x-auto scrollbar">
            <div className="w-[43%] mr-6">
              <div className="flex items-center mb-3">
                <img src={btc} className="w-6 h-6" alt="" />
                <p className="text-white font-bold mx-3">Bitcoin</p>
                <p>BTC</p>
              </div>

              <div className="flex bg-[#21212ab6] rounded-xl">
                <div className="ml-auto bg-[#2b2b36] m-3 py-2 px-6 rounded-xl">
                  <p className="text-white font-bold text-xl ">$43,577.00</p>
                  <p className="text-green-400 text-center">+0.29%</p>
                </div>
              </div>
            </div>

            <div className="w-[43%] mr-6">
              <div className="flex items-center mb-3">
                <img src={eth} className="w-6 h-6" alt="" />
                <p className="text-white font-bold mx-3">Ethereum</p>
                <p>ETH</p>
              </div>

              <div className="flex bg-[#21212ab6] rounded-xl">
                <div className="ml-auto bg-[#2b2b36] m-3 py-2 px-6 rounded-xl">
                  <p className="text-white font-bold text-xl ">$43,577.00</p>
                  <p className="text-red-400 text-center">-0.15%</p>
                </div>
              </div>
            </div>

            <div className="w-[43%]">
              <div className="flex items-center mb-3">
                <img src={doge} className="w-6 h-6" alt="" />
                <p className="text-white font-bold mx-3">Dogecoin</p>
                <p>DOGE</p>
              </div>

              <div className="flex bg-[#21212ab6] rounded-xl">
                <div className="ml-auto bg-[#2b2b36] m-3 py-2 px-6 rounded-xl">
                  <p className="text-white font-bold text-xl ">$43,577.00</p>
                  <p className="text-red-400 text-center">-0.15%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex-1 my-3 bg-[#191921] mx-4 shadow-xl rounded-xl p-5 h-20 ">
          <p className="font-bold text-white text-2xl">Statistics</p>

          <Line options={options} data={data} height="70" />
        </section>
      </section>

      <section className="flex flex-col w-96 h-full">
        <div className="flex h-14 items-center justify-end mr-11 mt-3">
          <FiBell size={20} />

          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
            className="h-11 w-11 mx-5 rounded-full object-cover"
          />

          <FiArrowDown size={20} />
        </div>

        <div className="flex h-11 mx-2 mt-3">
          <p className="flex-1 text-white text-center font-bold bg-[#191921] py-3 rounded-t-xl">
            Buy
          </p>
          <p className="flex-1 text-center font-bold bg-transparent py-3">
            Sell
          </p>
        </div>

        <div className="flex flex-col flex-1 m-2 mt-0 bg-[#191921] rounded-b-xl shadow-xl ">
          <div className="flex flex-col flex-1 m-2 bg-[#191921] p-4 ">
            <div className="flex justify-between items-center border-solid border border-gray-700 rounded-lg p-2 my-1">
              <div>
                <p>Bitcoin Price</p>

                <div className="flex items-center">
                  <img src={btc} className="w-6 h-6" alt="" />
                  <p className="text-white font-bold mx-3">Bitcoin</p>
                  <p>BTC</p>
                </div>
              </div>

              <FiArrowDown size={20} />
            </div>

            <div className="flex justify-between items-center border-solid border border-gray-700 rounded-lg p-2 my-1">
              <div>
                <p>Amount</p>

                <p className="text-white font-bold ">$8783.20</p>
              </div>

              <div className="flex items-center">
                <p>USD</p>
                <FiArrowDown size={20} />
              </div>
            </div>

            <div className="flex justify-between items-center border-solid border border-gray-700 rounded-lg p-2 my-1">
              <div>
                <p>Amount</p>

                <p className="text-white font-bold">0.13871821</p>
              </div>

              <div className="flex items-center">
                <p>BTC</p>
                <FiArrowDown size={20} />
              </div>
            </div>

            <motion.p
              whiteTap={{}}
              whileHover={{ backgroundColor: "#1e7cf7" }}
              className="bg-blue-600 rounded-lg py-4 text-center text-white font-bold mt-auto cursor-pointer shadow-sm shadow-blue-600"
            >
              Buy BTC
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col flex-1 m-2 bg-[#191921] rounded-xl p-4 shadow-xl overflow-y-hidden scrollbar">
          <p className="font-bold text-white text-lg mb-2">My Portfolio</p>
          {histories.map((history) => (
            <div key={history.id} className="flex items-center my-3">
              <img src={history.icon} className="w-9 h-9" alt="" />

              <div className="ml-2">
                <p className="font-bold text-white">{history.name}</p>
                <p>{history.ini}</p>
              </div>

              <div className="ml-auto flex flex-col items-end">
                <p className="font-bold text-white">
                  {history.ini} 0.1547252847
                </p>
                <p>$611.453</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const histories = [
  {
    id: 1,
    name: "Bitcoin",
    ini: "BTC",
    icon: btc,
  },
  {
    id: 2,
    name: "Ethereum",
    ini: "ETH",
    icon: eth,
  },
  {
    id: 3,
    name: "Dogecoin",
    ini: "DOGE",
    icon: doge,
  },
  {
    id: 3,
    name: "Binance",
    ini: "BNB",
    icon: bnb,
  },
];
