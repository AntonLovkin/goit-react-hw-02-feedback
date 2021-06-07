import { Component } from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
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
      Positive feedback:<span>{positivePercentage}%</span>
    </p>
  </div>
);

Statistics.defaultProps = {
  positivePercentage: 0,
  total: 0,
};

// Statistics.propTypes = {
//     name: PropTypes.string,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
// }

export default Statistics;
