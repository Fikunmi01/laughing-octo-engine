import React, {createContext, useEffect, useState, useContext, useMemo} from "react";

// Here we create our value context
const ValueContext = createContext({
    value: "",
    setValue: () => {
    },
    charsList: [],
});

function Context(props) {
    const [value, setValue] = useState("");
    const [charsList, setCharsList] = useState([]);
    useEffect(() => {
        if (value !== '') {
            //Store the chars in a localstorage to prevent wiping from store once the input is cleared
            localStorage.setItem('char', value.replaceAll(' ', '').split(''))
            //Get and Replace comma  from the localstorage and Convert the characters to an array before storing
            setCharsList(localStorage.getItem('char').split(','))
        }
    }, [value])

    const removeString = (e) => {
        let {val, key} = e;
        let filteredResult = charsList.filter((item, id) => (id !== key));
        setCharsList(filteredResult)
    }

    return (
        <ValueContext.Provider value={{value, setValue, charsList, removeString}}>
            {props.children}
        </ValueContext.Provider>
    );
}

export {ValueContext, Context};

