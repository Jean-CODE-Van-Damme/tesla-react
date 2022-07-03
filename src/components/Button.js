const Button = ({ condition, setCondition, title1, title2 }) => {
  return (
    <>
      <button
        className={condition ? "blue" : "black"}
        onClick={() => setCondition(true)}
      >
        {title1}
      </button>
      <button
        className={condition ? "black" : "blue"}
        onClick={() => setCondition(false)}
      >
        {title2}
      </button>
    </>
  );
};

export default Button;
