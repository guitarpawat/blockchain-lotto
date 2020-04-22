import React, { Component } from "react";
import "./checkPage.css";
import Header from "../headerComponents/header.js";

class CheckPage extends Component {
  state = {
    data: null,
    results: [],
    result: null,
    prizes: null,
    showDates: false,
    state: "init",
    searchBox: "",
  };

  fetchResults = async () => {
    const results = await fetch("/api/v1/results");
    const response = await results.json();
    response.sort((a, b) => {
      return new Date(b.startTime).getTime() - new Date(a.startTime).getTime();
    });
    if (response && response[0]) {
      this.setState({ results: response, result: response[0] });
    }
  };

  fetchPrizes = async () => {
    const prizes = await fetch(`/api/v1/results/${this.state.result._id}`);
    const response = await prizes.json();
    this.setState({ prizes: response });
  };

  formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  getStartTime = () => {
    if (this.state.state !== "done") {
      return (
        <div
          onClick={this.changeShowDateState}
          className="col-4 offset-4 date-txt clickable"
        >
          Loading...
        </div>
      );
    }
    return (
      <div
        onClick={this.changeShowDateState}
        className="col-4 offset-4 date-txt clickable"
      >
        {this.formatDate(new Date(this.state.result.startTime))} ⯆
      </div>
    );
  };

  changeShowDateState = () => {
    this.setState({ showDates: !this.state.showDates });
  };

  componentDidMount() {
    this.fetchResults()
      .then(() => this.fetchPrizes())
      .then(() => this.setState({ state: "done" }))
      .catch((err) => console.trace("error when mount component:", err));
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.state === "changed") {
      this.setState({ state: "init", showDates: false });
      this.fetchPrizes()
        .then(() => this.setState({ state: "done" }))
        .catch((err) => console.trace("error when update component:", err));
    }
  }

  setResultById = (id) => {
    const result = this.state.results.find((result) => result._id === id);
    this.setState({ result: result, state: "changed" });
  };

  renderDates = (result) => {
    return (
      <div className="col-3">
        <strong
          className="card-text fourth-txt clickable"
          onClick={() => this.setResultById(result._id)}
          key={result._id}
        >
          {this.formatDate(new Date(result.startTime))}
        </strong>
      </div>
    );
  };

  renderAllDates = () => {
    if (
      !this.state.showDates ||
      !this.state.results ||
      this.state.results.length == 0
    ) {
      return null
    }
    return (
      <div className="card text-center">
        <div className="card-header head-txt">SELECT DRAWING DATE</div>
        <div className="row">
          {this.state.results.map((ele) => this.renderDates(ele))}
        </div>
      </div>
    );
  };

  renderFirstPrize = () => {
    let prize = "";
    if (this.state.prizes && this.state.prizes.first) {
      prize = this.state.prizes.first;
    }
    return <strong className="card-text first-prize">{prize}</strong>;
  };

  renderBigNumber = (num) => {
    return (
      <div className="col-6">
        <strong className="card-text same-line">{num}</strong>
      </div>
    );
  };

  renderNumber = (num) => {
    return (
      <div className="col">
        <strong className="card-text same-line">{num}</strong>
      </div>
    );
  };

  renderSmallNumber = (num) => {
    return (
      <div className="col">
        <strong className="card-text fourth-txt">{num}</strong>
      </div>
    );
  };

  renderFrontThree = () => {
    let prize = Array(2).fill("");
    if (this.state.prizes && this.state.prizes.frontThree) {
      prize = this.state.prizes.frontThree;
    }
    const generate = prize.map((ele) => this.renderBigNumber(ele));
    return <div className="row">{generate}</div>;
  };

  renderLastThree = () => {
    let prize = Array(2).fill("");
    if (this.state.prizes && this.state.prizes.lastThree) {
      prize = this.state.prizes.lastThree;
    }
    const generate = prize.map((ele) => this.renderBigNumber(ele));
    return <div className="row">{generate}</div>;
  };

  renderLastTwo = () => {
    let prize = "";
    if (this.state.prizes && this.state.prizes.lastTwo) {
      prize = this.state.prizes.lastTwo;
    }
    return <strong className="card-text first-prize">{prize}</strong>;
  };

  renderBesideFirst = () => {
    let prize = Array(2).fill("");
    if (this.state.prizes && this.state.prizes.besideFirst) {
      prize = this.state.prizes.besideFirst;
    }
    const generate = prize.map((ele) => this.renderBigNumber(ele));
    return <div className="row">{generate}</div>;
  };

  renderSecond = () => {
    let prize = Array(5).fill("");
    if (this.state.prizes && this.state.prizes.second) {
      prize = this.state.prizes.second;
    }
    const generate = prize.map((ele) => this.renderNumber(ele));
    return <div className="row">{generate}</div>;
  };

  renderThird = () => {
    let prize = Array(10).fill("");
    if (this.state.prizes && this.state.prizes.third) {
      prize = this.state.prizes.third;
    }
    const generate = prize.map((ele) => this.renderSmallNumber(ele));
    return <div className="row">{generate}</div>;
  };

  renderForth = () => {
    let prize = Array(50).fill("");
    let allCol = [];
    if (this.state.prizes && this.state.prizes.forth) {
      prize = this.state.prizes.forth;
    }
    for (let i = 0; i < 5; i++) {
      allCol.push(
        <div className="row">
          {prize
            .slice(i * 10, (i + 1) * 10)
            .map((ele) => this.renderSmallNumber(ele))}
        </div>
      );
    }
    return allCol;
  };

  renderFifth = () => {
    let prize = Array(100).fill("");
    let allCol = [];
    if (this.state.prizes && this.state.prizes.fifth) {
      prize = this.state.prizes.fifth;
    }
    for (let i = 0; i < 10; i++) {
      allCol.push(
        <div className="row">
          {prize
            .slice(i * 10, (i + 1) * 10)
            .map((ele) => this.renderSmallNumber(ele))}
        </div>
      );
    }
    return allCol;
  };

  handleSearchBoxChange = (e) => {
    this.setState({searchBox: e.target.value})
  }

  inquiryPrize = () => {
    const input = this.state.searchBox
    if(!input || input.length == 0) return null
    if(!/^\d{6}$/.test(input)) {
      return (
        <div className="alert alert-info check-prize" role="alert">
          Lottery number must be 6 digits number.
        </div>
      )
    }
    const result = this.checkPrize(input)
    if(result) {
      return (
        <div className="alert alert-success check-prize" role="alert">
          Congratulations! You won the {result}.
        </div>
      )
    }
    return (
      <div className="alert alert-warning check-prize" role="alert">
        Sorry, you didn't won any prize. Better luck next time.
      </div>
    )
  }

  checkPrize = (input) => {
    let won = []
    const prizes = this.state.prizes

    if(prizes.first == input) {
      won.push("first prize")
    }
    if(prizes.besideFirst.includes(input)) {
      won.push("beside prize")
    }
    if(prizes.second.includes(input)) {
      won.push("second prize")
    }
    if(prizes.third.includes(input)) {
      won.push("third prize")
    }
    if(prizes.forth.includes(input)) {
      won.push("fourth prize")
    }
    if(prizes.fifth.includes(input)) {
      won.push("fifth prize")
    }
    if(prizes.frontThree.includes(input.substring(0, 3))) {
      won.push("front three digits prize")
    }
    if(prizes.lastThree.includes(input.substring(3, 6))) {
      won.push("last three digits prize")
    }
    if(prizes.lastTwo.includes(input.substring(4, 6))) {
      won.push("last two digits prize")
    }
    return won.join(", ")
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col ltr-txt">The Lottery Result</div>
          </div>
          <div className="row">{this.getStartTime()}</div>
          {this.renderAllDates()}
          <div className="row search">
            <form className="col form-inline justify-content-center" onSubmit={this.inquiryPrize}>
              <input
                className="form-control mr-sm-2 search-center"
                type="text"
                placeholder="Search lottery number"
                aria-label="Search"
                size="30"
                maxLength="6"
                value={this.state.searchBox}
                onChange={this.handleSearchBoxChange}
              ></input>
            </form>
          </div>
          {this.inquiryPrize()}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card text-center">
                <div className="card-header head-txt">THE 1st PRIZE</div>
                {this.renderFirstPrize()}
                <div className="card-footer text-muted">
                  6,000,000฿ / 1 prize
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card text-center">
                <div className="card-header head-txt">THE FIRST 3 DIGITS</div>
                {this.renderFrontThree()}
                <div className="card-footer text-muted">4,000฿ / prizes</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card text-center">
                <div className="card-header head-txt">THE LAST 3 DIGITS</div>
                {this.renderLastThree()}
                <div className="card-footer text-muted">4,000฿ / prizes</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card text-center">
                <div className="card-header head-txt">THE LAST 2 DIGITS</div>
                {this.renderLastTwo()}
                <div className="card-footer text-muted">2,000฿ / prizes</div>
              </div>
            </div>
          </div>

          <div className="card text-center">
            <div className="card-header head-txt">THE 1st PRIZE SIDE</div>
            {this.renderBesideFirst()}
            <div className="card-footer text-muted">100,000฿ / prizes</div>
          </div>

          <div className="card text-center">
            <div className="card-header head-txt">THE 2nd PRIZE</div>
            {this.renderSecond()}
            <div className="card-footer text-muted">2,000฿ / prizes</div>
          </div>

          <div className="card text-center">
            <div className="card-header head-txt">THE 3rd PRIZE</div>
            {this.renderThird()}
            <div className="card-footer text-muted">2,000฿ / prizes</div>
          </div>

          <div className="card text-center">
            <div className="card-header head-txt">THE 4th PRIZE</div>
            {this.renderForth()}
            <div className="card-footer text-muted">2,000฿ / prizes</div>
          </div>

          <div className="card text-center">
            <div className="card-header head-txt">THE 5th PRIZE</div>
            {this.renderFifth()}
            <div className="card-footer text-muted">2,000฿ / prizes</div>
          </div>
          <div className="row footer"></div>
        </div>
      </div>
    );
  }
}

export default CheckPage;
