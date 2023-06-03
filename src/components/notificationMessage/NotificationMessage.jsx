import css from './NotificationMessage.module.css'


const NotificationMessage = ({message}) => {
    return ( 
    <h2 className={css.message}>{message}</h2>
    )
}

export default NotificationMessage