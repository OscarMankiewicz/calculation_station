import React, { useState } from 'react';

const MassConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [fromUnit, setFromUnit] = useState("g");
    const [toUnit, setToUnit] = useState("kg");
    const [result, setResult] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFromUnitChange = (event) => {
        setFromUnit(event.target.value);
    };

    const handleToUnitChange = (event) => {
        setToUnit(event.target.value);
    };

    const handleConvert = () => {
        let convertedValue;

        const units = {
            g: 1,
            kg: 1000,
            oz: 28.3495,
            pounds: 453.592,
            tons: 907185,
        };

        const fromUnitValue = parseFloat(inputValue) * units[fromUnit];
        convertedValue = fromUnitValue / units[toUnit];

        setResult(convertedValue.toFixed(2));
    };

    return (
        <div>
            <h2>Mass Converter</h2>
            <input type="number" value={inputValue} onChange={handleInputChange} />
            <select value={fromUnit} onChange={handleFromUnitChange}>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="oz">oz</option>
                <option value="pounds">pounds</option>
                <option value="tons">tons</option>
            </select>
            <select value={toUnit} onChange={handleToUnitChange}>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="oz">oz</option>
                <option value="pounds">pounds</option>
                <option value="tons">tons</option>
            </select>
            <button onClick={handleConvert}>Convert</button>
            <div>{result}</div>
        </div>
    )
};

export default MassConverter;