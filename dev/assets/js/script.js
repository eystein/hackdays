$(document).ready(function () {
  $.getJSON("assets/js/locations.json", function (data) {

    var location = data['Location'];
    console.log(location);



    var arrItems = [];        // The array to store JSON items

    $.each(location, function (index, value) {
      arrItems.push(value);   // Push the values inside the array
    });

    // Extract value for table header
    var col = [];
    for (var i = 0; i < arrItems.length; i++ ) {
      for (var key in arrItems[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }

    // Crate dynamic table
    var table = document.createElement("table");

    // Create HTML table header row using the extracted headers above

    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");
      th.innerHTML = col[i];
      tr.appendChild(th);
    }

    // Add JSON data to the table as rows
    for (var i = 0; i < arrItems.length; i++) {
      tr = table.insertRow(-1);

      for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = arrItems[i][col[j]];
      }
    }

    // Add the newly created table with JSON data to a container
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

  });
});
