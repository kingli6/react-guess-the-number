import Axios from "axios";
import { useEffect, useState } from "react";

export default function CatFacts() {
  const [catFact, setCatFact] = useState(null);
  const [showFact, setShowFact] = useState(false);
  const [buttonName, setButtonName] = useState(
    "Would you like a fact about cats!?"
  );
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  const trigger = () => {
    fetchCatFact();
    setButtonName("Another one?");
    setShowFact(true);
  };
  return (
    <div className="catFacts">
      <br />
      <button onClick={trigger}>{buttonName}</button>
      {showFact && <p>{catFact}</p>}
    </div>
  );
}
