import React, {useState} from "react";

const SpeedConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [fromUnit, setFromUnit] = useState("miles/hour");
    const [toUnit, setToUnit] = useState("kilometers/hour");
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
            "miles/hour": 1,
            "kilometers/hour": 0.60934,
            "meters/second": 2.23694,
            "feet/second": 1.46667,
        };

        const fromUnitValue = parseFloat(inputValue) * units[fromUnit];
        convertedValue = fromUnitValue / units[toUnit];

        setResult(convertedValue.toFixed(2));
    };

    return (
        <div className="speed-converter-container">
            <h2>Speed Converter</h2>
            <div className="input-group">
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter value"
                />
                <select value={fromUnit} onChange={handleFromUnitChange}>
                    <option value="miles/hour">Miles/Hour</option>
                    <option value="kilometers/hour">Kilometers/Hour</option>
                    <option value="meters/second">Meters/Second</option>
                    <option value="feet/second">Feet/Second</option>
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
                    <option value="miles/hour">Miles/Hour</option>
                    <option value="kilometers/hour">Kilometers/Hour</option>
                    <option value="meters/second">Meters/Second</option>
                    <option value="feet/second">Feet/Second</option>
                </select>
            </div>
            <button onClick={handleConvert}>Convert</button>
        </div>
    );
};

export default SpeedConverter;