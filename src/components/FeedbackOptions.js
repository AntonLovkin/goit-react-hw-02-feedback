import { Component } from "react";

const FeedbackOptions = () => (
  <div>
    <button type="button" onClick={this.handleIncrementGood}>
      Good
    </button>
    <button type="button" onClick={this.handleIncrementNeutral}>
      Neutral
    </button>
    <button type="button" onClick={this.handleIncrementBad}>
      Bad
    </button>
  </div>
);

// FeedbackOptions.defaultProps = {
//     name: "User Name",
// };

// FeedbackOptions.propTypes = {
//     name: PropTypes.string,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
// }

export default FeedbackOptions;
