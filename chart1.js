const ctx = document.getElementById('lineChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: '# of Votes',
        data: [23279,3598,6769,4655,7654,7675,3656,4676,4324,2333,7654,8899],
        borderWidth: 1,
        backgroundColor:[
            'rgba(85,85,85,1)'
        ],
        borderColor: [
            'rgb(41,155,99)'
        ]
      }]
    },
    options: {
      Responsive: true
    }
  });