import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate("/welcome");
  };

  const handleNo = () => {
    alert("You said no, access denied.");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Daniella, do you still love me?</p>
        <div className="buttons">
          <button className="yes" onClick={handleYes}>
            Yes, I love you Tenzin ❤️
          </button>
          <button className="no" onClick={handleNo}>
            no
          </button>
        </div>
      </header>
    </div>
  );
}

export default Home;
