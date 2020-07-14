import React from "react";
import { useContext } from "react";
import { ResourcesContext } from "../Context/ResourcesContext";

const Resources = () => {
  const { currentArticle } = useContext(ResourcesContext);
  const { loading } = useContext(ResourcesContext);
  const ArticlesList = currentArticle.map((article) => {
    return article.urlToImage || article.content === "null" ? (
      <div
        className="col-sm-6 col-md-6 col-lg-12 col-xl-12 mb-4"
        key={article.id}
      >
        <div className="card h-100 shadow">
          <img
            src={article.urlToImage}
            className="card-img-top h-60"
            alt="..."
          />
          <div className="card-body">
            <a href={article.url}>
              <h6 className="card-title">{article.title}</h6>
            </a>
          </div>
        </div>
      </div>
    ) : null;
  });
  return !loading ? (
    <div className="row mt-4">{ArticlesList}</div>
  ) : (
    <div className="text-center">
      <h3>Loading...</h3>
    </div>
  );
};

export default Resources;
