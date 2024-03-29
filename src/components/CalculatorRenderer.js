import React from 'react';
import TipCalculator from './TipCalculator';
import DistanceConverter from './DistanceConverter';
import VolumeConverter from './VolumeConverter';
import MassConverter from './MassConverter';
import HypotenuseCalculator from './HypotenuseCalculator';
import SpeedConverter from './SpeedConverter';
import DigitalStorageConverter from './DigitalStorageConverter';
import AreaConverter from './AreaConverter';
import TemperatureConverter from './TemperatureConverter';
import TimeConverter from './TimeConverter';

const renderCalculator = (selectedCalculator) => {
    switch (selectedCalculator) {
        case 'tip':
            return <TipCalculator />;
        case 'distance':
            return <DistanceConverter />;
        case 'volume':
            return <VolumeConverter />;
        case 'mass':
            return <MassConverter />;
        case 'speed':
            return <SpeedConverter />;
        case 'digital-storage':
            return <DigitalStorageConverter />;
        case 'hypotenuse':
            return <HypotenuseCalculator />;
        case 'area':
            return <AreaConverter />;
        case 'temperature':
            return <TemperatureConverter />;
        case 'time':
            return <TimeConverter />;
        default:
            return null;
    }
};

export default renderCalculator;