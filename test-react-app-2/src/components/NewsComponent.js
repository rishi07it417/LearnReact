import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types';


const NewsComponent = (props)=> {
  const [articles,setArticles]=useState([]);
  const [totalArticles,setTotalArticles]=useState(0);
  const [page,setPage]=useState(1);
  const [loading,setLoading]=useState(true);
  const [isFirstLoad,setIsFirstLoad] = useState(true);


  const fetchData = async () => {
    props.setProgress(60);
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
    props.newsApiKey
    }&page=${page + 1}&category=${props.category}&pageSize=18`;


    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalResults);
    setLoading(false);
    setPage(page+1);
    
 
    props.setProgress(100);
  };

  const update = async (move) =>{
    console.log("TEST:::::::::::" + move);
    props.setProgress(60);

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.newsApiKey}&page=${page}&category=${props.category}&pageSize=18`;

    if (move === "next") {
      url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        props.newsApiKey
      }&page=${page + 1}&category=${
        props.category
      }&pageSize=18`;

      setPage(page+1);
    } else if (move === "previous") {
      url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        props.newsApiKey
      }&page=${page - 1}&category=${
        props.category
      }&pageSize=18`;
      setPage(page-1);
    }

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setTotalArticles(parsedData.totalResults);
    setLoading(false);

   
    props.setProgress(60);
  }


  useEffect(() => {
    console.log('inside use effect');
    if(isFirstLoad){
      setIsFirstLoad(false);
      setLoading(true);
      fetchData();
    }
  },[isFirstLoad,fetchData]);

  console.log(articles.length);
  console.log(totalArticles);
    return (
     
      <>
        {loading && <Loading></Loading>}
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchData}
            hasMore={articles.length !== totalArticles}
            loader={loading && <Loading />}
           
          >
                    <div className="container my-3 ">

            <div className="row">
              {articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    {" "}
                    <NewsItem
                      myId={index}
                      title={element.title ? element.title : ""}
                      text={element.description}
                      imageurl={element.urlToImage}
                      detailurl={element.url}
                    ></NewsItem>{" "}
                  </div>
                );
              })}
            </div>
            </div>

          </InfiniteScroll>
        {/*  <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-between">
              <button
                type="button"
                disabled={this.state.page <= 1}
                onClick={this.handlePreviousClick}
                className="btn btn-primary"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={
                  this.state.totalArticles <= Math.ceil(this.state.page * 18)
                }
                onClick={this.handleNextClick}
                className="btn btn-primary"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        */}
      </>
    );
  
}

NewsComponent.propTypes = { 
  category : PropTypes.string,
  newsApiKey : PropTypes.string,
  setProgress : PropTypes.any
}

export default NewsComponent;