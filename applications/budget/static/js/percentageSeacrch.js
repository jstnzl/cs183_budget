

function getTotal() {
  data();
  var total = 0;
  for(var i = 0; i < prices.length; i++) {
    total += prices[i];
    console.log(prices[i]);
  }
  console.log(total);
  return total;
}

function hello() {
  console.log("hello world");
}
