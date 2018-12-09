// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the filter button
var filter = d3.select("#filter-btn");


tableData.forEach((alienSighting) => {
  var row = tbody.append("tr");
  Object.entries(alienSighting).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});


filter.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(data => data.datetime === inputValue);

  console.log(filteredData);
  
  d3.select("tbody").html("");

  filteredData.forEach((alienDateSighting) => {
    var row = tbody.append("tr");
    Object.entries(alienDateSighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

  
});


