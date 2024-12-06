import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";


ChartJS.register(Tooltip, Legend, ArcElement)

const PieChart = (info) => {
    console.log("Info ",info);
    const {data} =  info
    console.log("pie data",data);
     
    
    return(
        <>
        <div className=" absolute bg-white border-2 border-black rounded-lg left-[200px] inline-block p-4">


            <div className="w-96">
                <Pie
                    data={{
                        labels: [
                            'emotional Well Being',
                            'stress And Anxiety',
                            'social Relationships',
                            'self Esteem'
                          ],
                        datasets:[{
                            label:"mental wellness",
                            data:[
                                (data.emotionalWellBeing)*10,
                                 (data.stressAndAnxiety)*10, 
                                 (data.socialRelationships)*10,
                                  (data.selfEsteem)*10
                                ],
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                "rgb(75, 192, 192)"
                              ],
                            borderColor:[
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                "rgb(75, 192, 192)"
                            ],
                            borderRadius:[
                                "outerStart"
                            ],
                            hoverOffset: 4

                        }]
                    }}
                    // options={{
                    //     maintainAspectRatio: false,
                    //     responsive: true, 
                    // }}
                />

            </div>
        </div>
        </>
    )
}
export default PieChart;