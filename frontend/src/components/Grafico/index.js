import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// eslint-disable-next-line no-empty-pattern
const StudentAttendanceChart = ({ }) => {
    const chartRef = useRef(null); // Referência para o gráfico
    let chartInstance = useRef(null); // Referência para a instância do gráfico

    // Frequências arbitrárias para teste
    const totalAttendance = 80; // 80% de presença
    const totalAbsences = 20; // 20% de faltas

    useEffect(() => {
        const createChart = () => {
            const ctx = chartRef.current.getContext('2d');

            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Presença', 'Faltas'],
                    datasets: [{
                        data: [totalAttendance, totalAbsences],
                        backgroundColor: ['#0088FE', '#FF8042'],
                        borderColor: '#fff',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Frequência do Aluno'
                        }
                    }
                }
            });
        };

        createChart(); // Criar o gráfico inicialmente
    }, []); // Sem dependências, o gráfico é criado apenas uma vez

    return (
        <div style={{ width: '50%', height: 'auto' }}>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default StudentAttendanceChart;
