import css from './NotificationMessage.module.css'
import PropTypes from 'prop-types';


const NotificationMessage = ({message}) => {
    return ( 
    <h2 className={css.message}>{message}</h2>
    )
}

NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired,
}

export default NotificationMessage