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
      <h3 className="text-3xl">Testimonials</h3>
      <section className="md:w-[80vw] w-screen h-[50vh] flex gap-10 overflow-hidden max-w[100vw] marquee2 text-left">
        <div className=" flex gap-10 track2">
          {tweetsList.map((tweet) => (
            <ReactTweet id={tweet.tweet} key={tweet.tweet} />
          ))}
        </div>
        <div className=" flex gap-10 track2">
          {tweetsList.map((tweet) => (
            <ReactTweet id={tweet.tweet} key={tweet.tweet} />
          ))}
        </div>
      </section>
    </div>
  );
}
