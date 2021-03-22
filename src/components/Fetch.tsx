import axios from "axios";
// import { url } from "node:inspector";
import { useEffect, useState } from "react";
import News from "./News";

interface SearchProps {
  country: string;
  category: string;
}
interface INews {
  title?: string;
  content?: string;
  urlToImage?: string;
}

const Fetch = ({ country, category }: SearchProps) => {
  const [news, setNews] = useState<Object[]>();
  const [pageNumber, setPageNumber] = useState<Number>(1)
  const [loading,setLoading]= useState<boolean>(true)
  const [error,setError]=useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
      method: "GET",
      url: `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${pageNumber}`,
    }).then((res) => {
      console.log(res)
      setNews(res.data.articles);
      setLoading(false)
    }).catch(err=>{
      setError(true)
    });
  }, [country, category,pageNumber]);
  
  return (
      
    <div>
      {loading && 'Loading...👴'}
      {error && "Error...👷‍♂️"}

      {news && !loading &&  (
        <div>
          {news.map((a: INews, index: number) => {
            console.log(a);
            return <News key={index} Title={a.title} Content={a.content} Img={a.urlToImage} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Fetch;
