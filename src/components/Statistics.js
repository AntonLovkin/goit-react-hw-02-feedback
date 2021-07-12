function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h2>Statistics</h2>
      {total >= 1 ? (
        <>
          <ul>
            {Object.entries({ good, neutral, bad }).map((entry) => (
              <li key={entry[0]}>
                {entry[0]}: {entry[1]}
              </li>
            ))}
          </ul>
          <p>Total:{total}</p>
          <p>Positive Feedback: {positivePercentage} %</p>
        </>
      ) : (
        <h2>No feedback given</h2>
      )}
    </>
  );
}

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
