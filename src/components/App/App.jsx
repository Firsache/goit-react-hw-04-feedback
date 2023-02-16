import { Component } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import { GlobalStyles } from 'styles/globalStyles.styled';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }
  countPositiveFeedbackPercentage() {
    let total = this.countTotalFeedback();
    let positiveFeedback = this.state.good;
    let positPercentage = (positiveFeedback * 100) / total;
    return Math.round(positPercentage);
  }
  render() {
    const { good, bad, neutral } = this.state;
    let total = this.countTotalFeedback();

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet..." />
          )}
        </Section>
        <GlobalStyles />
      </Container>
    );
  }
}
