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
  console.log(today);
  return today;
}

function selectDates(value){
  var x = document.getElementById("dates").value;
  switch(x){
    case "1":
        day();
          break;
    case "2":
        week();
          break;
    case "3":
      month();
          break;
    case "4":
      quarter();
          break;
    case "5":
      year();
          break;
    default:
      allDates();
          break;
  }
}

function day(){
  var today = new Date(todaysDate()).getDate();
  var thisYear = new Date(todaysDate()).getFullYear();
  var thisMonth = new Date(todaysDate()).getMonth() + 1;
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var value = td.innerHTML.substring(0, td.innerHTML.length);
      var dayVal = value.substring(3,5);
      var yearVal = value.substring(6);
      var monthVal = value.substring(0,2);
      if((dayVal==today)&&(thisMonth==monthVal)&&(thisYear==yearVal)){
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function week(){
  var thisYear = new Date(todaysDate()).getFullYear();
  var thisMonth = new Date(todaysDate()).getMonth() + 1;
  var thisWeek = new Date(todaysDate()).getDate();
  var dayWeek = new Date(todaysDate()).getDay();
  while(dayWeek > 0 && thisWeek > 0)
  {
    thisWeek = thisWeek - 1;
    dayWeek= dayWeek - 1;
  }
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var value = td.innerHTML.substring(0, td.innerHTML.length);
      var dayVal = value.substring(3,5);
      var yearVal = value.substring(6);
      var monthVal = value.substring(0,2);
      if((monthVal == thisMonth) && (thisYear == yearVal) && (dayVal > thisWeek) && (dayVal < thisWeek + 7)){
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function month(){
  var thisYear = new Date(todaysDate()).getFullYear();
  var thisMonth = new Date(todaysDate()).getMonth() + 1;
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var value = td.innerHTML.substring(0, td.innerHTML.length);
      var yearVal = value.substring(6);
      var monthVal = value.substring(0,2);
      console.log(yearVal);
      if((monthVal == thisMonth) && (thisYear == yearVal)){
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function quarter(){
  var thisYear = new Date(todaysDate()).getFullYear();
  var thisQtr = new Date(todaysDate()).getMonth() + 1;
  if(thisQtr < 3) thisQtr = 1;
  else if(thisQtr < 6) thisQtr = 3;
  else if(thisQtr < 9) thisQtr = 6;
  else thisQtr = 9;
  console.log(thisYear);
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var value = td.innerHTML.substring(0, td.innerHTML.length);
      var yearVal = value.substring(6);
      var qtrVal = value.substring(0,2);
      console.log(yearVal);
      if((qtrVal > thisQtr) && (qtrVal < (thisQtr + 3)) && (thisYear == yearVal)){
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function year(){
  var thisYear = new Date(todaysDate()).getFullYear();
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var value = td.innerHTML.substring(0, td.innerHTML.length);
      var yearVal = value.substring(6);
      if(yearVal == thisYear){
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function allDates(){
  var today = todaysDate();
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var value = td.innerHTML.substring(0, td.innerHTML.length);
      if(value > -5 && value < 0){
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
