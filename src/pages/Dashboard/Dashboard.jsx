import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Progress from '../../Components/pogress/Progress';
import MainCharts from '../../Components/chart/MainCharts';



const Dashboard = () => {
    return (
        <div className='z-0'>
       <Banner/>
       <Progress></Progress>
       <MainCharts/>
        </div>
    );
};

export default Dashboard;