import React, {useState} from "react";

const DigitalStorageConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [fromUnit, setFromUnit] = useState("bytes");
    const [toUnit, setToUnit] = useState("kilobytes");
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
            bytes: 1,
            kilobytes: 1024,
            megabytes: 1048576,
            gigabytes: 1073741824,
            terabytes: 1099511627776,
            petabytes: 1125899906842624,
        };

        const fromUnitValue = parseFloat(inputValue) * units[fromUnit];
        convertedValue = fromUnitValue / units[toUnit];

        setResult(convertedValue.toFixed(2));
    };

    return (
        <div className="digital-storage-converter-container">
            <h2>Digital Storage Converter</h2>
            <div className="input-group">
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter value"
                />
                <select value={fromUnit} onChange={handleFromUnitChange}>
                    <option value="bytes">Bytes</option>
                    <option value="kilobytes">Kilobytes</option>
                    <option value="megabytes">Megabytes</option>
                    <option value="gigabytes">Gigabytes</option>
                    <option value="terabytes">Terabytes</option>
                    <option value="petabytes">Petabytes</option>
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
                    <option value="bytes">Bytes</option>
                    <option value="kilobytes">Kilobytes</option>
                    <option value="megabytes">Megabytes</option>
                    <option value="gigabytes">Gigabytes</option>
                    <option value="terabytes">Terabytes</option>
                    <option value="petabytes">Petabytes</option>
                </select>
            </div>
            <button onClick={handleConvert}>Convert</button>
        </div>
    );
};

export default DigitalStorageConverter;