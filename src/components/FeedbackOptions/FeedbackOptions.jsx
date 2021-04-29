import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => (
        <button onClick={onLeaveFeedback} className={css[option]} name={option}>
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
