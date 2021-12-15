import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { BeatLoader } from "react-spinners";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [progress, setProgress] = useState();

  const componentDidMount = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=517568e324ca4bc3a0f7aa19c4fda2c0&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  const handlePreviousclick = async () => {
    setPage(page - 1);
    componentDidMount();
  };

  const handleNextClick = async () => {
    setPage(page + 1);
    componentDidMount();
  };

  return (
    <div className="container my-3 text-center">
      <h2 className="text-primary my-4">Top Head-Lines</h2>
      {loading && <BeatLoader color="#295FFF" />}

      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 40) : ""}
                description={
                  element.description ? element.description.slice(0, 80) : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePreviousclick}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          {" "}
          Next &rarr;
        </button>
      </div>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
