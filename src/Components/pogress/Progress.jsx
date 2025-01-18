import React from 'react';
import { FaUsers, FaDownload, FaCheckCircle } from 'react-icons/fa';

const Progress = () => {
    return (
        <div className='flex flex-col items-center mt-5'>
            <div className="flex items-center gap-8 lg:flex-row flex-col ">
                {/* Total Active Users */}
                <div className="stat shadow-md py-5 px-10 rounded-lg">
                    <div className="stat-figure pl-11 text-secondary">
                        <FaUsers className="inline-block h-8 w-8 text-blue-500" />
                    </div>
                    <div className="stat-title">Total Active Users</div>
                    <div className="stat-desc">Growth: 12% this month</div>
                    <div className="stat-value text-blue-600">25K</div>
                  
                </div>

                {/* Total Downloads */}
                <div className="stat shadow-md py-5 px-10 rounded-lg">
                    <div className="stat-figure pl-11 text-secondary">
                        <FaDownload className="inline-block h-8 w-8 text-green-500" />
                    </div>
                    <div className="stat-title">Total Downloads</div>
                    <div className="stat-desc">Increase: 25% in Q1</div>
                    <div className="stat-value text-green-600">120K</div>
                </div>

                {/* Total Installations */}
                <div className="stat shadow-md py-5 px-10 rounded-lg">
                    <div className="stat-figure pl-11 text-secondary">
                        <FaCheckCircle className="inline-block h-8 w-8 text-purple-500" />
                    </div>
                    <div className="stat-title">Installed Apps</div>
                    <div className="stat-desc">Completion: 80%</div>
                    <div className="stat-value text-purple-600">95K</div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
