import Section from "./Section";

const Sections = ({ condition1, condition2, setCondition1, setCondition2 }) => {
  return (
    <>
      <div className="top_section">
        <Section
          title="Sélectionnez votre véhicule"
          title1="Grande Autonomie - 90700 $"
          title2="Performance - 106700 $"
          condition={condition1}
          setCondition={setCondition1}
        />
      </div>
      <div className="bottom_section">
        <Section
          title="Sélectionnez la couleur"
          condition={condition2}
          setCondition={setCondition2}
          title1="Blanc nacre multicouches - 0 $"
          title2="Noir uni - 1000 $"
        />
      </div>
      {/* 
// ON FERA LE PRIX ICI  1111111!!!!!!!!! */}

      <div className="result">
        {condition1 && condition2 && <p>90 700 $</p>}
        {condition1 && !condition2 && <p>91 700 $</p>}
        {!condition1 && condition2 && <p>106 700 $</p>}
        {!condition1 && !condition2 && <p>107 700 $</p>}
        <button className="buy">Buy</button>
      </div>
    </>
  );
};

export default Sections;
