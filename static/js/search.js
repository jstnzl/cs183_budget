function search() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("entry");
  filter = input.value.toUpperCase();
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    console.log("tr.length: " + tr.length);
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
