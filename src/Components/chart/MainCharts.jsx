import React from 'react';
import DonutChart from './Circule';
import LineDemoChart from './Line';

const MainCharts = () => {
    return (
        <div className='mt-6'>
           <div className='flex items-center justify-center flex-col lg:flex-row gap-4'>
           <DonutChart/>
           <LineDemoChart/>
           </div>
        </div>
    );
};

export default MainCharts;