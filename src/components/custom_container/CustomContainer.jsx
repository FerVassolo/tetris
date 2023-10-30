import './CustomContainer.styles.css'
const CustomContainer = ({children, title, className}) => {
    return <div className={`custom-container ${className}`}>
        <header className="custom-header">{title}</header>
        <div className='custom-body'>
        {children}
        </div>
    </div>
}

export default CustomContainer;