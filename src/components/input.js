import "./input.css";
import React, {useContext, useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ValueContext} from "../context/context";

export const Input = () => {
    let navigate = useNavigate()
    // Here we initialize our value context && states
    const {value, setValue} = useContext(ValueContext);
    let [error, setErrors] = useState(false);
    let [typing, setTyping] = useState(false);
    let [cachedValue, setCachedValue] = useState(value);


    //=======Styles
    const disableButton = {
        fontFamily: `'Kalam', cursive`,
        cursor: "not-allowed",
        title: "Please input some text to enable the button",
    };
    const activeButton = {
        fontFamily: `'Kalam', cursive`,
        cursor: "pointer",
    };
    //========

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '' || value === null) setErrors(true);
        navigate("/output");
        setValue('')
    };

    const watchInputChange = (e) => {
        setTyping(true);
        setValue(e.target.value);
    }

    //Watch the value and check to know when the field is empty then alert the  error
    useEffect(() => {
        if (typing) {
            setErrors(value === '');
        }
    }, [value])

    return (
        <div className="input-background">
            <div className="search-card">
                <form onSubmit={handleSubmit} style={{display: 'flex', gap: '0.4rem', alignItems: 'center'}}>
                    <div className="input-span">
                        <input
                            type="text"
                            style={{fontFamily: `'Kalam', cursive`, borderColor: error && 'red'}}
                            value={value}
                            onChange={watchInputChange}
                            placeholder="Input your text"
                        />
                        {
                            error && (
                                <p style={{color: 'red', fontSize: '1em', marginTop: '0.8rem'}}>Sorry but you have to fill
                                    out the field</p>)
                        }

                    </div>

                    <button className="search-button" style={value.length === 0 ? disableButton : activeButton}
                            type={'submit'}>
                        Proceed
                    </button>
                </form>
            </div>
        </div>
    );
};
