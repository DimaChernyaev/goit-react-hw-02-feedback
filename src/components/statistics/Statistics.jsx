import css from './Statastics.module.css'

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

export default Statistics