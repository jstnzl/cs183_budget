function monthly () {
  var ctx = document.getElementById('monthChart').getContext('2d');
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

function day () {
  var days = getDaily();
  console.log(days);
  var ctx = document.getElementById('dayChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [{
        label: 'Monthly spending',
        data: days,
        backgroundColor: "rgba(0,130,250,0.4)"
      }]
    }
  });
}


function weekly() {
  var days = getWeekly();
  var ctx = document.getElementById('weeklyChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: weeks,
      datasets: [{
        label: 'Monthly spending',
        data: days,
        backgroundColor: "rgba(0,130,250,0.4)"
      }]
    }
  });
}

function daily() {
  var ctx = document.getElementById('dailyChart').getContext('2d');
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
  var ctx = document.getElementById("yearChart").getContext('2d');
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
  var ctx = document.getElementById('cmpChart').getContext('2d');
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
  disableCharts();
  document.getElementById('daily').style.display="";
  document.getElementById('dailyChart').style.display="";
  return x = "0";
}

function return1() {
  disableCharts();
  document.getElementById('yearly').style.display="";
  document.getElementById('yearChart').style.display="";
  return x = "1";
}

function return2() {
  disableCharts();
  document.getElementById('monthlyFilter').style.display="";
  document.getElementById('monthChart').style.display="";
  return x = "2";
}

function return3() {
  disableCharts();
  document.getElementById('weekly').style.display="";
  document.getElementById('weekChart').style.display="";
  return x = "3";
}

function return4() {
  disableCharts();
  document.getElementById('comparison').style.display="";
  document.getElementById('cmpChart').style.display="";
  return x = "4";
}

function return5() {
  disableCharts();
  document.getElementById('pie').style.display="";
  document.getElementById('pieChart').style.display="";
  return x = "5";
}

function return6() {
  disableCharts();
  document.getElementById('searchPie').style.display="";
  return x = "6";
}

function disableCharts() {
  document.getElementById('main').style.display="none";
  document.getElementById('monthlyFilter').style.display="none";
  document.getElementById('yearly').style.display="none";
  document.getElementById('daily').style.display="none";
  document.getElementById('pie').style.display="none";
  document.getElementById('weekly').style.display="none";
  document.getElementById('comparison').style.display="none";
  document.getElementById('dailyChart').style.display="none";
  document.getElementById('yearChart').style.display="none";
  document.getElementById('monthChart').style.display="none";
  document.getElementById('weekChart').style.display="none";
  document.getElementById('cmpChart').style.display="none";
  document.getElementById('pieChart').style.display="none";
  document.getElementById('searchPie').style.display="none";
}

var count = 0;
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
    console.log("4 was pressed");
    compare("2018", "2017");
  }
  else if (x == "5") {
    console.log("5 was pressed");
    //categories();
  }
  else if (x == "6") {
    console.log("6 was pressed");
    if(window.searchPie != null && count > 0){
      window.searchPie.destroy();
    }
    itemPercentage();
    count++;
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
      prices.push(parseFloat(price).toFixed(2));
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

function getTotal() {
  getData();
  var total = 0;
  for(var i = 0; i < prices.length; i++) {
    if(prices[i] < 0) {
      total += Math.abs(prices[i]);
      //console.log(prices[i]);
    }
  }
  return parseFloat(total).toFixed(2);
}

function getItemTotal() {
  getData();
  var itemTotal = 0;
  var input = document.getElementById("entry");
  var filter = input.value.toUpperCase();
  for(var i = 0; i < descriptions.length; i++) {
    if(descriptions[i].toUpperCase().includes(filter)){
      if(prices[i] < 0) {
        itemTotal += Math.abs(prices[i]);
      }
    }
  }
  return parseFloat(itemTotal).toFixed(2);
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



var everyF = [];
function fridays() {
  getData();
  var amt = 0;
  var f = 0;
  for (var i = 0; i < dates.length; i++) {
    var d = new Date(dates[i]);
    var wd = d.getDay();
    var day = d.getDate();
    if(day < 30) {
      if(!everyF.includes((day + (5 - wd)))){
        everyF.push((day + (5 - wd)));
        weeks.push("Week: " +  f++);
      }
    }
  }
}
var weeks = [];
function getWeekly() {
  fridays();
  var weekly = [];
  console.log(everyF);
  getData();
  var f = 0;
  var amt = 0;
  for(i = 0; i < dates.length; i++) {
    var d = new Date(dates[i]);
    var v = d.getDate();
    if (everyF[f]-4 <= v &&  v <= everyF[f]) {
      if(prices[i] < 0){
        amt += Math.abs(parseFloat(prices[i]).toFixed(2));
      }
    }
    else{
      weekly.push(parseFloat(amt).toFixed(2))
      f++;

      if(prices[i] < 0){
        //weeks.push("Week: " +  f);
        amt = 0;
        amt += Math.abs(parseFloat(prices[i]).toFixed(2));
      }
    }
  }
  return weekly;
}


function getDaily() {
  getData();
  var m = 0, t = 0, w = 0, th = 0, f = 0;
  var mc = 0; tc = 0; wc = 0; thc = 0; fc = 0;
  for(var i = 0; i < dates.length; i++) {
    var d = new Date(dates[i]);
    var n = d.getDay();
    if(prices[i] < 0) {
      switch(n) {
        case 1:
          m += Math.abs(parseFloat(prices[i]).toFixed(2));
          mc++;
          break;
        case 2:
          t += Math.abs(parseFloat(prices[i]).toFixed(2));
          tc++;
          break;
        case 3:
          w += Math.abs(parseFloat(prices[i]).toFixed(2));
          wc++;
          break;
        case 4:
          th += Math.abs(parseFloat(prices[i]).toFixed(2));
          thc++;
          break;
        case 5:
          f += Math.abs(parseFloat(prices[i]).toFixed(2));
          fc++;
          break;
        default:
          break;
      }
    }
  }
  var list = [m/mc, t/tc, w/wc, th/thc, f/fc];
  return list;
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
