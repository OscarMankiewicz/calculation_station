import React from 'react';
import TipCalculator from './TipCalculator';
import DistanceConverter from './DistanceConverter';
import VolumeConverter from './VolumeConverter';

const renderCalculator = (selectedCalculator) => {
    switch (selectedCalculator) {
        case 'tip':
            return <TipCalculator />;
        case 'distance':
            return <DistanceConverter />;
        case 'volume':
            return <VolumeConverter />;
        default:
            return null;
    }
};

export default renderCalculator;