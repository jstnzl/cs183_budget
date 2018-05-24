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
 var data = [];
 for(var i=0; i<lines.length-1; i++) {
   var date,price,description;
   if(lines[i]!=null)
   {
     var cell = lines[i].split(',');
     for(var j=0; j<cell.length; j++){
       var value = cell[j].substring(1, cell[j].length-1)
       if(j==0){ //date - year, month, day
          var temp = value.split('/');
          date = (new Date(temp[2],temp[0]-1,temp[1])).toJSON();
          //console.log(date);
      }
       else if(j==1) //price
        price = parseFloat(value);
       else if(j==4) //description
        description = value;
        console.log(price);
    }
    data.push({
      'date' : date,
      'price' : price,
      'description' : description
    });
  }
 }
   $.post(add_transaction_url,
   {
       data: JSON.stringify(data),
       dataType: 'json',
   },
   function () {
   });
}

function errorHandler(evt) {
 if(evt.target.error.name == "NotReadableError") {
     alert("Cannot read file !");
 }
}
