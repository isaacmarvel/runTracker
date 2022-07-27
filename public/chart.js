let labels = [];
let distanceData = [];

function loadGraph(runInfo) {
  for (let info of runInfo) {
    labels.push(info.date);
    distanceData.push(`${info.speed * (info.time / 60)}`);
  }
  console.log(distanceData);

  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "Distance in miles",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: distanceData,
      },
    ],
  };

  const config = {
    type: "line",
    data: graphData,
    options: {},
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
}
