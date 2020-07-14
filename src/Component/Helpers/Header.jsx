import React, { useContext } from "react";
import { ResourcesContext } from "../Context/ResourcesContext";

const Header = () => {
  const { currentArticle, loading } = useContext(ResourcesContext);
  const Carousel = currentArticle.map((article) => {
    return article.urlToImage || article.content === "null" ? (
      <div className="row">
        <div className="col-sm-12 col-mg-6 col-lg-6 col-xl-6">
          <img
            src={article.urlToImage}
            className="d-block w-100 card-img"
            alt="..."
          />
        </div>
        <div className="col-sm-12 col-mg-6 col-lg-6 col-xl-6 text-primary">
          <div className="carousel-caption d-none d-md-block">
            <a href={article.url}>
              <h1 className="text-left">{article.title}</h1>
            </a>
          </div>
        </div>
      </div>
    ) : null;
  });
  return loading ? (
    <div className="text-center">
      <h3>Loading...</h3>
    </div>
  ) : (
    <div
      id="carouselExampleCaptions"
      className="carousel slide shadow mb-5"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          {Carousel[Math.floor(Math.random() * Carousel.length)]}
        </div>
        <div className="carousel-item">
          {Carousel[Math.floor(Math.random() * Carousel.length)]}
        </div>
        <div className="carousel-item">
          {Carousel[Math.floor(Math.random() * Carousel.length)]}
        </div>
        <div className="carousel-item">
          {Carousel[Math.floor(Math.random() * Carousel.length)]}
        </div>
        <div className="carousel-item">
          {Carousel[Math.floor(Math.random() * Carousel.length)]}
        </div>
        <div className="carousel-item">
          {Carousel[Math.floor(Math.random() * Carousel.length)]}
        </div>
      </div>
    </div>
  );
};

export default Header;
