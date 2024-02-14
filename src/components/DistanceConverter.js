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

        // Convert from meters
        if (fromUnit === "meters") {
            if (toUnit === "kilometers") {
                convertedValue = parseFloat(inputValue) / 1000;
            } else if (toUnit === "miles") {
                convertedValue = parseFloat(inputValue) / 1609.344;
            }
        }
        // Convert from kilometers
        else if (fromUnit === "kilometers") {
            if (toUnit === "meters") {
                convertedValue = parseFloat(inputValue) * 1000;
            } else if (toUnit === "miles") {
                convertedValue = parseFloat(inputValue) / 1.609344;
            }
        }
        // Convert from miles
        else if (fromUnit === "miles") {
            if (toUnit === "meters") {
                convertedValue = parseFloat(inputValue) * 1609.344;
            } else if (toUnit === "kilometers") {
                convertedValue = parseFloat(inputValue) * 1.609344;
            }
        }

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
                </select>
            </div>
            <div className="conversion-arrow">&#62;</div>
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
                </select>
            </div>
            <button onClick={handleConvert}>Convert</button>
        </div>
    );
};

export default DistanceConverter;
