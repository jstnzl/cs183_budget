function categories(){
  new Chart(document.getElementById("pieChart"), {
      type: 'pie',
      data: {
        labels: ["Food", "Transportation", "Misc", "Groceries", "Venmo"],
        datasets: [{
          label: "Transactions split by category",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2450,5267,734,784,433]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Transactions split by category'
        }
      }
  });
}

var descriptions = [];
var prices = [];
var dates = [];

function getData() {
  descriptions = [];
  prices = [];
  dates = [];
  var table = document.getElementById("list");
  var tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    pr = tr[i].getElementsByTagName("td")[1];
    de = tr[i].getElementsByTagName("td")[2];
    if(td){
      date = td.innerHTML;
      dates.push(date);
    }
    if(pr) {
      price = pr.innerHTML.substring(1, pr.innerHTML.length);
      prices.push(parseFloat(price).toFixed(2));
    }
    if(de) {
      descript = de.innerHTML;
      descriptions.push(descript);
    }
  }
}


function hello() {
  document.getElementById('foodplaces').onchange = function(){
    var file = this.files[0];

    var reader = new FileReader();
    reader.onload = function(progressEvent){
      // Entire file
      //console.log(this.result);
      // By lines
      var lines = this.result.split('\n');
      for(var line = 0; line < lines.length; line++){
        console.log(lines[line]);
      }
    };
    reader.readAsText(file);
  };
}

function getFoodPercentage() {

}
