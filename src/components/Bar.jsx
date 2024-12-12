import { Chart as ChartJS, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register necessary Chart.js components for Bar chart
ChartJS.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = (info) => {
    // console.log("Info ", info);
    const { data } = info;
    if (!data) {
        return <div>Loading...</div>; // Add a fallback UI
      }
    // console.log("bar chart data", data);

    return (
        <>
            <div className="absolute bg-white border-2 border-black rounded-lg left-[200px] inline-block p-4">
                <div className="w-[800px]">
                    <Bar
                        data={{
                            labels: [
                                "Emotional Well Being",
                                "Stress and Anxiety",
                                "Social Relationships",
                                "Self Esteem",
                            ],
                            datasets: [
                                {
                                    label: "Mental Wellness",
                                    data: [
                                        data.emotionalWellBeing * 10,
                                        data.stressAndAnxiety * 10,
                                        data.socialRelationships * 10,
                                        data.selfEsteem * 10,
                                    ],
                                    backgroundColor: [
                                        "rgb(255, 99, 132)",
                                        "rgb(54, 162, 235)",
                                        "rgb(255, 205, 86)",
                                        "rgb(75, 192, 192)",
                                    ],
                                    borderColor: [
                                        "rgb(255, 99, 132)",
                                        "rgb(54, 162, 235)",
                                        "rgb(255, 205, 86)",
                                        "rgb(75, 192, 192)",
                                    ],
                                    borderWidth: 2,
                                },
                            ],
                        }}
                        options={{
                            maintainAspectRatio: false,
                        }}
                        height={600}
                        width={800}
                        
                    />
                </div>
            </div>
        </>
    );
};

export default BarChart;
