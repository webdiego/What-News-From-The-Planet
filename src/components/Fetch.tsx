import axios from "axios";
// import { url } from "node:inspector";
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
  publishedAt?:string;
  source?:string;
}

const Fetch = ({ country, category }: SearchProps) => {
  const [news, setNews] = useState<object[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [hasMore, setHasMore]= useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API2}&page=${pageNumber}`,
    })
    .then((res) => {
      console.log(res);
      let TotalResult = res.data.totalResults
        let LengthNews = res.data.articles.length
        if((TotalResult - LengthNews) > 0){
          setHasMore(true)
        }
         if((TotalResult - LengthNews) > 0 ){
           setHasMore(false)
         }
        const articles = res.data.articles
        setNews([...articles,articles]);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
    }, [country, category, pageNumber]);
    console.log(news)
  
  return (
    <div style={{ overflow: "auto", height: "100%" }}>
      
      {error && "Error...👷‍♂️"} 

      {news && !loading && (
        <div>
          <h2>Top Headlines</h2>
          <InfiniteScroll 
          dataLength={news.length} 
          next={()=>setPageNumber(prev=> prev +1 )}
          hasMore={hasMore}
          loader={"Loading...👴"}
          scrollThreshold={.98}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          >
            {news.map((a: INews, index: number) => {
              
              return (
                <News key={index} Title={a.title} Description={a.description} Img={a.urlToImage} Date={a.publishedAt} Source={a.source}/>
              );
            })}
          </InfiniteScroll>
        </div>
      )}
       {loading && "Loading...👴"}
    </div>
  );
};

export default Fetch;
