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
    <div className="crypto-container flex h-screen w-screen bg-[#21212a] text-gray-400">
      <section className="flex h-full w-72 flex-col border-r  border-r-gray-600 pl-8">
        <div className="mt-3 flex h-14 items-center text-xl  font-bold">
          <img
            src="https://www.freepnglogos.com/uploads/-d-logo-png-5.png"
            alt=""
            className="mr-4 h-9 w-9 rounded-full bg-pink-200 object-cover p-2"
          />

          <p>ManyCrypto</p>
        </div>

        <p className="mt-20 mb-5">MENU</p>
        <Link to="/" className="flex items-center pb-2 text-xl">
          <FiHome size={25} />
          <p className="p-2">Dashboard</p>
        </Link>

        <Link to="/" className="flex items-center pb-2 text-xl">
          <IoIosWallet size={25} />
          <p className="p-2">Wallet</p>
        </Link>

        <Link to="/" className="flex items-center pb-2 text-xl">
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

        <Link to="/" className="flex items-center pb-2 text-xl">
          <IoIosPaper size={25} />
          <p className="p-2">News</p>
        </Link>

        <p className="mt-10 mb-5">OTHERS</p>
        <Link to="/" className="flex items-center pb-2 text-xl">
          <FiHelpCircle size={25} />
          <p className="p-2">Help</p>
        </Link>

        <Link to="/" className="flex items-center pb-2 text-xl">
          <FiSettings size={25} />
          <p className="p-2">Settings</p>
        </Link>
      </section>

      <section className="flex h-full flex-1 flex-col">
        <div className="mx-4 mt-3 flex h-14 items-center rounded-xl bg-[#191921] px-5 text-xl shadow-xl">
          <FiSearch size={23} />
          <motion.input
            // whileFocus={{ backgroundColor: "#2c4cff" }}
            type="text"
            name="search"
            id="search"
            placeholder="Search Crypto currency, new, etc..."
            className="h-full flex-1 bg-transparent px-5 outline-none "
          />
        </div>

        <section className="mx-4 mt-3 flex flex-col rounded-xl bg-[#191921] p-5 shadow-xl ">
          <p className="text-2xl font-bold text-white">Total Balance</p>

          <div className="w-ful mt-4 flex">
            <div className="mr-3 flex-1">
              <p>My Balance</p>
              <h2 className="my-3 text-5xl text-white">$932,128.00</h2>
              <p>19.3523523 BTC</p>
            </div>

            <div className="mx-6 flex w-[22%] flex-col">
              <div className="flex items-center">
                <img src={eth} alt="" className="h-11 w-11" />

                <div className="mr-auto px-3">
                  <p className="text-xl font-bold text-white">$1,331.00</p>
                  <p>Income</p>
                </div>
              </div>

              <motion.p
                whiteTap={{}}
                whileHover={{ backgroundColor: "#1e7cf7" }}
                className="mt-auto cursor-pointer rounded-lg bg-blue-600 py-3 text-center font-bold text-white shadow-sm shadow-blue-600"
              >
                RECEIVE
              </motion.p>
            </div>

            <div className="flex w-[22%] flex-col">
              <div className="flex items-center">
                <img src={btc} alt="" className="h-11 w-11" />

                <div className="mr-auto px-3">
                  <p className="text-xl font-bold text-white">$234.00</p>
                  <p>Expense</p>
                </div>
              </div>

              <motion.p
                whiteTap={{}}
                whileHover={{ backgroundColor: "#00cea1" }}
                className="mt-auto cursor-pointer rounded-lg bg-teal-500 py-3 text-center font-bold text-white shadow-sm shadow-teal-500"
              >
                SEND
              </motion.p>
            </div>
          </div>
        </section>

        <section className="mx-4 mt-3 flex flex-col rounded-xl bg-[#191921] p-5 shadow-xl ">
          <p className="text-2xl font-bold text-white">Watchlist</p>

          <div className="scrollbar mt-4 flex overflow-x-auto">
            <div className="mr-6 w-[43%]">
              <div className="mb-3 flex items-center">
                <img src={btc} className="h-6 w-6" alt="" />
                <p className="mx-3 font-bold text-white">Bitcoin</p>
                <p>BTC</p>
              </div>

              <div className="flex rounded-xl bg-[#21212ab6]">
                <div className="m-3 ml-auto rounded-xl bg-[#2b2b36] py-2 px-6">
                  <p className="text-xl font-bold text-white ">$43,577.00</p>
                  <p className="text-center text-green-400">+0.29%</p>
                </div>
              </div>
            </div>

            <div className="mr-6 w-[43%]">
              <div className="mb-3 flex items-center">
                <img src={eth} className="h-6 w-6" alt="" />
                <p className="mx-3 font-bold text-white">Ethereum</p>
                <p>ETH</p>
              </div>

              <div className="flex rounded-xl bg-[#21212ab6]">
                <div className="m-3 ml-auto rounded-xl bg-[#2b2b36] py-2 px-6">
                  <p className="text-xl font-bold text-white ">$43,577.00</p>
                  <p className="text-center text-red-400">-0.15%</p>
                </div>
              </div>
            </div>

            <div className="w-[43%]">
              <div className="mb-3 flex items-center">
                <img src={doge} className="h-6 w-6" alt="" />
                <p className="mx-3 font-bold text-white">Dogecoin</p>
                <p>DOGE</p>
              </div>

              <div className="flex rounded-xl bg-[#21212ab6]">
                <div className="m-3 ml-auto rounded-xl bg-[#2b2b36] py-2 px-6">
                  <p className="text-xl font-bold text-white ">$43,577.00</p>
                  <p className="text-center text-red-400">-0.15%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-3 mx-4 h-20 flex-1 rounded-xl bg-[#191921] p-5 shadow-xl ">
          <p className="text-2xl font-bold text-white">Statistics</p>

          <Line options={options} data={data} height="70" />
        </section>
      </section>

      <section className="flex h-full w-96 flex-col">
        <div className="mr-11 mt-3 flex h-14 items-center justify-end">
          <FiBell size={20} />

          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
            className="mx-5 h-11 w-11 rounded-full object-cover"
          />

          <FiArrowDown size={20} />
        </div>

        <div className="mx-2 mt-3 flex h-11">
          <p className="flex-1 rounded-t-xl bg-[#191921] py-3 text-center font-bold text-white">
            Buy
          </p>
          <p className="flex-1 bg-transparent py-3 text-center font-bold">
            Sell
          </p>
        </div>

        <div className="m-2 mt-0 flex flex-1 flex-col rounded-b-xl bg-[#191921] shadow-xl ">
          <div className="m-2 flex flex-1 flex-col bg-[#191921] p-4 ">
            <div className="my-1 flex items-center justify-between rounded-lg border border-solid border-gray-700 p-2">
              <div>
                <p>Bitcoin Price</p>

                <div className="flex items-center">
                  <img src={btc} className="h-6 w-6" alt="" />
                  <p className="mx-3 font-bold text-white">Bitcoin</p>
                  <p>BTC</p>
                </div>
              </div>

              <FiArrowDown size={20} />
            </div>

            <div className="my-1 flex items-center justify-between rounded-lg border border-solid border-gray-700 p-2">
              <div>
                <p>Amount</p>

                <p className="font-bold text-white ">$8783.20</p>
              </div>

              <div className="flex items-center">
                <p>USD</p>
                <FiArrowDown size={20} />
              </div>
            </div>

            <div className="my-1 flex items-center justify-between rounded-lg border border-solid border-gray-700 p-2">
              <div>
                <p>Amount</p>

                <p className="font-bold text-white">0.13871821</p>
              </div>

              <div className="flex items-center">
                <p>BTC</p>
                <FiArrowDown size={20} />
              </div>
            </div>

            <motion.p
              whiteTap={{}}
              whileHover={{ backgroundColor: "#1e7cf7" }}
              className="mt-auto cursor-pointer rounded-lg bg-blue-600 py-4 text-center font-bold text-white shadow-sm shadow-blue-600"
            >
              Buy BTC
            </motion.p>
          </div>
        </div>

        <div className="scrollbar m-2 flex flex-1 flex-col overflow-y-hidden rounded-xl bg-[#191921] p-4 shadow-xl">
          <p className="mb-2 text-lg font-bold text-white">My Portfolio</p>
          {histories.map((history) => (
            <div key={history.id} className="my-3 flex items-center">
              <img src={history.icon} className="h-9 w-9" alt="" />

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
