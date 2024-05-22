interface InputProps {
  counter: number;
}

const UseEffectComp1 = ({ counter }: InputProps) => {
  return <h3> counter value inside useEffect Component {counter}</h3>;
};

export default UseEffectComp1;
