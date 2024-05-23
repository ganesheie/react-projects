interface ButtonProps {
  handleClick: Function;
}
const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={handleClick}> Increment Count </button>;
};

export default Button;
