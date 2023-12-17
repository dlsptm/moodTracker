 // setup
 const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Mood Tracker",
      data: [],
      backgroundColor: ["rgb(3, 14, 74)"],
      borderColor: ["rgb(3, 14, 74)"],
      borderWidth: 1,
      tension: 0.5,
    },
  ],
};

// config
const config = {
  type: "line",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (context) => {
            let response;

            switch (context) {
              case 0:
                response = "sad";
                break;
              case 1:
                response = "tired";
                break;
              case 2:
                response = "good";
                break;
              case 3:
                response = "happy";
                break;
            }
            return response;
          },
        },
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config); 

const moodBtns = document.querySelectorAll('button')

let moodData = myChart.data.datasets[0].data;
let moodLabel = myChart.data.labels;

let minutes = Number(new Date().getMinutes().toLocaleString('fr', {timeZone:"Europe/Paris"}))

let date = new Date().toLocaleString('fr', {timeZone:"Europe/Paris"})

localStorage.setItem('minute', minutes)

const minute = Number(localStorage.getItem('minute'));



setTimeout(() => {
  console.log("Retardée d'une seconde.");
}, 600000);

moodBtns.forEach(moodBtn => {
  moodBtn.addEventListener('click', () => {
    moodData.push(Number(moodBtn.value));

    removeData(myChart);

    myChart.update();

    console.log(moodData.length)
  })
})


const removeData = (chart) => {
  if (moodData.length > moodLabel.length) {
  chart.data.datasets.forEach((dataset) => {
      dataset.data.length = 0;
  });
  chart.update();
  }
}

//**************** CALENDAR ***********************/

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
}); 