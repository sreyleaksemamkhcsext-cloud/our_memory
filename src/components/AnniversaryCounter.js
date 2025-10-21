import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const AnniversaryCounter = () => {
    // Set your anniversary date here (YYYY, MM-1, DD)
    const anniversaryDate = new Date(2023, 0, 1); // January 1, 2023
    const [timeTogether, setTimeTogether] = useState({});

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();
            const diff = now - anniversaryDate;

            const years = now.getFullYear() - anniversaryDate.getFullYear();
            const months = now.getMonth() - anniversaryDate.getMonth();
            const days = now.getDate() - anniversaryDate.getDate();

            const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor(diff / (1000 * 60 * 60));
            const totalMinutes = Math.floor(diff / (1000 * 60));

            setTimeTogether({
                years,
                months: months < 0 ? months + 12 : months,
                days: days < 0 ? 0 : days,
                totalDays,
                totalHours,
                totalMinutes
            });
        };

        calculateTime();
        const interval = setInterval(calculateTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gradient-to-r from-romantic-rose to-romantic-purple text-white py-6 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-2xl font-romantic font-bold mb-4 flex items-center justify-center">
                        {/* <FaHeart className="mr-2" />
            Together For
            <FaHeart className="ml-2" /> */}
                    </h2>
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                        <div className="text-center p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                            <div className="text-3xl font-bold">{timeTogether.years || 0}</div>
                            <div className="text-sm opacity-90">Years</div>
                        </div>
                        <div className="text-center p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                            <div className="text-3xl font-bold">{timeTogether.months || 0}</div>
                            <div className="text-sm opacity-90">Months</div>
                        </div>
                        <div className="text-center p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                            <div className="text-3xl font-bold">{timeTogether.days || 0}</div>
                            <div className="text-sm opacity-90">Days</div>
                        </div>
                        <div className="text-center p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                            <div className="text-3xl font-bold">{timeTogether.totalDays || 0}</div>
                            <div className="text-sm opacity-90">Total Days</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AnniversaryCounter;