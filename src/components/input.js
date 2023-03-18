import "./input.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ValueContext } from "../context/context";

export const Input = () => {
  // Here we initialize our value context
  const { value, setValue } = useContext(ValueContext);

  const disableButton = {
    fontFamily: `'Kalam', cursive`,
    cursor: "not-allowed",
    title: "Please input some text to enable the button",
  };

  const activeButton = {
    fontFamily: `'Kalam', cursive`,
    cursor: "pointer",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
    
  };

  const handleClick = () => {
    if (value && value.length === 0) {
      alert("Field cannot be empty");
      return false;
    } else console.log(value);
    return true;
    
  };
  return (
    <div className="input-background">
      <div className="search-card">
        <form onSubmit={handleSubmit}>
          <span className="input-span">
            <input
              type="text"
              style={{ fontFamily: `'Kalam', cursive` }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Input your text"
            />
          </span>
          <span className="search-button">
            <Link
              to={value.length === 0 ? '/' : "/output"}
              onClick={handleClick}
              style={value.length === 0 ? disableButton : activeButton}
              title={
                value.length === 0
                  ? "Please input some text to enable the button"
                  : ""
              }
            >
              Go
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
