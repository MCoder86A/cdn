// import Chart from 'chart.js/auto';
const labels = [
    'Present(%)', 'Absence(%)'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Present percentage',
        backgroundColor: ['rgb(255,99,132)', 'rgb(46, 169, 200)'],
        borderColor: ['rgb(46, 139, 192)','rgb(46, 139, 192)'],
        data: [p,a],
    }]
};

const config = {
    type:'pie',
    data: data,
    options: {
        color: 'rgb(255,255,255)'
    }
};

const myChart = new Chart(
    document.getElementById('p_percentage'),
    config
);
