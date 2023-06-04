import css from './FeedbackButton.module.css'
import PropTypes from 'prop-types';

const FeedbackButton = ({ onLeaveFeedback }) => {
    return ( 
    <div className={css.button__container}>
        <button type="button" name="good" className={css.button__fedback} onClick={onLeaveFeedback}>Good</button>
        <button type="button" name="neutral" className={css.button__fedback} onClick={onLeaveFeedback}>Neutral</button>
        <button type="button" name="bad" className={css.button__fedback} onClick={onLeaveFeedback}>Bad</button>
    </div>)
}

FeedbackButton.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackButton