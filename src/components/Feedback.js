import { Component } from "react";

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleIncrementNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleIncrementBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    this.setState((prevState) => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => {
      return {
        positive: Math.round(
          (prevState.good /
            (prevState.neutral + prevState.bad + prevState.good)) *
            100
        ),
      };
    });
  };

  render() {
    const { good, neutral, bad, total = 0, positive = 0 } = this.state;

    return (
      <div onClick={this.countPositiveFeedbackPercentage}>
        <div onClick={this.countTotalFeedback}>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleIncrementGood}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrementBad}>
            Bad
          </button>

          <h2>Statistics</h2>
          <p>
            Good:<span>{good}</span>
          </p>
          <p>
            Neutral:<span>{neutral}</span>
          </p>
          <p>
            Bad:<span>{bad}</span>
          </p>
          <p>
            Total:<span>{total}</span>
          </p>
          <p>
            Positive feedback:<span>{positive}%</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Counter;
