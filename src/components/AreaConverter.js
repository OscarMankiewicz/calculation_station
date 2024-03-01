import React, { useState } from "react";

const AreaConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [fromUnit, setFromUnit] = useState("square meters");
    const [toUnit, setToUnit] = useState("square kilometers");
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
            "square meters": 1,
            "square kilometers": 1000000,
            "square miles": 2590000,
            "square feet": 0.092903,
            "square yards": 0.836127,
            "square inches": 0.00064516,
            "hectares": 10000,
            "acres": 4046.86,
        };

        const fromUnitValue = parseFloat(inputValue) * units[fromUnit];
        convertedValue = fromUnitValue / units[toUnit];

        setResult(convertedValue.toFixed(2));
    };

    return (
        <div className="area-converter-container">
            <h2>Area Converter</h2>
            <div className="input-group">
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter value"
                />
                <select value={fromUnit} onChange={handleFromUnitChange}>
                    <option value="square meters">Square Meters</option>
                    <option value="square kilometers">Square Kilometers</option>
                    <option value="square miles">Square Miles</option>
                    <option value="square feet">Square Feet</option>
                    <option value="square yards">Square Yards</option>
                    <option value="square inches">Square Inches</option>
                    <option value="hectares">Hectares</option>
                    <option value="acres">Acres</option>
                </select>
            </div>
            <div className="conversion-arrow">=&#62;</div>
            <div className="input-group">
                <input
                    type="number"
                    value={result}
                    readOnly
                />
                <select value={toUnit} onChange={handleToUnitChange}>
                    <option value="square meters">Square Meters</option>
                    <option value="square kilometers">Square Kilometers</option>
                    <option value="square miles">Square Miles</option>
                    <option value="square feet">Square Feet</option>
                    <option value="square yards">Square Yards</option>
                    <option value="square inches">Square Inches</option>
                    <option value="hectares">Hectares</option>
                    <option value="acres">Acres</option>
                </select>
            </div>
            <button onClick={handleConvert}>Convert</button>
        </div>
    );  
};

export default AreaConverter;