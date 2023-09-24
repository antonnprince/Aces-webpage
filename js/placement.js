Chart.defaults.color = '#ffffff';


const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [
          'Cisco',
          'TCS',
          'Cognizant',
            'ABSYZ',
            "EY",
            "Tata Elxsi",
            "IBM",
            "L&T",
            "SAP",
            "Anora"
        ],
        datasets: [{
          label: '2023 Batch',
          data: [4, 19, 2, 3,3, 6,2, 5,0,0],
          hoverOffset: 4
        }
        ,
        {
            label: '2024 Batch',
            data: [2,0,0,0,0,0,0,0, 1,1],
            hoverOffset: 4
          }
    ]
    },
    options: {
        indexAxis: 'y'
    }
  });