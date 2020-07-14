import React, { useEffect, useState, createContext } from "react";
import Axios from "axios";

export const ResourcesContext = createContext();

const ResourcesContextProvider = (props) => {
  const [Articles, setArticles] = useState([]);
  const [Status, setStatus] = useState([]);
  const [TotalResults, setTotalResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [ArticlePerPage, setArticlePerPage] = useState(10);
  const url =
    "http://newsapi.org/v2/top-headlines?q=ncdc&country=ng&category=health&apiKey=eebab879f28a4bde815c864b57716b34";

  useEffect(() => {
    const fetch_data = async () => {
      setLoading(true);
      const rawData = await Axios.get(url);
      const data_status = await rawData.data.status;
      const data_result = await rawData.data.totalResults;
      const data_article = await rawData.data.articles;
      setStatus(data_status);
      setTotalResults(data_result);
      setArticles(data_article);
      setLoading(false);
    };
    fetch_data();
  }, []);

  const TotalArticle = Articles.length

  const indexOfLastPost = CurrentPage * ArticlePerPage;
  const indexOfFirstPost = indexOfLastPost - ArticlePerPage;
  const currentArticle = Articles.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    
  }
  
  return (
    <ResourcesContext.Provider
      value={{ currentArticle, Status, TotalResults, loading, ArticlePerPage, TotalArticle, handleChange }}
    >
      {props.children}
    </ResourcesContext.Provider>
  );
};

export default ResourcesContextProvider;
