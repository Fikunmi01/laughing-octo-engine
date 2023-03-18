import React from "react";

function listCharacters(str) {
  // check if its a string 
  const charArray = str.toString().split("");
  return charArray;
}

function CharacterList(props) {
  const { savedVariable } = props;
  const charList = listCharacters(savedVariable);


  return (
    <div>
      {charList.map((char, index) => (
        <span
          style={{
            marginRight: `1rem`,
            marginTop: `2rem`,
            marginLeft: `2rem`,
            display: "inline-block",
          }}
          key={index}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default CharacterList;
