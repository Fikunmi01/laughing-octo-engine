import React, { useContext } from "react";
import { ValueContext } from "../context/context";
import CharacterList from "./iterate";
import './output.css';

export const Output = () => {
  // const chantValue = useContext(ValueContext);
  const value= useContext(ValueContext);
  

  return (
    <div className="output-background">
      <div className="output-card">
        <span className="output-value">
          <CharacterList savedVariable={value.value}/>
        </span>
      </div>
    </div>
  );
};
