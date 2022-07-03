import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Sections from "./components/Sections";

function App() {
  const [condition1, setCondition1] = useState(false);
  const [condition2, setCondition2] = useState(false);

  return (
    <div>
      <Header nameProject="Ma prochaine Tesla" />
      <Sections
        condition1={condition1}
        setCondition1={setCondition1}
        condition2={condition2}
        setCondition2={setCondition2}
      />
    </div>
  );
}

export default App;
