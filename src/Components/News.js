import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  //   articles = [
  //     {
  //       source: { id: "engadget", name: "Engadget" },
  //       author: "Jon Fingas",
  //       title: "AMC theaters will accept cryptocurrencies beyond Bitcoin",
  //       description:
  //         "You won't have to stick to Bitcoin if you're determined to pay for your movie ticket with cryptocurrency. AMC chief Adam Aron has revealed his theater chain will also accept Ethereum, Litecoin and Bitcoin Cash when crypto payments are available. He didn't hav…",
  //       url: "https://www.engadget.com/amc-theaters-accept-ethereum-litecoin-bitcoin-cash-132642183.html",
  //       urlToImage:
  //         "https://s.yimg.com/os/creatr-uploaded-images/2021-09/4a01cb80-16eb-11ec-abfe-c7b840dd48ca",
  //       publishedAt: "2021-09-16T13:26:42Z",
  //       content:
  //         "You won't have to stick to Bitcoin if you're determined to pay for your movie ticket with cryptocurrency. AMC chief Adam Aron has revealed his theater chain will also accept Ethereum, Litecoin and Bi… [+1198 chars]",
  //     },
  //     {
  //       source: { id: "techcrunch", name: "TechCrunch" },
  //       author: "Sarah Perez",
  //       title:
  //         "PayPal expands the ability to buy, hold and sell cryptocurrency to the U.K.",
  //       description:
  //         "PayPal will now allow users outside the U.S. to buy, hold and sell cryptocurrency for the first time. The company announced today the launch of a new service that will allow customers in the U.K. to select between four types of cryptocurrencies — including Bi…",
  //       url: "http://techcrunch.com/2021/08/23/paypal-expands-the-ability-to-buy-hold-and-sell-cryptocurrency-to-the-u-k/",
  //       urlToImage:
  //         "https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-887657568.jpg?w=600",
  //       publishedAt: "2021-08-23T13:49:45Z",
  //       content:
  //         "PayPal will now allow users outside the U.S. to buy, hold and sell cryptocurrency for the first time. The company announced today the launch of a new service that will allow customers in the U.K. to … [+4420 chars]",
  //     },
  //     {
  //       source: { id: "the-verge", name: "The Verge" },
  //       author: "Jon Porter",
  //       title:
  //         "El Salvador becomes first country to adopt Bitcoin as an official currency",
  //       description:
  //         "Bitcoin is an official currency of El Salvador alongside the US dollar, after it became the first country to adopt the cryptocurrency as legal tender. The country has purchased 400 bitcoins, or around $20.9 million.",
  //       url: "https://www.theverge.com/2021/9/7/22660457/el-salvador-bitcoin-legal-tender-currency-cryptocurrency-chivo-wallet",
  //       urlToImage:
  //         "https://cdn.vox-cdn.com/thumbor/Dhfc5cLJNCuuG46W9mwfEt0dmwE=/0x436:3929x2493/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22831008/1234925847.jpg",
  //       publishedAt: "2021-09-07T08:58:53Z",
  //       content:
  //         "A recently-installed Bitcoin ATM.\r\n\n \n\n As of today, Bitcoin is an official currency of El Salvador alongside the US dollar, after the Central American country became the first to adopt the cryptocur… [+2716 chars]",
  //     },
  //     {
  //       source: { id: null, name: "Gizmodo.com" },
  //       author: "Matt Novak",
  //       title:
  //         "El Salvador Buys 400 Bitcoin as Crypto Officially Becomes Currency on Tuesday",
  //       description:
  //         "The government of El Salvador purchased at least 200 bitcoin recently, ahead of the country officially recognizing bitcoin as a form of legal currency on Tuesday. The purchase brings the government’s total holdings to at least 400, the equivalent of roughly $…",
  //       url: "https://gizmodo.com/el-salvador-buys-400-bitcoin-as-crypto-officially-becom-1847627336",
  //       urlToImage:
  //         "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/76d032e0fcc21b55eb71174dc0ac74c2.jpg",
  //       publishedAt: "2021-09-07T10:00:00Z",
  //       content:
  //         "The government of El Salvador purchased at least 200 bitcoin recently, ahead of the country officially recognizing bitcoin as a form of legal currency on Tuesday. The purchase brings the governments … [+3142 chars]",
  //     },
  //     {
  //       source: { id: null, name: "Lifehacker.com" },
  //       author: "Mike Winters",
  //       title: "How to Pay For Your Vacation With Crypto",
  //       description:
  //         "Retailers are increasingly accepting cryptocurrency for physical items, but did you know you can spend crypto on ephemeral experiences like travel too? As more cryptocurrency holders indicate a willingness to spend, travel retailers are rushing to meet the de…",
  //       url: "https://lifehacker.com/how-to-pay-for-your-vacation-with-crypto-1847518942",
  //       urlToImage:
  //         "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a4348cee9b0d852317783c7102377cf9.jpg",
  //       publishedAt: "2021-08-19T20:00:00Z",
  //       content:
  //         "Retailers are increasingly accepting cryptocurrency for physical items, but did you know you can spend crypto on ephemeral experiences like travel too? As more cryptocurrency holders indicate a willi… [+2783 chars]",
  //     },
  //     {
  //       source: { id: "engadget", name: "Engadget" },
  //       author: "Daniel Cooper",
  //       title: "PayPal brings cryptocurrency trading to the UK",
  //       description:
  //         "PayPal is bringing the ability to buy, hold and sell cryptocurrencies across to the other side of the pond, the better part of a year after it launched in the US. In a statement, the company said that UK-based users would be able to buy, hold and sell Bitcoin…",
  //       url: "https://www.engadget.com/paypal-cryptocurrency-uk-101407842.html",
  //       urlToImage:
  //         "https://s.yimg.com/os/creatr-uploaded-images/2021-08/bf2cff60-03f9-11ec-99cb-501a3ec6e7a8",
  //       publishedAt: "2021-08-23T10:14:07Z",
  //       content:
  //         "PayPal is bringing the ability to buy, hold and sell cryptocurrencies across to the other side of the pond, the better part of a year after it launched in the US. In a statement, the company said tha… [+850 chars]",
  //     },
  //   ];
  constructor() {
    super();
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=517568e324ca4bc3a0f7aa19c4fda2c0&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePreviousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=517568e324ca4bc3a0f7aa19c4fda2c0&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=517568e324ca4bc3a0f7aa19c4fda2c0&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3 text-center">
        <h3>Top Head-Lines</h3>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousclick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
