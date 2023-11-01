import "./Key.styles.css";

type KeyProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Key = ({ children, style }: KeyProps) => {
  return (
    <div className="key" style={style}>
      {children}
    </div>
  );
};

export default Key;
