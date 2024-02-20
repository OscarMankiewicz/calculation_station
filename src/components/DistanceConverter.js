import React, { useState } from "react";

const DistanceConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [fromUnit, setFromUnit] = useState("meters");
    const [toUnit, setToUnit] = useState("kilometers");
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
            meters: 1,
            kilometers: 1000,
            miles: 1609.34,
            cm: 0.01,
            mm: 0.001,
            inches: 0.0254,
            feet: 0.3048,
            yards: 0.9144,
        };

        const fromUnitValue = parseFloat(inputValue) * units[fromUnit];
        convertedValue = fromUnitValue / units[toUnit];

        setResult(convertedValue.toFixed(2)); 
    };

    return (
        <div className="distance-converter-container">
            <h2>Distance Converter</h2>
            <div className="input-group">
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter value"
                />
                <select value={fromUnit} onChange={handleFromUnitChange}>
                    <option value="meters">Meters</option>
                    <option value="kilometers">Kilometers</option>
                    <option value="miles">Miles</option>
                    <option value="cm">Centimeters</option>
                    <option value="mm">Millimeters</option>
                    <option value="inches">Inches</option>
                    <option value="feet">Feet</option>
                    <option value="yards">Yards</option>
                </select>
            </div>
            <div className="conversion-arrow">=&#62;</div>
            <div className="input-group">
                <input
                    type="text"
                    value={result}
                    readOnly
                />
                <select value={toUnit} onChange={handleToUnitChange}>
                    <option value="meters">Meters</option>
                    <option value="kilometers">Kilometers</option>
                    <option value="miles">Miles</option>
                    <option value="cm">Centimeters</option>
                    <option value="mm">Millimeters</option>
                    <option value="inches">Inches</option>
                    <option value="feet">Feet</option>
                    <option value="yards">Yards</option>
                </select>
            </div>
            <button onClick={handleConvert}>Convert</button>
        </div>
    );
};

export default DistanceConverter;
