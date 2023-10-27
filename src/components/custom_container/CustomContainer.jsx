const CustomContainer = ({children, title}) => {
    return <div className="custom-container">
        <header className="custom-header">{title}</header>
        {children}
    </div>
}