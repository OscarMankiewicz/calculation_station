import React, {useState} from "react";

const TemperatureConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [fromUnit, setFromUnit] = useState("celsius");
    const [toUnit, setToUnit] = useState("fahrenheit");
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
            celsius: {
                fahrenheit: (celsius) => (celsius * 9/5) + 32,
                kelvin: (celsius) => celsius + 273.15,
            },
            fahrenheit: {
                celsius: (fahrenheit) => (fahrenheit - 32) * 5/9,
                kelvin: (fahrenheit) => (fahrenheit - 32) * 5/9 + 273.15,
            },
            kelvin: {
                celsius: (kelvin) => kelvin - 273.15,
                fahrenheit: (kelvin) => (kelvin - 273.15) * 9/5 + 32,
            },
        };

        convertedValue = units[fromUnit][toUnit](parseFloat(inputValue));
        setResult(convertedValue.toFixed(2));
    };

    return (
        <div className="temperature-converter-container">
            <h2>Temperature Converter</h2>
            <div className="input-group">
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter value"
                />
                <select value={fromUnit} onChange={handleFromUnitChange}>
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
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
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
            </div>
            <button onClick={handleConvert}>Convert</button>
        </div>
    )
};

export default TemperatureConverter;