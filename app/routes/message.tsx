import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiPlus, FiMenu, FiSend } from "react-icons/fi";

import chats from "../assets/tweets";

const Message = () => {
  let param = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    let res = chats.filter((chat) => chat.id === param.userId);

    setUser(res[0]);
  }, [param.userId]);

  console.log(user);
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="my-1 flex items-center border-b border-solid border-gray-100 py-2">
          <img
            src={user.profile ? user.profile : user.image}
            alt=""
            className="mr-2 h-16 w-16 rounded-full object-cover"
          />
          <div className="flex flex-1 flex-col">
            <h3 className="text-xl font-bold">{user?.username}</h3>
            <p className="text-gray-500">Online</p>
          </div>
        </div>

        <FiMenu size={27} color="gray" />
      </section>

      {/* messages area */}
      <section className="scrollbar flex flex-1 flex-col overflow-y-scroll">
        {MESSAGES.map((message) => (
          <div
            className="m-2 flex flex-col rounded-t-2xl p-3 shadow-md"
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
                className="my-2 w-full rounded-2xl"
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
      <section className="bottom-0 flex h-16 items-center rounded-full bg-white p-1 shadow-lg">
        <FiPlus
          size={30}
          color="purple"
          className="mx-3 rounded-full bg-pink-200"
        />
        <input
          type="text"
          placeholder="Type a message here..."
          className="flex-1 bg-transparent px-2 outline-none"
        />
        😃
        <FiSend
          size={30}
          color="blue"
          className="mx-4 rounded-full bg-blue-200 p-1"
        />
      </section>
    </>
  );
};

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

export default Message;
