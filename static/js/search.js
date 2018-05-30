function searchingWithFilter(){
  var input = document.getElementById("entry");
  var filter = input.value.toUpperCase();
  var x = document.getElementById("prices").value;
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    de = tr[i].getElementsByTagName("td")[2];
    if (td) {
      var value = td.innerHTML.substring(1, td.innerHTML.length);
      if(x === "0"){
        if(value > 0 && de.innerHTML.toUpperCase().includes(filter)){
          tr[i].style.display = "";
        }
        else{
            tr[i].style.display = "none";
        }
      }
      else if(x === "1"){
        if(value > -5 && value < 0 && de.innerHTML.toUpperCase().includes(filter)){
          tr[i].style.display = "";
        }
        else{
          tr[i].style.display = "none";
        }
      }
      else if(x === "2"){
        if(value < -5.01 && value > -10 && de.innerHTML.toUpperCase().includes(filter)){
          tr[i].style.display = "";
        }
        else{
          tr[i].style.display = "none";
        }
      }
      else if(x === "3"){
        if(value < -20.01 && value > -50 && de.innerHTML.toUpperCase().includes(filter)){
          tr[i].style.display = "";
        }
        else{
          tr[i].style.display = "none";
        }
      }
      else if(x === "4"){
        if(value < -20.01 && value > -50 && de.innerHTML.toUpperCase().includes(filter)){
          tr[i].style.display = "";
        }
        else{
          tr[i].style.display = "none";
        }
      }
      else if(x === "5"){
        if(value < -50.01 && value > -100 && de.innerHTML.toUpperCase().includes(filter)){
          tr[i].style.display = "";
        }
        else{
          tr[i].style.display = "none";
        }
      }
      else if(x === "6"){
        if(value < -100 && de.innerHTML.toUpperCase().includes(filter)){
          tr[i].style.display = "";
        }
        else{
          tr[i].style.display = "none";
        }
      }
      else{
        tr[i].style.display = "none";
      }
    }
  }
}

function refresh() {
  window.location.reload()
}


function selectFilter(){
  input = document.getElementById("entry");
  filter = input.value.toUpperCase();
  var x = document.getElementById("prices").value;
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    de = tr[i].getElementsByTagName("td")[2];
    if (td) {
      var value = td.innerHTML.substring(1, td.innerHTML.length);
      if(value > 0 && x === "0" && de.innerHTML.toUpperCase().includes(filter)){
        tr[i].style.display = "";
      }
      else if(value > -5 && value < 0 && x ==="1" && de.innerHTML.toUpperCase().includes(filter)){
        tr[i].style.display = "";
      }
      else if(value < -5.01 && value > -10 && x === "2" && de.innerHTML.toUpperCase().includes(filter)){
        tr[i].style.display = "";
      }
      else if(value < -10.01 && value > -20 && x === "3" && de.innerHTML.toUpperCase().includes(filter)){
        tr[i].style.display = "";
      }
      else if(value < -20.01 && value > -50 && x === "4" && de.innerHTML.toUpperCase().includes(filter)){
        tr[i].style.display = "";
      }
      else if(value < -50.01 && value > -100 && x === "5" && de.innerHTML.toUpperCase().includes(filter)){
        tr[i].style.display = "";
      }
      else if( value < -100 && x === "6" && de.innerHTML.toUpperCase().includes(filter)){
        tr[i].style.display = "";
      }
      else{
        tr[i].style.display = "none";
      }
    }
  }
}
