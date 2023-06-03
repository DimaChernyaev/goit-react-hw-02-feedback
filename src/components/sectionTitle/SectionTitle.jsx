import css from './SectionTitle.module.css'

const SectionTitle = ({ title, children }) => {
    return ( 
    <div>
        <h2 className={css.title}>{title}</h2>
        {children}
    </div>)
}

export default SectionTitle