import React from 'react';
import TipCalculator from './TipCalculator';

const renderCalculator = (selectedCalculator) => {
    switch (selectedCalculator) {
      case 'tip':
        return <TipCalculator />;
      default:
        return null;
    }
};

export default renderCalculator;