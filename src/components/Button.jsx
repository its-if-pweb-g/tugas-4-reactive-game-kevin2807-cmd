const Button = (props) => {
  const { className, type, children, onClick } = props;
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
