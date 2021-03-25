import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import News from "./News";

interface SearchProps {
  country: string;
  category: string;
}
interface INews {
  title?: string;
  description?: string;
  urlToImage?: string;
  publishedAt?: string;
  author?: string;
  url?:string;
}

const Fetch = ({ country, category }: SearchProps) => {
  const [news, setNews] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [ hasMore, setHasMore]  =useState<boolean>(true);

  const fetchNews = async () => {
    try {
      const apiCall = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API2}&page=${pageNumber}`
      );
      
      const data = await apiCall.json();
      console.log(data)
      setNews([...news, ...data.articles]);
      if(data.totalResults === news.length) setHasMore(false)
    } catch (err) {
      if (err) setError(true);
    }
  };

  useEffect(() => {
    
    fetchNews();
    
  }, [pageNumber]);
 
  console.log(news.length);
  return (
    <div style={{ overflow: "auto", height: "100%" }}>
      {error && "Error...👷‍♂️"}
       {/* {loading && <h2 style={{ height: "100vh" }}>"Loading...👴🚗"</h2>}  */}

      {news &&  (
        <div >
          <h2>Top Headlines</h2>
          <InfiniteScroll
            dataLength={news.length}
            next={() => setPageNumber((prev) => prev + 1)}
            hasMore={hasMore}
            loader={<h2 style={{ height: "100vh",marginTop:"5rem" }}>"Loading...👴🚗"</h2>}
            scrollThreshold={.8}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>😵Yay! You have seen it all</b>
              </p>
            }
          >
            {news.map((a: INews, index: number) => {
              return (
                <News
                  key={index}
                  Title={a.title}
                  Description={a.description}
                  Img={a.urlToImage}
                  Dates={a.publishedAt}
                  Author={a.author}
                   Link={a.url}
                />
              );
            })}
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
};

export default Fetch;
