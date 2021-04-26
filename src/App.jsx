import React, { Component } from 'react';
import Section from './components/Feedback/Section';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Notification from './components/Feedback/Notification';
import Statistics from './components/Feedback/Statistics';
import styles from './components/Feedback/Feedback.module.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  giveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <div className={styles.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.giveFeedback}
            total={total}
            positive={positive}
            state={this.state}
          />
        </Section>
        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
