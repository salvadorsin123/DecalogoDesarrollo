// --- UTILITY FUNCTIONS ---

// Helper to wrap long labels for Chart.js
function wrapLabel(str, maxChars) {
    if (str.length <= maxChars) return str;
    const words = str.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        if (currentLine.length + 1 + words[i].length <= maxChars) {
            currentLine += ' ' + words[i];
        } else {
            lines.push(currentLine);
            currentLine = words[i];
        }
    }
    lines.push(currentLine);
    return lines;
}

// Shared Tooltip Configuration for multi-line labels
const sharedTooltipConfig = {
    callbacks: {
        title: function (tooltipItems) {
            const item = tooltipItems[0];
            let label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
                return label.join(' ');
            } else {
                return label;
            }
        }
    }
};

// --- CHARTS INITIALIZATION ---

// 1. Resources Vs Wealth (Bar Chart)
const ctx1 = document.getElementById('resourceVsWealthChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: [
            wrapLabel('Países "Pobres" (Muchos Recursos)', 20),
            wrapLabel('Suiza/Japón (Pocos Recursos)', 20)
        ],
        datasets: [
            {
                label: 'Recursos Naturales',
                data: [90, 20],
                backgroundColor: '#10B981', // Green
                borderRadius: 5
            },
            {
                label: 'Nivel de Desarrollo',
                data: [25, 95],
                backgroundColor: '#2563EB', // Blue
                borderRadius: 5
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' },
            tooltip: sharedTooltipConfig,
            title: {
                display: true,
                text: 'Recursos Naturales vs. Desarrollo Real'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: { display: true, text: 'Índice Relativo (0-100)' }
            }
        }
    }
});

// 2. Mindset Radar Chart
const ctx2 = document.getElementById('mindsetRadarChart').getContext('2d');
new Chart(ctx2, {
    type: 'radar',
    data: {
        labels: [
            'Orden', 'Limpieza', 'Puntualidad', 'Honradez', 'Ahorro'
        ],
        datasets: [{
            label: 'Mentalidad Subdesarrollada',
            data: [30, 40, 20, 50, 10],
            fill: true,
            backgroundColor: 'rgba(239, 68, 68, 0.2)', // Red transparent
            borderColor: 'rgb(239, 68, 68)',
            pointBackgroundColor: 'rgb(239, 68, 68)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(239, 68, 68)'
        }, {
            label: 'Mentalidad Desarrollada',
            data: [95, 90, 100, 95, 85],
            fill: true,
            backgroundColor: 'rgba(37, 99, 235, 0.2)', // Blue transparent
            borderColor: '#2563EB',
            pointBackgroundColor: '#2563EB',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#2563EB'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: sharedTooltipConfig,
            legend: { position: 'top' }
        },
        scales: {
            r: {
                angleLines: { color: 'rgba(0,0,0,0.1)' },
                grid: { color: 'rgba(0,0,0,0.1)' },
                pointLabels: {
                    font: { size: 12, weight: 'bold' },
                    color: '#1F2937'
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});

// 3. Ingredients of Success (Doughnut Chart)
const ctx3 = document.getElementById('ingredientsChart').getContext('2d');
new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: [
            wrapLabel('Actitud y Valores (Decálogo)', 15),
            wrapLabel('Recursos Materiales', 15),
            wrapLabel('Habilidad Técnica', 15)
        ],
        datasets: [{
            label: 'Impacto en el Desarrollo',
            data: [80, 10, 10],
            backgroundColor: [
                '#2563EB', // Blue
                '#F59E0B', // Amber
                '#10B981'  // Green
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: sharedTooltipConfig,
            legend: { position: 'right' }
        }
    }
});
