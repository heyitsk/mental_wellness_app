import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";  
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
import { format } from 'date-fns';

const MoodGraph = () => {
    const [moodHistory, setMoodHistory] = useState([]);

    useEffect(() => {
        fetchMoodHistory();
    }, []);

    const fetchMoodHistory = async () => {
        try {
            const userI = localStorage.getItem("userId");
            if (!userI) {
                alert("User ID not found!");
                return;
            }
            const response = await axios.get(`https://login-signup-page-3z09.onrender.com/user/moods?userId=${userI}`);
            console.log("mood fetched",response.data);
            setMoodHistory(response.data.moods);
            console.log(response.data.moods)
        } catch (error) {
            console.error("Error fetching mood history:", error);
        } 
    };

    const chartData = {
        labels: moodHistory.map((entry) => format(new Date(entry.date), 'dd/MM/yyyy HH:mm:ss')), 
        datasets: [
            {
                label: "Mood",
                data: moodHistory.map((entry) => entry.moodValue), // Assuming each mood entry has a `moodValue` field
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
            },
        ],
    };
    const chartOptions = {
        options: {
            
            responsive: true,
            interaction: {
              intersect: false,
              axis: 'x'
            },
            plugins: {
              title: {
                display: true,
                text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
              }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Mood Value',
                    },
                },
            },
          }
    }

    return (
        <>
            <div className="absolute bg-white border-2 border-black rounded-lg right-[150px] inline-block p-4 top-[350px] w-[600px]">
                
                    <Line 
                    data={chartData} 
                    options={chartOptions}
                    
                    />
                
            </div>
        </>
    );
};

export default MoodGraph;
