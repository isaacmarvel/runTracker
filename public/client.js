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

function loadInfo(info) {
  let infoElements = "";
  for (let info of runInfo) {
    infoElements += `<li>${info.date} - ${info.speed} - ${info.time} </li>`
  };
  let ul = document.getElementById("infoList");
  ul.innerHTML = infoElements;
  console.log(infoElements);
};

function createNewInfo() {
  let runSpeed = document.getElementById("speed");
  let runDate = document.getElementById("date");
  let runTime = document.getElementById("time");
  let runObject = {
    speed: speed.value,
    date: date.value,
    time: time.value
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