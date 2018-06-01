function findPercentages(){
  new Chart(document.getElementById("myChart5"), {
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

function monthly () {
  var ctx = document.getElementById('myChart2').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        label: 'Monthly spending',
        data: months,
        backgroundColor: "rgba(0,130,250,0.4)"
      }]
    }
  });
}

function daily() {
  var ctx = document.getElementById('myChart0').getContext('2d');
  spent = dailyTimeLine();
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: mSpent,
      datasets: [{
        label: 'daily spending',
        data: spent,
        backgroundColor: "rgba(0,250,250,0.4)"
      }]
    }
  });
}

function yearly () {
  var ctx = document.getElementById("myChart1").getContext('2d');
  getAnnual();
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: years,
          datasets: [{
              label: 'Amount of money spent per month',
              data: annual,

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


function compare (year1, year2) {
  var ctx = document.getElementById('myChart4').getContext('2d');
    var y1 = getMonths(year1);
    var y2 = getMonths(year2);
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label: year1,
          data: y1,
          backgroundColor: "rgba(0,130,250,0.4)"
        }, {
          label: year2,
          data: y2,
          backgroundColor: "rgba(250,0,100,0.4)"
        }]
      }
    });
}

var x = "";

function return0() {
  document.getElementById('monthlyFilter').style.display="none";
  document.getElementById('main').style.display="none";
  document.getElementById('myChart0').style.display="";
  document.getElementById('myChart1').style.display="none";
  document.getElementById('myChart2').style.display="none";
  document.getElementById('myChart3').style.display="none";
  document.getElementById('myChart4').style.display="none";
  document.getElementById('myChart5').style.display="none";
  return x = "0";
}

function return1() {
  document.getElementById('monthlyFilter').style.display="none";
  document.getElementById('main').style.display="none";
  document.getElementById('myChart0').style.display="none";
  document.getElementById('myChart1').style.display="";
  document.getElementById('myChart2').style.display="none";
  document.getElementById('myChart3').style.display="none";
  document.getElementById('myChart4').style.display="none";
  document.getElementById('myChart5').style.display="none";
  return x = "1";
}

function return2() {
  document.getElementById('monthlyFilter').style.display="";
  document.getElementById('main').style.display="none";
  document.getElementById('myChart0').style.display="none";
  document.getElementById('myChart1').style.display="none";
  document.getElementById('myChart2').style.display="";
  document.getElementById('myChart3').style.display="none";
  document.getElementById('myChart4').style.display="none";
  document.getElementById('myChart5').style.display="none";
  return x = "2";
}

function return3() {
  document.getElementById('monthlyFilter').style.display="none";
  document.getElementById('main').style.display="none";
  document.getElementById('myChart0').style.display="none";
  document.getElementById('myChart1').style.display="none";
  document.getElementById('myChart2').style.display="none";
  document.getElementById('myChart3').style.display="";
  document.getElementById('myChart4').style.display="none";
  document.getElementById('myChart5').style.display="none";
  return x = "3";
}

function return4() {
  document.getElementById('monthlyFilter').style.display="none";
  document.getElementById('main').style.display="none";
  document.getElementById('myChart0').style.display="none";
  document.getElementById('myChart1').style.display="none";
  document.getElementById('myChart2').style.display="none";
  document.getElementById('myChart3').style.display="none";
  document.getElementById('myChart4').style.display="";
  document.getElementById('myChart5').style.display="none";
  return x = "4";
}

function return5() {
  document.getElementById('monthlyFilter').style.display="none";
  document.getElementById('main').style.display="none";
  document.getElementById('myChart0').style.display="none";
  document.getElementById('myChart1').style.display="none";
  document.getElementById('myChart2').style.display="none";
  document.getElementById('myChart3').style.display="none";
  document.getElementById('myChart4').style.display="none";
  document.getElementById('myChart5').style.display="";
  return x = "5";
}

function clearCanvas () {
  canvas = document.getElementById("myChart1");
  document.getElementById('main').style.display="";
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function toggler () {
  if(x == "0"){
    console.log("all time was pressed");
    daily();
  }
  if(x == "1"){
    console.log("year was pressed");
    yearly();
  }
  else if (x == "2") {
    console.log("monthly was pressed");
    getMonths("2018");
    monthly();
  }
  else if (x == "4") {
    console.log("compare was pressed");
    compare("2018", "2017");
  }
  else if (x == "5") {
    console.log("compare was pressed");
    findPercentages();
  }
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
      prices.push(price);
    }
    if(de) {
      descript = de.innerHTML;
      descriptions.push(descript);
    }
  }
}

var mSpent = [];
//filter by days and months
function dailyTimeLine() {
  mSpent = [];
  var spent = [];
  getData();
  for(i = 0; i< prices.length; i++) {
    if(prices[i] < 0) {
      mSpent.push(dates[i]);
      spent.push(Math.abs(prices[i]));
    }
  }
  return spent;
}



function selectYear() {
  var x = document.getElementById("selectYear").value;
  if(x == "2018"){
    getMonths("2018");
    monthly();
  }
  else if(x == "2017"){
    getMonths("2017");
    monthly();
  }
  else if(x == "2016"){
    getMonths("2016");
    monthly();
  }
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

var annual = [];
function getAnnual() {
  annual = [];
  var num = 0;
  getYears();
  getData();
  for(var i = 0; i < years.length; i++) {
    num = 0;
    for(var j = 0; j < prices.length; j++) {
      if(prices[j] < 0) {
        value = Math.abs(parseFloat(prices[j]));
        dYear = dates[j].split("/");
        if(years[i] == dYear[2]) {
          num = num + value;
        }
      }
    }
    annual.push(parseFloat(num).toFixed(2));
  }
}

function getMonths(year) {
  months = [];
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
   months.push(parseFloat(jan).toFixed(2));
   months.push(parseFloat(feb).toFixed(2));
   months.push(parseFloat(mar).toFixed(2));
   months.push(parseFloat(apr).toFixed(2));
   months.push(parseFloat(may).toFixed(2));
   months.push(parseFloat(jun).toFixed(2));
   months.push(parseFloat(jul).toFixed(2));
   months.push(parseFloat(aug).toFixed(2));
   months.push(parseFloat(sep).toFixed(2));
   months.push(parseFloat(oct).toFixed(2));
   months.push(parseFloat(nov).toFixed(2));
   months.push(parseFloat(dec).toFixed(2));
   return months;
 }
