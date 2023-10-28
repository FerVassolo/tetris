import './CustomContainer.styles.css'
const CustomContainer = ({children, title}) => {
    return <div className="custom-container">
        <header className="custom-header">{title}</header>
        <div className='custom-body'>
        {children}
        </div>
    </div>
}

export default CustomContainer;