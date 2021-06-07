import { Component } from "react";
import Statistics from "./components/Statistics";
// import ReactDOM from "react-dom";
// import Counter from "./components/Feedback";

// const App = () => (
//   <div>
//     <Counter />
//   </div>
// );

class App extends Component {
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
    // const { good, neutral, bad, total = 0, positive = 0 } = this.state;

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

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        </div>
      </div>
    );
  }
}

export default App;
