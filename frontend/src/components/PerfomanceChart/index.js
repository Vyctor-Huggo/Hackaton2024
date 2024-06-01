import React from 'react';
import { Bar } from 'react-chartjs-2';

const StudentPerformanceChart = () => {
    const labels = ['Matemática', 'Português', 'História', 'Geografia', 'Física', 'Química', 'Biologia'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Desempenho do aluno',
                data: [85, 90, 78, 92, 88, 76, 95],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }
        ],
    };
    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                max: 100
            }
        }
    };

    return (
        <div style={{ width: '400px', height: '300px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default StudentPerformanceChart;
