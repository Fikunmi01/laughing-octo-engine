import React from "react";

function listCharacters(str) {
  const charArray = str.toString().split("");
  return charArray;
}

function CharacterList(props) {
  const { savedVariable, onDelete } = props;
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
