import { Link, Outlet } from "react-router-dom";
import { FiHome, FiCalendar, FiSettings, FiUserPlus } from "react-icons/fi";
import {
  add,
  docFile,
  downArrow,
  download,
  emoji,
  folder,
  jpgFile,
  musicFile,
  pdfFile,
  search,
  star,
  upArrow,
  warning,
  zip,
} from ".././assets/icons";
import chats from "../assets/tweets";

export default function Chat() {
  return (
    <main className="flex bg-blue-600 w-full h-screen">
      <section className="w-1/12 flex flex-col items-center pt-9 ml-3">
        <img src={emoji} alt="" className="h-11 mr-2 mb-36" />

        <FiHome color="white" size={30} className="my-10" />

        <FiCalendar color="white" size={30} className="my-7" />

        <FiUserPlus color="white" size={30} className="my-7" />

        <FiSettings color="white" size={30} className="my-7" />
      </section>

      <section className="flex flex-1 bg-gray-100 rounded-3xl m-3 p-3">
        <div className="flex flex-col flex-1 rounded-3xl shadow-lg mr-3 p-3 bg-white">
          <div className="flex h-20 items-center border border-dashed border-gray-400 rounded-full p-2">
            <img src={add} alt="" className="h-8 mr-3 ml-3" />
            <p className="font-bold text-xl">Create New</p>
          </div>

          <div className="flex-1 overflow-y-scroll rounded-3xl mt-3 scrollbar">
            <p className="font-bold text-4xl mb-3">Chat</p>

            <div className="flex bg-gray-200 rounded-3xl p-3 items-center">
              <input
                className="flex-1 outline-none bg-transparent px-1"
                type="text"
                placeholder="Search Name"
              />
              <img src={search} alt="" className="h-5 mr-3 ml-3" />
            </div>

            {chats.map((chat) => (
              <Link
                to={`/chat/${chat.id}`}
                className="flex items-center my-1 border-b border-gray-100 border-solid py-2"
              >
                <img
                  src={chat.profile ? chat.profile : chat.image}
                  alt=""
                  className="object-cover w-16 h-16 rounded-full mr-2"
                />
                <div className="flex flex-col flex-1">
                  <p className="font-bold text-xl">{chat.username}</p>
                  <p className="text-gray-500 ml-auto">20min ago</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-8/12  flex flex-col rounded-3xl mr-3 p-3">
          <Outlet />
        </div>
      </section>

      <section className="w-1/5 flex flex-col bg-gray-100 rounded-3xl m-3 p-3">
        <div className="flex flex-col items-center mt-7">
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
            className="rounded-full w-24 h-24"
          />
          <h3 className="font-bold text-xl">John Doe Awesome</h3>
          <p className="text-gray-600">CEO @AppDeity</p>
        </div>

        <div className="flex items-center justify-between bg-yellow-100 p-2 mt-9 mb-3 rounded-full">
          <img
            src={star}
            alt=""
            className="h-11 mr-2 bg-white rounded-3xl p-3"
          />
          <p className="font-bold mr-auto">Starred Messages</p>
          <img src={downArrow} alt="" className="h-4 mr-2 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between bg-pink-100 p-2 mb-5 mt-4 rounded-full">
          <img
            src={jpgFile}
            alt=""
            className="h-11 mr-2 bg-white rounded-3xl p-3"
          />
          <p className="font-bold mr-auto">Media(45)</p>
          <img src={downArrow} alt="" className="h-4 mr-2 cursor-pointer" />
        </div>

        {/* group list */}
        <div className="flex items-center justify-between bg-blue-100 p-2 mt-2 rounded-t-3xl">
          <img
            src={folder}
            alt=""
            className="h-11 mr-2 bg-white rounded-3xl p-3"
          />
          <p className="font-bold mr-auto">Files & Docs(8)</p>
          <img src={upArrow} alt="" className="h-4 mr-2 cursor-pointer" />
        </div>
        <div className="flex items-center justify-between bg-blue-100 p-2">
          <img
            src={musicFile}
            alt=""
            className="h-11 mr-2 bg-white rounded-3xl p-3"
          />
          <p
            className="mr-auto overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
              WebkitLineClamp: 1,
            }}
          >
            DaBaby - Brother's Keeper.mp3
          </p>
          <img src={download} alt="" className="h-4 mr-2 cursor-pointer" />
        </div>
        <div className="flex items-center justify-between bg-blue-100 p-2">
          <img
            src={zip}
            alt=""
            className="h-11 mr-2 bg-white rounded-3xl p-3"
          />
          <p className="mr-auto">Mockup Design.zip</p>
          <img src={download} alt="" className="h-4 mr-2 cursor-pointer" />
        </div>
        <div className="flex items-center justify-between bg-blue-100 p-2">
          <img
            src={pdfFile}
            alt=""
            className="h-11 mr-2 bg-white rounded-3xl p-3"
          />
          <p className="mr-auto">Lecture Note-3.pdf</p>
          <img src={download} alt="" className="h-4 mr-2 cursor-pointer" />
        </div>
        <div className="flex items-center justify-between bg-blue-100 p-2 rounded-b-3xl">
          <img
            src={docFile}
            alt=""
            className="h-11 mr-2 bg-white rounded-3xl p-3"
          />
          <p className="mr-auto">Resume.docx</p>
          <img src={download} alt="" className="h-4 mr-2 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between bg-red-100 p-2 mt-auto rounded-full">
          <img
            src={warning}
            alt=""
            className="h-11 mr-2 bg-white rounded-3xl p-3"
          />
          <p className="font-bold mr-auto">Information</p>
          <img src={downArrow} alt="" className="h-4 mr-2 cursor-pointer" />
        </div>
      </section>
    </main>
  );
}
