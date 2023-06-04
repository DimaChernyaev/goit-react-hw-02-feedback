import css from './Statastics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, onTotal, onPositivePercentage}) => {
    return ( 
    <ul className={css.statastics}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {onTotal}</li>
        <li>Positive feedback: {onPositivePercentage}%</li>
    </ul>
    )
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    onTotal: PropTypes.number.isRequired,
    onPositivePercentage: PropTypes.string.isRequired,
}

export default Statistics