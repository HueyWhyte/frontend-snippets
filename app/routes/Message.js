import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiPlus, FiMenu, FiSend } from "react-icons/fi";

import chats from "../assets/tweets";

export default function Message() {
  let param = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    let res = chats.filter((chat) => chat.id === param.userId);

    setUser(res[0]);
  }, [param.userId]);

  console.log(user);
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="flex items-center my-1 border-b border-gray-100 border-solid py-2">
          <img
            src={user.profile ? user.profile : user.image}
            alt=""
            className="object-cover w-16 h-16 rounded-full mr-2"
          />
          <div className="flex flex-col flex-1">
            <h3 className="font-bold text-xl">{user?.username}</h3>
            <p className="text-gray-500">Online</p>
          </div>
        </div>

        <FiMenu size={27} color="gray" />
      </section>

      {/* messages area */}
      <section className="flex flex-col flex-1 overflow-y-scroll scrollbar">
        {MESSAGES.map((message) => (
          <div
            className="flex flex-col rounded-t-2xl m-2 p-3 shadow-md"
            style={{
              backgroundColor: message?.sender === 1 ? "#af0083" : "white",
              marginLeft: message?.sender === 1 ? "auto" : 8,
              marginRight: !message?.sender === 1 ? "auto" : 8,
              borderBottomLeftRadius: message?.sender === 1 ? 18 : 3,
              borderBottomRightRadius: !message?.sender === 1 ? 18 : 3,
              maxWidth: "65%",
            }}
          >
            <p
              className="font-bold"
              style={{
                color: message?.sender === 1 ? "white" : "black",
              }}
            >
              {message.message}
            </p>

            {message.image !== "" ? (
              <img
                src={`${message.image}`}
                alt=""
                className="w-full rounded-2xl my-2"
              />
            ) : null}

            <aside
              className="text-gray-400"
              style={{
                marginLeft: message?.sender === 1 ? "auto" : "black",
              }}
            >
              {message.createdAt}
            </aside>
          </div>
        ))}
      </section>

      {/* message input field */}
      <section className="flex items-center bottom-0 h-16 p-1 rounded-full bg-white shadow-lg">
        <FiPlus
          size={30}
          color="purple"
          className="bg-pink-200 rounded-full mx-3"
        />
        <input
          type="text"
          placeholder="Type a message here..."
          className="px-2 flex-1 outline-none bg-transparent"
        />
        😃
        <FiSend
          size={30}
          color="blue"
          className="mx-4 bg-blue-200 rounded-full p-1"
        />
      </section>
    </>
  );
}

const MESSAGES = [
  {
    id: 1,
    message:
      "As it so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant expense.",
    sender: "1",
    createdAt: "1:03PM",
    image: "",
  },
  {
    id: 2,
    message: "Merits ye if mr narrow points. Melancholy",
    sender: "",
    createdAt: "1:03PM",
    image: "",
  },
  {
    id: 7,
    message:
      "Mr oh winding it enjoyed by between. The servants securing material goodness her",
    sender: "",
    createdAt: "5:15PM",
    image: "",
  },
  {
    id: 3,
    message: "Do greatest at in learning steepest. Breakfast extremity",
    sender: "1",
    createdAt: "5:44PM",
    image: "",
  },
  {
    id: 4,
    message: "Civility vicinity graceful is it at. 😃",
    sender: "",
    createdAt: "7:20PM",
    image:
      "https://images.unsplash.com/photo-1573515159471-0eb7ec72912c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 5,
    message: "Sure",
    sender: "1",
    createdAt: "7:21PM",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 6,
    message:
      "Shy resolution instrument unreserved man few. She did open find pain some out. If we landlord stanhill mr whatever pleasure supplied concerns so. Exquisite by it admitting cordially september newspaper an. Acceptance middletons am it favourable. It it oh happen lovers afraid.",
    sender: "",
    createdAt: "8:00PM",
    image: "",
  },
];
