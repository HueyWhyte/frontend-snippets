import { menu, comment, share, heart, retweet } from ".././assets/icons";

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

const TweetCard = ({ tweet }) => {
  return (
    <div className="flex py-2 px-2 border-solid border mx-auto border-gray-200 hover:bg-slate-100 lg:w-2/4 cursor-pointer">
      <img
        src={tweet.profile ? tweet.profile : tweet.image}
        alt=""
        className="object-cover w-14 h-14 rounded-full mr-2 mt-2"
      />

      <div className="flex flex-col">
        <div className="flex justify-between w-full items-center">
          <p className="font-bold">{tweet.username}</p>

          <p className="mr-auto ml-2">@{tweet.handle}</p>

          <p> {tweet.createdAt}</p>

          <img src={menu} alt="" className="h-6 rounded-full m-2 py-1" />
        </div>

        <p
          className="mb-2 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            WebkitLineClamp: 3,
          }}
        >
          {tweet.content}
        </p>

        <img
          src={tweet.image ? tweet.image : null}
          alt=""
          className="object-cover w-full rounded-xl"
        />

        <div className="flex justify-between mr-8 mt-2">
          <div className="flex items-center justify-center w-16 h-16 opacity-80 rounded-full hover:bg-blue-200 transition ease-in duration-300">
            <img src={comment} alt="" className="h-5  mr-2" />
            <p>{kFormatter(tweet.comments)}</p>
          </div>

          <div className="flex items-center justify-center w-16 h-16 opacity-80 rounded-full hover:bg-red-200 transition ease-in duration-300">
            <img src={retweet} alt="" className="h-5  mr-2" />
            <p>{kFormatter(tweet.retweets)}</p>
          </div>

          <div className="flex items-center justify-center w-16 h-16 opacity-80 rounded-full hover:bg-green-200 transition ease-in duration-300">
            <img src={heart} alt="" className="h-5  mr-2" />
            <p>{kFormatter(tweet.likes)}</p>
          </div>

          <img src={share} alt="" className="h-7  m-2 py-1 opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
