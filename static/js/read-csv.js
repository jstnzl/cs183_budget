function handleFiles(files) {
 // Check for the various File API support.
 if (window.FileReader) {
     // FileReader are supported.
     getAsText(files[0]);
 } else {
     alert('FileReader are not supported in this browser.');
 }
}

function getAsText(fileToRead) {
 var reader = new FileReader();
 // Read file into memory as UTF-8
 reader.readAsText(fileToRead);
 // Handle errors load
 reader.onload = loadHandler;
 reader.onerror = errorHandler;
}

function loadHandler(event) {
 var csv = event.target.result;
 processData(csv);
}

function processData(csv) {
   var allTextLines = csv.split(/\r\n|\n/);
   var lines = [];
   for (var i=0; i<allTextLines.length; i++) {
       var data = allTextLines[i].split(';');
           var tarr = [];
           for (var j=0; j<data.length; j++) {
               tarr.push(data[j]);
           }
           lines.push(tarr);
   }
   parseLines(allTextLines);
 //console.log(lines);
}

function parseLines(lines) {
 var table = [[],[]];
 for(var i=0; i<lines.length-1; i++) {
   if(lines[i]!=null)
   {
     table[i]= new Array();
     var cell = lines[i].split(',');
     //console.log(cell);
     for(var j=0; j<cell.length; j++){
       var value = cell[j].substring(1, cell[j].length-1)
       if(j==0){ //date
        var temp = value.split('/');
        table[i][j] = new Date(temp[2],temp[0]-1,temp[1]);
      }
       else if(j==1) //price
        table[i][j] = parseFloat(value);
       else if(j==4) //description
        table[i][2] = value;
      //console.log(cell[j]);
    }
  }
 }
 for(row in table)
 {
   $.post(add_transaction_url,
   {
       date: table[row][0],
       price: table[row][1],
       description: table[row][2],
   },
   function () {
   });
}
}

function errorHandler(evt) {
 if(evt.target.error.name == "NotReadableError") {
     alert("Cannot read file !");
 }
}
