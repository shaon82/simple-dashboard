const second = document.getElementById('doughnut').getContext('2d');

new Chart(second, {
  type: 'doughnut',
  data: {
    labels: ['Accademic', 'Non-Accademic', 'Administration', 'Others'],
    datasets: [{
      label: '# of Employees',
      data: [12, 13, 10, 5],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Employee Distribution'
      }
    }
  }
});
