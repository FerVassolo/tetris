import './Key.styles.css';
const Key = ({children, style}) => {
    return <div className="key" style={style}>
        {children}
    </div>
}

export default Key;