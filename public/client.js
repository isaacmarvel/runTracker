function openMenu() {
      let x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
  } 

  //function validateForm() {

  //}

  fetch('/run/info') 
    .then(response => response.json())
    .then(loadInfo);

  

  function sendData() {
    let runSpeed = document.getElementById("speed");
    let runDate = document.getElementById("date");
    let runTime = document.getElementById("time");
    let runObject = {
      speed: runSpeed.value,
      date: runDate.value,
      time: runTime.value
    }

    fetch('/run/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(runObject)
    })
    .then(response => response.json())
    .then(data => loadGraph(data));
  };

