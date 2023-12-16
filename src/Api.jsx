import './Api.css'
import { useState } from "react";

const Api = () => {

  const [catFact, setCatFact] = useState("");

  const showFact = () => {
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {setCatFact(data.fact)});
  }

  return (
    <div className='cat'>
      <button onClick={showFact}>Generate a cat fact</button>
      <p>{catFact}</p>
    </div>
  )
}

export default Api