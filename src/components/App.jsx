import { Component } from "react";
import Statistics from "./statistics/Statistics";
import FeedbackButton from "./feedbackButton/FeedbackButton";
import SectionTitle from "components/sectionTitle/SectionTitle";
import NotificationMessage from "components/notificationMessage/NotificationMessage";
// import changeBackgroundImage from "helpers/changeBackgroundImage";
import css from './App.module.css'

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    leaveFeedback = (event) => {
        const { target } = event;

        switch (target.name) {
            case 'good':
                this.setState(prevState => {
                return {
                    good: prevState.good + 1
                }
            })
                break;
            case 'neutral':
                this.setState(prevState => {
                return {
                    neutral: prevState.neutral + 1
                }
            })
                break;
            case 'bad':
                this.setState(prevState => {
                return {
                    bad: prevState.bad + 1
                }
            })
                break;
        
            default:
                break;
        }
    }

    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad
        return total 
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (total === 0) {
            return 0
        }
        return ((this.state.good / total) * 100).toFixed(0);
    }

    render() {
        const total = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage();

        return (
        <div className={css.container__feedback}>
                <SectionTitle 
                    title={'Please leave feedback'}>
                    <FeedbackButton 
                        onLeaveFeedback={this.leaveFeedback}
                    />
                </SectionTitle>

                {!total ? (
                    <NotificationMessage
                        message={'There is no feedback'}/>) 
                        : (
                    <SectionTitle
                    title={'Statistics'}>
                    <Statistics 
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        onTotal={total}
                        onPositivePercentage={percentage}
                        />
                    </SectionTitle>
                    )}
        </div>
        )
    }
}

export default App


// style={{backgroundImage: `linear-gradient(to right, rgba(47, 48, 58, 0.7), 
// rgba(47, 48, 58, 0.9)), url(${changeBackgroundImage(percentage)})`}}