const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {Object.keys(options).map((key) => (
      <li key={key}>
        <button type="button" onClick={() => onLeaveFeedback(key)}>
          {key}
        </button>
      </li>
    ))}
  </ul>

  // <div>
  //   <button type="button" onClick={this.onLeaveFeedback}>
  //     Good
  //   </button>
  //   <button type="button" onClick={this.onLeaveFeedback}>
  //     Neutral
  //   </button>
  //   <button type="button" onClick={this.onLeaveFeedback}>
  //     Bad
  //   </button>
  // </div>
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
