import React, { useState } from "react";

const VolumeConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [fromUnit, setFromUnit] = useState("ml");
    const [toUnit, setToUnit] = useState("L");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFromUnitChange = (event) => {
        setFromUnit(event.target.value);
    };

    const handleToUnitChange = (event) => {
        setToUnit(event.target.value);
    };

    const convertVolume = () => {
        let convertedValue;

        const units = {
            ml: 1,
            L: 1000,
            gallons: 3785.41,
        };

        const fromValueInMl = parseFloat(inputValue) * units[fromUnit];
        convertedValue = fromValueInMl / units[toUnit];

        setOutputValue(convertedValue.toFixed(2));
    };

    return (
        <div>
            <h2>Volume Converter</h2>
            <input type="number" value={inputValue} onChange={handleInputChange} />
            <select value={fromUnit} onChange={handleFromUnitChange}>
                <option value="ml">ml</option>
                <option value="L">L</option>
                <option value="gallons">Gallons</option>
            </select>
            <select value={toUnit} onChange={handleToUnitChange}>
                <option value="ml">ml</option>
                <option value="L">L</option>
                <option value="gallons">Gallons</option>
            </select>
            <button onClick={convertVolume}>Convert</button>
            <div>{outputValue}</div>
        </div>
    );
};

export default VolumeConverter;
