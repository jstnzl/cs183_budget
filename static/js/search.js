function search() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("entry");
  filter = input.value.toUpperCase();
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}



function selectFilter(){
  var x = document.getElementById("prices").value;
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      var value = td.innerHTML.substring(1, td.innerHTML.length);
      if(value > 0 && x === "0"){
        tr[i].style.display = "";
      }
      else if(value > -5 && value < 0 && x ==="1"){
        tr[i].style.display = "";
      }
      else if(value < -5.01 && value > -10 && x === "2"){
        tr[i].style.display = "";
      }
      else if(value < -10.01 && value > -20 && x === "3" ){
        tr[i].style.display = "";
      }
      else if(value < -20.01 && value > -50 && x === "4"){
        tr[i].style.display = "";
      }
      else if(value < -50.01 && value > -100 && x === "5"){
        tr[i].style.display = "";
      }
      else if( value < -100 && x === "6"){
        tr[i].style.display = "";
      }
      else{
        tr[i].style.display = "none";
      }
    }
  }
}
