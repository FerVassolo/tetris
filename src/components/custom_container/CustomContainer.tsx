import "./CustomContainer.styles.css";
type CustomContainerProps = {
  children: React.ReactNode;
  title: string;
  className?: string;
};
const CustomContainer = ({
  children,
  title,
  className,
}: CustomContainerProps) => {
  return (
    <div className={`custom-container ${className}`}>
      <header className="custom-header">{title}</header>
      <div className="custom-body">{children}</div>
    </div>
  );
};

export default CustomContainer;
