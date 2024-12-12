import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";  
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { format } from 'date-fns';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MoodGraph = () => {
    const [moodHistory, setMoodHistory] = useState([]);

    useEffect(() => {
        fetchMoodHistory();
    });

    const fetchMoodHistory = async () => {
        try {
            const userI = localStorage.getItem("userId")
            if (!userI) {
                // alert("User ID not found!");
                return;
            }
            const response = await axios.get(`https://login-signup-page-3z09.onrender.com/user/moods?userId=${userI}`);
            if (response.data && response.data.moods) {
                setMoodHistory(response.data.moods);
            } else {
                console.error("Unexpected response structure:", response.data);
            }
        } catch (error) {
            console.error("Error fetching mood history:", error);
        }
    };

    
    const chartData = useMemo(() => ({
        labels: moodHistory.map((entry) => format(new Date(entry.date), 'dd/MM/yyyy')), 
        datasets: [
            {
                label: "Mood",
                data: moodHistory.map((entry) => entry.moodValue),
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
            },
        ],
    }), [moodHistory]);

    const chartOptions = {
        responsive: true,
        interaction: {
            intersect: false,
            axis: 'x',
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                min: 0,
                max: 5,
                ticks: {
                    stepSize: 1,
                },
                title: {
                    display: true,
                    text: 'Mood Value',
                },
            },
        },
    };

    return (
        <div className="absolute bg-white border-2 border-black rounded-lg p-4 w-full max-w-[600px] mx-auto top-[350px] right-[140px]">
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default MoodGraph;
