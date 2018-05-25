
function monthly () {
  var ctx = document.getElementById("myChart").getContext('2d');
  getMonths("2017");
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
              label: 'Amount of money spent per month',
              data: months,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}

var years = [];
function getYears() {
  var table = document.getElementById("list");
  var tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var value = td.innerHTML;
      var string_array = value.split("/");
      if (!years.includes(string_array[2])){
        years.push(string_array[2]);
      }
    }
  }
}


var months = [];
function getMonths(year) {
  var jan = 0, feb = 0, mar = 0, apr = 0, may = 0, jun = 0,
      jul = 0, aug = 0, sep = 0, oct = 0, nov = 0, dec = 0;
  var price, value, date, parse;
  var table = document.getElementById("list");
  var tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    price = tr[i].getElementsByTagName("td")[1];
    if (price){
      var floating = price.innerHTML.substring(1,price.innerHTML.length);
      if (floating < 0) {
        value = Math.abs(parseFloat(floating));
      }
    }
    if (td) {
      parse = td.innerHTML;
      date = parse.split("/");
      if(date[2] == year){
        switch(date[0]) {
          case "01":
            jan = jan + value;
            console.log(jan);
            break;
          case "02":
            feb = feb + value;
            break;
          case "03":
            mar = mar + value;
            break;
          case "04":
            apr = apr + value;
            break;
          case "05":
            may = may + value;
            break;
          case "06":
            jun = jun + value;
            break;
          case "07":
            jul = jul + value;
            break;
          case "08":
            aug = aug + value;
            break;
          case "09":
            sep = sep + value;
            break;
          case "10":
            oct = oct + value;
            break;
          case "11":
            nov = nov + value;
            break;
          case "12":
            dec = dec + value;
            break;
         }
       }
     }
   }
   months.push(jan);
   months.push(feb);
   months.push(mar);
   months.push(apr);
   months.push(may);
   months.push(jun);
   months.push(jul);
   months.push(aug);
   months.push(sep);
   months.push(oct);
   months.push(nov);
   months.push(dec);
   //console.log(months);
 }





// function fiftyOneToHundred(){
//   table = document.getElementById("list");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[1];
//     if (td) {
//       var value = td.innerHTML.substring(1, td.innerHTML.length);
//       if(value < -51 && value > -100){
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }



new Chart(document.getElementById("pie-chart"), {
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
