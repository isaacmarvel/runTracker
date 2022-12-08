# runTracker
This Code Louisville project was designed to help me keep track of my running progress, as well as to practice api-building and SQL databases.

In short, this website allows you to write running data into html input elements, sends that data to a SQLite database, receives data from said database, and converts into a graph using chart.js.

To run the site: use npm install to download and install all the dependencies, then run node app.js to start up the server. From there you can just open localhost:3001 in a web browser and you should be good to go. 

Features:

Create a form and save the values on click of a submit button to an external file: Technically I just have inputs and not a form I guess, but the same principle applies--my submit button send run data to my runInfo.db sqlite database.

Create an array, populate it with multiple values, retrieve at least one value, and display it in your application: My sendData() function in client.js uses a fetch request to pass my run data, as an array, into my loadGraph() function (which is in my chart.js file). loadGraph() retrieves the values from this array and displays them as a chart.js graph on the page.

Build a conversion tool that converts user input to another type and displays it: This might be a stretch, but in order to display speed, time, and the date on the same chart, I had to convert speed and time into distance. So in other words, the chart only displays distance and the date.

Visualize data in a graph: I used chart.js to display run data on the page.