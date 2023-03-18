  import React, { createContext, useEffect, useState, useContext } from "react";

  // Here we create our value context
  const ValueContext = createContext({
    value: "",
    setValue: () => {},
    chantValue: "",
    setChantValue: () => {},
  });

  function Context(props) {
    const [value, setValue] = useState("");
    const [chantValue, setChantValue] = useState("");

    return (
      <ValueContext.Provider value={{ value, setValue, chantValue, setChantValue }}>
        {props.children}
      </ValueContext.Provider>
    );
  }

  export { ValueContext, Context };

