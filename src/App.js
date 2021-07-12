import { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementValue = (value) => {
    this.setState((prevState) => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (total, value) => total + value,
      0
    );
    // console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positiveFeedback;
    if (this.countTotalFeedback() === 0) {
      positiveFeedback = 0;
    } else {
      positiveFeedback = Math.floor((good * 100) / this.countTotalFeedback());
    }
    console.log(positiveFeedback);
    return positiveFeedback;
  };

  render() {
    // const { good, neutral, bad, total = 0, positive = 0 } = this.state;

    return (
      <>
        <h2>Please leave feedback</h2>

        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.incrementValue}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default App;

// import ReactDOM from "react-dom";
// import Counter from "./components/Feedback";

// const App = () => (
//   <div>
//     <Counter />
//   </div>
// );

// handleIncrementGood = () => {
//   this.setState((prevState) => {
//     return {
//       good: prevState.good + 1,
//     };
//   });
// };

// handleIncrementNeutral = () => {
//   this.setState((prevState) => {
//     return {
//       neutral: prevState.neutral + 1,
//     };
//   });
// };
// handleIncrementBad = () => {
//   this.setState((prevState) => {
//     return {
//       bad: prevState.bad + 1,
//     };
//   });
// };

// <button type="button" onClick={this.handleIncrementGood}>
//           Good
//         </button>
//         <button type="button" onClick={this.handleIncrementNeutral}>
//           Neutral
//         </button>
//         <button type="button" onClick={this.handleIncrementBad}>
//           Bad
//         </button>

// this.setState((prevState) => {
//   return {
//     total: prevState.good + prevState.neutral + prevState.bad,
//   };
// });

// <div onClick={this.countPositiveFeedbackPercentage}>
// <div onClick={this.countTotalFeedback}></div>
