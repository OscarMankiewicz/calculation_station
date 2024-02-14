import React, { useState } from "react";

const VolumeConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [fromUnit, setFromUnit] = useState("ml");
    const [toUnit, setToUnit] = useState("L");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFromUnitChange = (e) => {
        setFromUnit(e.target.value);
    };

    const handleToUnitChange = (e) => {
        setToUnit(e.target.value);
    };

    const convertVolume = () => {
        let result;

        // Convert from milliliters
        if (fromUnit === "ml") {
            if (toUnit === "L") {
                result = parseFloat(inputValue) / 1000;
            } else if (toUnit === "gallons") {
                result = parseFloat(inputValue) / 3785.41;
            }
        }

        // Convert from liters
        else if (fromUnit === "L") {
            if (toUnit === "ml") {
                result = parseFloat(inputValue) * 1000;
            } else if (toUnit === "gallons") {
                result = parseFloat(inputValue) * 0.264172;
            }
        }

        // Convert from gallons
        else if (fromUnit === "gallons") {
            if (toUnit === "ml") {
                result = parseFloat(inputValue) * 3785.41;
            } else if (toUnit === "L") {
                result = parseFloat(inputValue) * 3.78541;
            }
        }

        setOutputValue(result.toFixed(2));
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
