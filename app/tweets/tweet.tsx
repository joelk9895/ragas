import { Tweet as ReactTweet } from "react-tweet";

interface Tweet {
  tweet: string; // Assuming tweet IDs are strings
}

interface TweetsProps {
  tweetsList: Tweet[];
}

export default function Tweets({ tweetsList }: TweetsProps) {
  return (
    <div className="flex flex-col items-center mt-10 mb-10">
      <h2 className="text-3xl text-white font-bold">still not convinced?</h2>
      <section className="md:w-[99vw] w-screen h-[50vh] flex gap-10 overflow-hidden max-w[100vw] marquee2 text-left">
        <div className=" flex gap-10 track2 dark">
          {tweetsList.map((tweet) => (
            <ReactTweet id={tweet.tweet} key={tweet.tweet} />
          ))}
        </div>
        <div className=" flex gap-10 track2 dark">
          {tweetsList.map((tweet) => (
            <ReactTweet id={tweet.tweet} key={tweet.tweet} />
          ))}
        </div>
      </section>
    </div>
  );
}
