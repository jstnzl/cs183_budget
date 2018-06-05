function itemPercentage() {
  var item = findPercent();
  var input = document.getElementById("search");
  var filter = input.value.toUpperCase();
  new Chart(document.getElementById("searchPie"), {
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


function findPercentages(){
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
