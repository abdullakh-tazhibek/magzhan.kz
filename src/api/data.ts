import axios from "axios";

const API_KEY = "4aad02491df642609493fcfdd0d1593a";

export const fetchNews = async () => {
  const { data } = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}?limit=${10}`
  );
  return data.articles;
};

export const fetchComments = async (id: string) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return data;
};
