import React, { useContext } from "react";
import { ValueContext } from "../context/context";
import CharacterList from "./iterate";
import './output.css';
import { Link } from "react-router-dom";

export const Output = () => {
  // const chantValue = useContext(ValueContext);
  const value= useContext(ValueContext);
  

  return (
    <div className="output-background">
      <Link to='/'>
        <i className="uil uil-estate"></i>
      </Link>
      <div className="output-card">
        <span className="output-value">
          <CharacterList savedVariable={value.value}/>
        </span>
      </div>
    </div>
  );
};
