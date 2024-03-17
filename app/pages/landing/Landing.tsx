import Features from "./sections/Features/Features";
import Hero from "./sections/Hero/Hero";
import { Tweets } from "./sections/Tweets/Tweets";

export default function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <Tweets
        tweets={tweets}
        titleComponent={
          <>
            <h1 className="text-4xl font-medium text-black dark:text-white">
              See what users are <br />
              <span className="text-4xl md:text-[6rem] font-regular mt-1 leading-none">
                Tweeting about us
              </span>
            </h1>
          </>
        }
      />
    </>
  );
}

export const tweets = [
  {
    tweet: "1758308547769913365",
  },
  {
    tweet: "1694740293835510019",
  },
  {
    tweet: "1724490887147978793",
  },

  {
    tweet: "1726391192244351106",
  },
  {
    tweet: "1694740124687548714",
  },
  {
    tweet: "1764363199049072743",
  },
];
