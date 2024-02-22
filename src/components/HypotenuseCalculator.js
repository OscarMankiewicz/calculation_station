import React, {useState} from "react";

const HypotenuseCalculator = () => {
    const [sideA, setSideA] = useState("");
    const [sideB, setSideB] = useState("");
    const [result, setResult] = useState("");

    const handleSideAChange = (event) => {
        setSideA(event.target.value);
    };

    const handleSideBChange = (event) => {
        setSideB(event.target.value);
    };

    const handleCalculate = () => {
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);
        const c = Math.sqrt(a * a + b * b);
        setResult(c.toFixed(2));
    };

    return (
        <div className="hypotenuse-calculator-container">
            <h2>Hypotenuse Calculator</h2>
            <div className="label-input-group">
                <label>Side A:</label>
                <input
                    type="number"
                    value={sideA}
                    onChange={handleSideAChange}
                />
            </div>
            <div className="label-input-group">
                <label>Side B:</label>
                <input
                    type="number"
                    value={sideB}
                    onChange={handleSideBChange}
                />
            </div>
            <button onClick={handleCalculate}>Calculate Hypotenuse</button>
            <div className="result-container">
                <p>Hypotenuse: {result}</p>
            </div>
        </div>
    );
};

export default HypotenuseCalculator;