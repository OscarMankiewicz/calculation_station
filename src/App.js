import React, { useState } from 'react';
import './App.css';

// Import calculator components
import renderCalculator from './components/CalculatorRenderer';

//Import calculator data
import calculatorData from './data/calculatorData';


function App() {
  const [selectedCalculator, setSelectedCalculator] = useState(calculatorData[0].id);

  const handleCalculatorChange = (calculatorId) => {
    setSelectedCalculator(calculatorId);
  };

  return (
    <div className="layout">
      <header>Calculation Station</header>
      <nav>
        {calculatorData.map(calculator => (
          <button key={calculator.id} onClick={() => handleCalculatorChange(calculator.id)}>
            {calculator.label}
          </button>
        ))}
      </nav>
      <main>
        {renderCalculator(selectedCalculator)}
      </main>
      <article className='results'>Results</article>
      <footer>Developed by Oscar Mankiewicz</footer>
    </div>
  );
}

export default App;
