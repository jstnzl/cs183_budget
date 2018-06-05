function itemPercentage() {
  var item = findPercent();
  var input = document.getElementById("search");
  var filter = input.value.toUpperCase();
  window.searchPie = new Chart(document.getElementById("searchPie"), {
      type: 'pie',
      data: {
        labels: [filter, 'Everything Else'],
        datasets: [{
          label: "Transactions split by category",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [item, 100-item]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Percentage spent on an item'
        }
      }
  });
}


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

function getTotal() {
  getData();
  var total = 0;
  for(var i = 0; i < prices.length; i++) {
    if(prices[i] < 0) {
      total += Math.abs(prices[i]);
      //console.log(prices[i]);
    }
  }
  console.log(total.toFixed(2));
  return parseFloat(total).toFixed(2);
}

function getItemTotal() {
  getData();
  var itemTotal = 0;
  var input = document.getElementById("search");
  var filter = input.value.toUpperCase();
  for(var i = 0; i < descriptions.length; i++) {
    if(descriptions[i].toUpperCase().includes(filter)){
      if(prices[i] < 0) {
        itemTotal += Math.abs(prices[i]);
      }
    }
  }
  console.log(itemTotal.toFixed(2));
  return parseFloat(itemTotal).toFixed(2);
}

function findPercent() {
  var itemTotal = getItemTotal();
  var total = getTotal();
  var percentage = (itemTotal/total)*100;
  console.log(parseFloat(percentage).toFixed(2));
  return (parseFloat(percentage).toFixed(2));
}
