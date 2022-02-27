import tweets from "../assets/tweets";

import TweetCard from "../components/TweetCard";

function Twitter() {
  return (
    <div className="flex flex-col w-full">
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}

export default Twitter;
