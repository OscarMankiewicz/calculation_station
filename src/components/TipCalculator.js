import React, { useState } from "react";
import "./TipCalculator.css";

const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(15);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [totalTip, setTotalTip] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleBillAmountChange = (event) => {
        const amount = parseFloat(event.target.value);
        setBillAmount(amount);
    };

    const handleTipPercentageChange = (event) => {
        const percentage = parseFloat(event.target.value);
        setTipPercentage(percentage);
    };

    const handleNumberOfPeopleChange = (event) => {
        const count = parseInt(event.target.value);
        setNumberOfPeople(count);
    };

    const calculateTip = () => {
        const tip = (billAmount * tipPercentage) / 100;
        const total = billAmount + tip;
        const totalPerPerson = total / numberOfPeople;
        const tipPerPerson = tip / numberOfPeople;
        setTotalTip(tipPerPerson);
        setTotalAmount(totalPerPerson);
    };

    return (
        <div className="tip-calculator-container">
            <h2>Tip Calculator</h2>
            <div className="label-input-group">
                <label>Bill Amount:</label>
                <input
                    type="number"
                    value={billAmount}
                    onChange={handleBillAmountChange}
                />
            </div>
            <div className="label-input-group">
                <label>Tip Percentage:</label>
                <input
                    type="number"
                    value={tipPercentage}
                    onChange={handleTipPercentageChange}
                />
            </div>
            <div className="label-input-group">
                <label>Number of People:</label>
                <input
                    type="number"
                    value={numberOfPeople}
                    onChange={handleNumberOfPeopleChange}
                />
            </div>
            <button onClick={calculateTip}>Calculate Tip</button>
            <div className="result-container">
                <p>Total Tip Per Person: ${totalTip.toFixed(2)}</p>
                <p>Total Amount Per Person: ${totalAmount.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default TipCalculator;
