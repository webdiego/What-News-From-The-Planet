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
  const [news, setNews] = useState<object[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [ hasMore, setHasMore]  =useState<boolean>(true);

  const fetchNews = async () => {
    try {
      const apiCall = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f26d8881a3e5447cb2fb16ce5cc0cd9e&page=${pageNumber}`
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
      {error && "Error...ð·ââï¸"}
       {/* {loading && <h2 style={{ height: "100vh" }}>"Loading...ð´ð"</h2>}  */}

      {news &&  (
        <div >
          <h2>Top Headlines</h2>
          <InfiniteScroll
            dataLength={news.length}
            next={() => setPageNumber((prev) => prev + 1)}
            hasMore={hasMore}
            loader={<h2 style={{ height: "100vh",marginTop:"5rem" }}>"Loading...ð´ð"</h2>}
            scrollThreshold={.8}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>ðµYay! You have seen it all</b>
              </p>
            }
          >
            {news.map((Element: INews, index: number) => {
              return (
                <News
                  key={index}
                  Title={Element.title}
                  Description={Element.description}
                  Img={Element.urlToImage}
                  Dates={Element.publishedAt}
                  Author={Element.author}
                   Link={Element.url}
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
