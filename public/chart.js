let labels = [];
let distanceData = [];

function loadGraph(runInfo) {
    for (let info of runInfo) {
      labels.push(info.date);
      distanceData.push(`${info.speed * (info.time / 60)}`)
    };
    console.log(distanceData)
   
            
              const graphData = {
                labels: labels,
                datasets: [{
                  label: 'Run Data',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: distanceData,
                }]
              };
            
              const config = {
                type: 'line',
                data: graphData,
                options: {}
              };
            
              const myChart = new Chart(
                document.getElementById('myChart'),
                config
              );
      
            };

// function loadInfo(runInfo) {
//   let infoElements = "";
//   for (let info of runInfo) {
//     infoElements += `<li>${info.date} - ${info.speed} - ${info.time} </li>`
//   };
//   let ul = document.getElementById("infoList");
//   ul.innerHTML = infoElements;
//   console.log(infoElements);


//         const labels = [
//           'January',
//           'February',
//           'March',
//           'April',
//           'May',
//           'June',
//         ];
      
//         const graphData = {
//           labels: labels,
//           datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45],
//           }]
//         };
      
//         const config = {
//           type: 'line',
//           data: graphData,
//           options: {}
//         };
      
//         const myChart = new Chart(
//           document.getElementById('myChart'),
//           config
//         );

//       };
      