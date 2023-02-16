import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import { GlobalStyles } from 'styles/globalStyles.styled';
import { Container } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = Object.keys({ good, neutral, bad });

  const onLeaveFeedback = option => {
    if (option === 'good') setGood(prevState => prevState + 1);
    if (option === 'neutral') setNeutral(prevState => prevState + 1);
    if (option === 'bad') setBad(prevState => prevState + 1);
  };

  let total = good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    // let total = countTotalFeedback();
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
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };
//   countTotalFeedback() {
//     const { good, bad, neutral } = this.state;
//     return good + bad + neutral;
//   }
//   countPositiveFeedbackPercentage() {
//     let total = this.countTotalFeedback();
//     let positiveFeedback = this.state.good;
//     let positPercentage = (positiveFeedback * 100) / total;
//     return Math.round(positPercentage);
//   }
//   render() {
//     const { good, bad, neutral } = this.state;
//     let total = this.countTotalFeedback();

//     return (
//       <Container>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback yet..." />
//           )}
//         </Section>
//         <GlobalStyles />
//       </Container>
//     );
//   }
// }
