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

  fetch('/runInfo') 
    .then(response => response.json())
    .then(loadInfo);

  function loadInfo(runInfo) {
    let infoElements = "";
    for (let info of runInfo) {
      infoElements += `<li>${info.date} - ${info.speed} - ${info.time} </li>`
    };
    let ul = document.getElementById("infoList");
    ul.innerHTML = infoElements;
    console.log(infoElements);
  };

  function sendData() {
    let runSpeed = document.getElementById("speed");
    let runDate = document.getElementById("date");
    let runTime = document.getElementById("time");
    let runObject = {
      speed: runSpeed.value,
      date: runDate.value,
      time: runTime.value
    }

    fetch('/runInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(runObject)
    })
    .then(response => response.json())
    .then(data => loadInfo(data));
  };

