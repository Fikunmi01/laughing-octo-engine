import React, {useContext} from "react";
import {ValueContext} from "../context/context";


function CharacterList(props) {
  // const { savedVariable } = props;
  const { removeString, value, charsList } = useContext(ValueContext)


  return (
    <div>
      {charsList.map((char, index) => (
        <span
          style={{
            marginRight: `1rem`,
            marginTop: `2rem`,
            marginLeft: `2rem`,
            display: "inline-block",
            backgroundColor: charsList.indexOf(char) !== index ? '#000': '',
            borderRadius: '8px',
            color: charsList.indexOf(char) !== index ? '#fff': ''
          }}
          key={index}
          onClick={() => removeString({val: char,  key: index})}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default CharacterList;
