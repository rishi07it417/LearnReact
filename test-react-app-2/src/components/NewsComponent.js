import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsComponent extends Component {
  articles = [];

  constructor() {
    super();

    this.state = {
      articles: this.articles,
      totalArticles: 0,
      page: 1,
      loading: true,
    };
  }

  fetchData = async () => {
    console.log(this.props);
    this.props.setProgress(60);
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      this.props.newsApiKey
    }&page=${this.state.page + 1}&category=${this.props.category}&pageSize=18`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };

  async update(move) {
    console.log("TEST:::::::::::" + move);
    this.props.setProgress(60);

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.newsApiKey}&page=${this.state.page}&category=${this.props.category}&pageSize=18`;

    if (move === "next") {
      url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        this.props.newsApiKey
      }&page=${this.state.page + 1}&category=${
        this.props.category
      }&pageSize=18`;

      this.setState({ page: this.state.page + 1 });
    } else if (move === "previous") {
      url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        this.props.newsApiKey
      }&page=${this.state.page - 1}&category=${
        this.props.category
      }&pageSize=18`;
      this.setState({ page: this.state.page - 1 });
    }

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(60);
  }

  async componentDidMount() {
    console.log("inside component did mount");
    this.setState({ loading: true, articles: [] });

    this.fetchData();
  }

  handlePreviousClick = async () => {
    console.log("previous clicked");

    this.setState({ loading: true, articles: [] });
    this.update("previous");
  };

  handleNextClick = async () => {
    console.log("next clicked");
    this.setState({ loading: true, articles: [] });
    this.update("next");
  };

  render() {
    console.log("render");
    return (
      <>
        {this.state.loading && <Loading></Loading>}
          <InfiniteScroll
            dataLength={this.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length !== this.state.totalArticles}
            loader={this.state.loading && <Loading />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
                    <div className="container my-3 ">

            <div className="row">
              {this.state.articles.map((element, index) => {
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
}
