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
    return Object.values(this.state).reduce((total, amount) => total + amount);
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <div className={styles.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.giveFeedback}
            total={total}
            positive={positive}
            state={this.state}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
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
