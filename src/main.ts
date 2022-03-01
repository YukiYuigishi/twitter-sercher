import "dotenv/config";
import TwitterSearcher from "./twitterSearcher";

const main = () => {
  const { BEARER_TOKEN, SEARCH_QUERY } = process.env;
  TwitterSearcher(BEARER_TOKEN, SEARCH_QUERY);
};

main();
