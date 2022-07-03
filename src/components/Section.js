import Title from "./Title";
import Button from "./Button";
const Section = ({ condition, setCondition, title, title1, title2 }) => {
  return (
    <>
      <Title title={title} />
      <Button
        title1={title1}
        title2={title2}
        condition={condition}
        setCondition={setCondition}
      />
    </>
  );
};

export default Section;
