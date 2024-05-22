interface ButtonProps {
  handleClick: Function;
}
const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={handleClick}> click count </button>;
};

export default Button;
