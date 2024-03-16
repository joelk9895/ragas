import Features from "./sections/Features/Features";
import Hero from "./sections/Hero/Hero";
import { Tweet } from "./sections/Tweets/Tweets";

export default function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <Tweet
        users={tweets}
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
    tweet:
      "LlamaIndex + RAGAs Cookbook 🧑‍🍳 The first step to building any advanced RAG application is defining quality metrics, and RAGAs (@Shahules786) is a popular framework to comprehensively evaluate a RAG app component-wise and e2e. Metrics: Context relevance/recall/precision, faithfulness/groundedness, answer relevance. Check out this comprehensive article by Florian J. on how to setup a RAG pipeline with @llama_index and evaluate it on the set of metrics above.",
    user: "LLamaIndex",
    handle: "@llama_index",
    image: "/images/llama_index.jpg",
  },
  {
    tweet:
      "💪RAGAS is an awesome open-source framework for evaluating RAG systems We recently integrated LangSmith <> RAGAS for optimal ease of evaluation 🎥We're also doing a webinar on RAG evaluation with them in 5 minutes!!! Link to webinar and blog 👇",
    user: "Harrison Chase",
    handle: "@hwchase17",
  },
  {
    tweet:
      "Congrats to @shahules786 for creating the only RAG frework directly recommended by openai at devday Thought leadership is the art of nailing the highest order bit",
    user: "swyx",
    handle: "@swyx",
  },
  {
    tweet:
      "Webinar on evaluating RAG systems going live in 5 minutes! Excited to be joined by the RAGAS team",
    user: "LangChain",
    handle: "@LangChain",
  },
  {
    tweet:
      "RAGAS 🤝 Weaviate! New podcast tomorrow, some awesome background info below! 👇",
    user: "Connor Shorten",
    handle: "@CShorten30",
  },
  {
    tweet:
      "I am blown away by RAGAS With 10 lines of code, I created a question + answer dataset of Airbnb's latest annual report (10-K). The dataset has 3 parts: • questions • contexts • ground truth answers Next step: Evaluate how well various LLMs perform RAG on financial documents. Inspiring work from @Shahules786 and team.",
    user: "virat",
    handle: "@virattt",
  },
];
