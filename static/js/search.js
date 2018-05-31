function searchingWithFilter(){
  var input = document.getElementById("entry");
  var filter = input.value.toUpperCase();
  var x = document.getElementById("prices").value;
  var y = document.getElementById("dates").value;
  var table = document.getElementById("list");
  var tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    var pricetd = tr[i].getElementsByTagName("td")[1];
    var datetd = tr[i].getElementsByTagName("td")[0];
    var de = tr[i].getElementsByTagName("td")[2];
    if (pricetd || datetd) {
      var price = pricetd.innerHTML.substring(1, pricetd.innerHTML.length);
      var date = datetd.innerHTML.substring(0, datetd.innerHTML.length);
      var includes = de.innerHTML.toUpperCase().includes(filter);
      var priceFilter = (resetPrice(price,x) || income(price,x) || lessThan5(price,x) || from5to10(price,x) ||
                        from10to20(price,x) || from20to50(price,x) || from50to100(price,x) || over100(price,x));
      var dateFilter = (resetDate(date,y) || day(date,y) || week(date,y) || month(date,y) ||
                        quarter(date,y) || year(date,y));
      console.log(priceFilter);
      console.log(dateFilter);
      console.log(includes);
      console.log("end search");
      if(includes && priceFilter && dateFilter)
        tr[i].style.display = "";
      else
        tr[i].style.display = "none";
    }
  }
}

function refresh() {
  window.location.reload()
}

//PRICE FILTER
function filterPrice(){
  var input = document.getElementById("entry");
  var filter = input.value.toUpperCase();
  var x = document.getElementById("prices").value;
  var y = document.getElementById("dates").value;
  var table = document.getElementById("list");
  var tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    var pricetd = tr[i].getElementsByTagName("td")[1];
    var datetd = tr[i].getElementsByTagName("td")[0];
    var de = tr[i].getElementsByTagName("td")[2];
    if (pricetd) {
      var price = pricetd.innerHTML.substring(1, pricetd.innerHTML.length);
      var date = datetd.innerHTML.substring(0, datetd.innerHTML.length);
      var includes = de.innerHTML.toUpperCase().includes(filter);
      var priceFilter = (resetPrice(price,x) || income(price,x) || lessThan5(price,x) || from5to10(price,x) ||
                        from10to20(price,x) || from20to50(price,x) || from50to100(price,x) || over100(price,x));
      var dateFilter = (resetDate(date,y) || day(date,y) || week(date,y) || month(date,y) ||
                        quarter(date,y) || year(date,y));
                        console.log(priceFilter);
                        console.log(dateFilter);
                        console.log(includes);
                        console.log("end price");
      if(includes && priceFilter && dateFilter)
        tr[i].style.display = "";
      else
        tr[i].style.display = "none";
    }
  }
}

// helper functions for price dropdown
function resetPrice(value,x){
  return (x === "-1");
}

function income(value,x){
  return (value > 0 && x === "0");
}

function lessThan5(value,x){
  return (value > -5 && value < 0 && x ==="1");
}

function from5to10(value,x){
  return (value < -5.01 && value > -10 && x === "2");
}

function from10to20(value,x){
  return (value < -10.01 && value > -20 && x === "3");
}

function from20to50(value,x){
  return (value < -20.01 && value > -50 && x === "4");
}

function from50to100(value,x){
  return (value < -50.01 && value > -100 && x === "5");
}

function over100(value,x){
  return (value < -100 && x === "6");
}


//DATE FILTER
function todaysDate(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd = '0'+dd
  }
  if(mm<10) {
      mm = '0'+mm
  }
  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

function filterDate(){
  var input = document.getElementById("entry");
  var filter = input.value.toUpperCase();
  var x = document.getElementById("prices").value;
  var y = document.getElementById("dates").value;
  var table = document.getElementById("list");
  var tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    var pricetd = tr[i].getElementsByTagName("td")[1];
    var datetd = tr[i].getElementsByTagName("td")[0];
    var de = tr[i].getElementsByTagName("td")[2];
    if (datetd) {
      var price = pricetd.innerHTML.substring(1, pricetd.innerHTML.length);
      var date = datetd.innerHTML.substring(0, datetd.innerHTML.length);
      var includes = de.innerHTML.toUpperCase().includes(filter);
      var priceFilter = (resetPrice(price,x) || income(price,x) || lessThan5(price,x) || from5to10(price,x) ||
                        from10to20(price,x) || from20to50(price,x) || from50to100(price,x) || over100(price,x));
      var dateFilter = (resetDate(date,y) || day(date,y) || week(date,y) || month(date,y) ||
                        quarter(date,y) || year(date,y));
                        console.log(priceFilter);
                        console.log(dateFilter);
                        console.log(includes);
                        console.log("end date");
      if(includes && dateFilter && priceFilter)
        tr[i].style.display = "";
      else
        tr[i].style.display = "none";
    }
  }
}

// helper functions for price dropdown
function resetDate(value,x){
  return (x === "-1");
}

function day(value,x){
  var today = new Date(todaysDate()).getDate();
  var thisYear = new Date(todaysDate()).getFullYear();
  var thisMonth = new Date(todaysDate()).getMonth() + 1;
  var dayVal = value.substring(3,5);
  var yearVal = value.substring(6);
  var monthVal = value.substring(0,2);
  return (x ==="1" && (dayVal==today) && (thisMonth==monthVal) && (thisYear==yearVal));
}

function week(value,x){
  var thisYear = new Date(todaysDate()).getFullYear();
  var thisMonth = new Date(todaysDate()).getMonth() + 1;
  var thisWeek = new Date(todaysDate()).getDate();
  var dayWeek = new Date(todaysDate()).getDay();
  while(dayWeek > 0 && thisWeek > 0)
  {
    thisWeek = thisWeek - 1;
    dayWeek= dayWeek - 1;
  }
  var dayVal = value.substring(3,5);
  var yearVal = value.substring(6);
  var monthVal = value.substring(0,2);
  return(x === "2" && (monthVal == thisMonth) && (thisYear == yearVal) && (dayVal > thisWeek) && (dayVal < thisWeek + 7));
}

function month(value,x){
  var thisYear = new Date(todaysDate()).getFullYear();
  var thisMonth = new Date(todaysDate()).getMonth() + 1;
  var yearVal = value.substring(6);
  var monthVal = value.substring(0,2);
  return (x === "3" && (monthVal == thisMonth) && (thisYear == yearVal));
}

function quarter(value,x){
  var thisYear = new Date(todaysDate()).getFullYear();
  var thisQtr = new Date(todaysDate()).getMonth() + 1;
  if(thisQtr < 3) thisQtr = 1;
  else if(thisQtr < 6) thisQtr = 3;
  else if(thisQtr < 9) thisQtr = 6;
  else thisQtr = 9;
  var yearVal = value.substring(6);
  var qtrVal = value.substring(0,2);
  return (x === "4" && (qtrVal > thisQtr) && (qtrVal < (thisQtr + 3)) && (thisYear == yearVal));
}

function year(value,x){
  var thisYear = new Date(todaysDate()).getFullYear();
  var yearVal = value.substring(6);
  return (x === "5" && (yearVal == thisYear));
}
