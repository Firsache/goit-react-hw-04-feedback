import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import { GlobalStyles } from 'styles/globalStyles.styled';
import { Container } from './App.styled';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = Object.keys({ good, neutral, bad });
  let total = good + bad + neutral;

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    let positPercentage = (good * 100) / total;
    return Math.round(positPercentage);
  };

  return (
    <Container>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet..." />
        )}
      </Section>
      <GlobalStyles />
    </Container>
  );
}
