import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  points: {
    display: 'flex',
    listStyle: 'none',
    '& > li': {
      marginRight: 10,
    },
  },
});

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const jss = useStyles();

  return (
    <>
      <ul className={jss.points}>
        <li key={1}>
          Good: <span>{good}</span>
        </li>
        <li key={2}>
          Neutral: <span>{neutral}</span>
        </li>
        <li key={3}>
          Bad: <span>{bad}</span>
        </li>
      </ul>
      <h3>
        Total: <span>{total}</span>
      </h3>
      <h3>
        Positive feedback:{' '}
        <span>{!positivePercentage ? 0 : positivePercentage}%</span>
      </h3>
    </>
  );
};

export default Statistics;
