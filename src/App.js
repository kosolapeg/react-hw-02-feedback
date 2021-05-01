import { useState, useEffect } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const getOptions = () => Object.keys(options);

  useEffect(() => console.log('OPTIONS: ', options), [options]);

  const handleClick = ({ target: { name } }) => {
    setOptions(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce((acc, sum) => acc + sum, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    try {
      return Math.round((options.good / countTotalFeedback()) * 100);
    } catch (e) {
      console.log(e.message);
      return 0;
    }
  };

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions onLeaveFeedback={handleClick} options={getOptions()} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            {...options}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default App;
