function categories(){
  var perc = getPercentages();
  new Chart(document.getElementById("pieChart"), {
      type: 'pie',
      data: {
        labels: ["Transportation", "Food", "Groceries", "Housing", "venmo", "Misc"],
        datasets: [{
          label: "Transactions split by category",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#0066ff"],
          data: perc
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

function splitData(input) {
  var createList = input.split('\n');
  return createList;
}


function getPercentages() {
  var total = getTotal();
  var tram = (getPrices(transportation) / total * 100);
  console.log(tram);
  var rest = getPrices(foodplaces)/ total * 100;
  console.log(rest);
  var groc = getPrices(grocery)/ total * 100;
  console.log(groc);
  var hous = housing() / total * 100;
  console.log(hous);
  var venm = venmo()/ total * 100;
  console.log(venm);
  var misc = 100 - (tram + rest + groc + hous + venm);
  console.log(misc);
  var list = [tram, rest, groc, hous, venm, misc];
  console.log(list);
  return list;
}

function getPrices(input) {
  var data = splitData(input);
  getData();
  var price = 0;
  var cut = "";
  for(i = 0; i < data.length; i++) {
    for(j = 0; j < descriptions.length; j++) {
      if(descriptions[j].includes(data[i].toUpperCase())){
        if(prices[j] < 0){
          price += Math.abs(prices[j]);
        }
      }
    }
  }
  return parseFloat(price).toFixed(2)
}

function housing() {
  getData();
  var housing = 0;
  for (i = 0; i < descriptions.length; i++) {
    if (descriptions[i].includes("CHECK #")) {
      if (prices[i] < 0) {
        housing += Math.abs(prices[i]);
      }
    }
  }
  return  parseFloat(housing).toFixed(2);
}

function venmo() {
  getData();
  var venmo = 0;
  for (i = 0; i < descriptions.length; i++) {
    if (descriptions[i].includes("VENMO")) {
      if (prices[i] < 0) {
        venmo += Math.abs(prices[i]);
      }
    }
  }
  return  parseFloat(venmo).toFixed(2);
}


function getTotal() {
  getData();
  var total = 0;
  for(var i = 0; i < prices.length; i++) {
    if(prices[i] < 0) {
      total += Math.abs(prices[i]);
    }
  }
  return parseFloat(total).toFixed(2);
}


var foodplaces =
"A&W Restaurants \n"
+ "America's Incredible Pizza Company \n"
+ "Applebee's \n"
+ "Arby's \n"
+ "Arctic Circle Restaurants \n"
+ "Arthur Treacher's Fish & Chips \n"
+ "Atlanta Bread Company \n"
+ "Auntie Anne's \n"
+ "Bahama Breeze \n"
+ "Baja Fresh \n"
+ "Bakers Square\n"
+ "Baskin-Robbins\n"
+ "Beef O'Brady's\n"
+ "Ben & Jerry's\n"
+ "Benihana\n"
+ "Bennigan's\n"
+ "Bertucci's\n"
+ "BETTYS EAT INN\n"
+ "Bikinis Sports Bar & Grill\n"
+ "BJ's Restaurant & Brewery\n"
+ "Black Angus Steakhouse\n"
+ "Black-eyed Pea\n"
+ "Blake's Lotaburger\n"
+ "Blimpie\n"
+ "Bob Evans Restaurants\n"
+ "Bojangles' Famous Chicken 'n Biscuits\n"
+ "Bonefish Grill\n"
+ "Boston Market\n"
+ "Braum's\n"
+ "Bravo!, Cucina Italiana\n"
+ "Brio\n"
+ "Bubba Gump Shrimp Company\n"
+ "Buca di Beppo\n"
+ "Buffalo Wild Wings\n"
+ "Burger King\n"
+ "Burger Street\n"
+ "Burgerville\n"
+ "Cafe Rio\n"
+ "California Pizza Kitchen\n"
+ "California Tortilla\n"
+ "Camille's Sidewalk Cafe\n"
+ "The Capital Grille\n"
+ "Captain D's\n"
+ "Carino's Italian Grill\n"
+ "Carl's Jr.\n"
+ "Carrabba's Italian Grill\n"
+ "Carrows\n"
+ "Carvel Ice Cream\n"
+ "Champps Americana\n"
+ "Charley's Grilled Subs\n"
+ "Charlie Brown's Fresh Grill\n"
+ "Checkers\n"
+ "Cheddar's Casual Café\n"
+ "Cheeburger Cheeburger\n"
+ "Cheeseburger in Paradise\n"
+ "Cheesecake Factory\n"
+ "Chester Fried Chicken\n"
+ "Chevys Fresh Mex\n"
+ "Chick-fil-A\n"
+ "Chicken Express\n"
+ "Chicken in the Rough\n"
+ "Chili's\n"
+ "Chipotle Mexican Grill\n"
+ "Chuck-A-Rama\n"
+ "Chuck E. Cheese's\n"
+ "Church's\n"
+ "CiCi's Pizza\n"
+ "Cinnabon\n"
+ "Claim Jumper\n"
+ "Coco's Bakery\n"
+ "Cold Stone Creamery\n"
+ "Copeland's\n"
+ "Cotton Patch Café\n"
+ "Country Buffet\n"
+ "Cracker Barrel Old Country Store\n"
+ "Culver's\n"
+ "Dairy Queen\n"
+ "Damon's Grill\n"
+ "Dave & Buster's\n"
+ "Del Taco\n"
+ "Denny's\n"
+ "Dixie Chili and Deli\n"
+ "Domino's Pizza\n"
+ "Don Pablo's\n"
+ "Donatos Pizza\n"
+ "Duck Donuts\n"
+ "Dunkin' Donuts\n"
+ "East of Chicago Pizza\n"
+ "Eat'n Park\n"
+ "Eegee's\n"
+ "El Chico\n"
+ "El Pollo Loco\n"
+ "El Taco Tote\n"
+ "Elephant Bar\n"
+ "Famous Dave's\n"
+ "Farmer Boys\n"
+ "Fatburger\n"
+ "FATZ\n"
+ "Fazoli's\n"
+ "Five Guys Famous Burgers and Fries\n"
+ "Fleming's Prime Steakhouse & Wine Bar\n"
+ "Freddy's Frozen Custard & Steakburgers\n"
+ "Freebirds World Burrito\n"
+ "Fresh Choice\n"
+ "Friendly's\n"
+ "Frisch's Big Boy\n"
+ "Fuddruckers\n"
+ "GameWorks\n"
+ "Gatti's Pizza\n"
+ "Gino's Pizza and Spaghetti\n"
+ "Giordano's Pizzeria\n"
+ "Godfather's Pizza\n"
+ "Gold Star Chili\n"
+ "Golden Chick\n"
+ "Golden Corral\n"
+ "Green Burrito\n"
+ "Ground Round\n"
+ "HANABI SUSHI\n"
+ "Hard Rock Cafe\n"
+ "Hardee's\n"
+ "Hobee's Restaurant\n"
+ "Hooters\n"
+ "Houlihan's\n"
+ "Houston's Restaurant\n"
+ "Howard Johnson's\n"
+ "Huddle House\n"
+ "HuHot Mongolian Grill\n"
+ "Hungry Howie's Pizza\n"
+ "Hwy 55 Burgers, Shakes & Fries\n"
+ "IHOP\n"
+ "In-N-Out Burger\n"
+ "Jack in the Box\n"
+ "Jack's\n"
+ "Jamba Juice\n"
+ "Jason's Deli\n"
+ "Jerry's Subs & Pizza\n"
+ "Jersey Mike's Subs\n"
+ "Jet's Pizza\n"
+ "Jimmy John's\n"
+ "Jim's Restaurants\n"
+ "Joe's Crab Shack\n"
+ "Johnny Rockets\n"
+ "Jollibee\n"
+ "John's Incredible Pizza\n"
+ "Ker's WingHouse\n"
+ "KFC\n"
+ "Krispy Kreme\n"
+ "Krystal\n"
+ "L&L Hawaiian Barbecue\n"
+ "Landry's Restaurants\n"
+ "Ledo Pizza\n"
+ "Lee Roy Selmon's\n"
+ "Lee's Famous Recipe Chicken\n"
+ "Lion's Choice\n"
+ "Little Caesars\n"
+ "Logan's Roadhouse\n"
+ "Lone Star Steakhouse & Saloon\n"
+ "Long John Silver's\n"
+ "LongHorn Steakhouse\n"
+ "Luby's\n"
+ "Lyon's\n"
+ "Maggiano's Little Italy\n"
+ "Marie Callender's\n"
+ "Mazzio's Italian Eatery\n"
+ "Max & Erma's\n"
+ "McAlister's Deli\n"
+ "McDonald's\n"
+ "The Melting Pot\n"
+ "Miller's Ale House\n"
+ "Milo's Hamburgers\n"
+ "Mitchell's Fish Market\n"
+ "Moe's Southwest Grill\n"
+ "Mooyah\n"
+ "Monical's Pizza\n"
+ "Montana Mike's\n"
+ "Mrs. Fields\n"
+ "National Coney Island\n"
+ "Naugles\n"
+ "Noodles & Company\n"
+ "Oberweis Dairy\n"
+ "O'Charley's\n"
+ "Ojos Locos\n"
+ "Old Country Buffet\n"
+ "The Old Spaghetti Factory\n"
+ "Olive Garden\n"
+ "On the Border Mexican Grill & Cantina\n"
+ "The Original Italian Pie\n"
+ "The Original Pancake House\n"
+ "Outback Steakhouse\n"
+ "P. F. Chang's China Bistro\n"
+ "Panda Express\n"
+ "Panera Bread\n"
+ "Papa Gino's\n"
+ "Papa John's Pizza\n"
+ "Papa Murphy's Take 'N' Bake Pizza\n"
+ "Pei Wei Asian Diner\n"
+ "Penn Station East Coast Subs\n"
+ "Perkins Restaurant and Bakery\n"
+ "Pita Pit\n"
+ "Pizza Hut\n"
+ "Pizza Inn\n"
+ "Pizza Ranch\n"
+ "Planet Hollywood\n"
+ "Ponderosa Steakhouse and Bonanza Steakhouse\n"
+ "Popeyes Chicken & Biscuits\n"
+ "Port of Subs\n"
+ "Portillo's Restaurants\n"
+ "Potbelly Sandwich Works\n"
+ "Qdoba Mexican Grill\n"
+ "Quaker Steak & Lube\n"
+ "Quiznos\n"
+ "RA Sushi\n"
+ "Rainforest Cafe\n"
+ "Raising Cane's Chicken Fingers\n"
+ "Rally's\n"
+ "Rax\n"
+ "Red Hot & Blue\n"
+ "Red Lobster\n"
+ "Red Robin\n"
+ "Redstone American Grill\n"
+ "Robeks\n"
+ "Rock Bottom\n"
+ "Romano's Macaroni Grill\n"
+ "Round Table Pizza\n"
+ "Roy Rogers Restaurants\n"
+ "Roy's\n"
+ "Rubio's Fresh Mexican Grill\n"
+ "Ruby Tuesday\n"
+ "Ruth's Chris Steak House\n"
+ "Saladworks\n"
+ "Sbarro\n"
+ "Schlotzsky's\n"
+ "Seasons 52\n"
+ "Seattle's Best Coffee\n"
+ "Shake Shack\n"
+ "Shane's Rib Shack\n"
+ "Shari's Cafe & Pies\n"
+ "Shoney's\n"
+ "Showmars\n"
+ "Shrimp Basket\n"
+ "Sizzler\n"
+ "Skyline Chili\n"
+ "Smashburger\n"
+ "Smokey Bones\n"
+ "Sneaky Pete's\n"
+ "Sonic Drive-In\n"
+ "Souplantation and Sweet Tomatoes\n"
+ "Spaghetti Warehouse\n"
+ "Spangles\n"
+ "SPiN\n"
+ "St. Louis Bread Company\n"
+ "Starbucks\n"
+ "Steak 'n Shake\n"
+ "Sticky Fingers\n"
+ "Stir Crazy\n"
+ "Sub Station II\n"
+ "Subway\n"
+ "Sweet Tomatoes\n"
+ "Swensen's\n"
+ "Swensons\n"
+ "T.G.I. Friday's\n"
+ "Taco Bell\n"
+ "Taco Bueno\n"
+ "Taco Cabana\n"
+ "Taco John's\n"
+ "Taco Mayo\n"
+ "Taco Tico\n"
+ "Taco Time\n"
+ "Texas Roadhouse\n"
+ "Tijuana Flats\n"
+ "Tilted Kilt\n"
+ "Tony Roma's\n"
+ "Trader Vic's\n"
+ "Twin Peaks\n"
+ "Umami Burger\n"
+ "Uncle Maddio's Pizza Joint\n"
+ "Uno Chicago Grill\n"
+ "Valentino's\n"
+ "Village Inn\n"
+ "Waffle House\n"
+ "Wendy's\n"
+ "Wetzel's Pretzels\n"
+ "Whataburger\n"
+ "Which Wich?\n"
+ "White Castle\n"
+ "Wienerschnitzel\n"
+ "Wild Wing Cafe\n"
+ "York Steak House\n"
+ "Zaxby's\n"
+ "Zip's Drive-in\n"
+ "Restaurant\n"
+ "Taqueria\n"
+ "Coffee\n"
+ "Food\n"
+ "HAPPY LEMON\n"
+ "SMOKES POUTINERIE\n"
+ "POKE KOMA\n"
+ "SHOOTING STAR CAFE\n"
+ "CAFE\n"
+ "LOLA'S CHICKEN"
+ "PIZZA\n"
+ "ICE CREAM\n"
+ "LOS PERICOS\n"
+ "RESTAURANT\n"
+ "Chipotle\n"
+ "MOTIV\n"
+ "DINING\n"
+ "SURFRIDER\n"
+ "PHO\n"
+ "NOODLE\n"
+ "LULU's\n"
+ "RAMEN\n"
+ "ORENCHI\n"
+ "SNOWFLAKE\n"
+ "RES\n"
+ "TEA";




var grocery =
"Costco \n"
+ "Safeway \n"
+ "Trader Joe's";

var transportation =
"Aloha Petroleum\n"
+"American Gas\n"
+"Amoco\n"
+"ARCO\n"
+"Buc-ee's\n"
+"Byrne Dairy\n"
+"Casey's General Stores\n"
+"CENEX\n"
+"Chevron\n"
+"Circle K\n"
+"Citgo\n"
+"Clark Brands\n"
+"Conoco\n"
+"Costco brand gasoline\n"
+"Cumberland Farms\n"
+"Delta Sonic - Buffalo, New York\n"
+"Exxon\n"
+"Frontier\n"
+"Flying J\n"
+"GasAmerica\n"
+"Gas City, Ltd.\n"
+"GasTrac\n"
+"Getty\n"
+"Go-Mart\n"
+"Gulf\n"
+"Hess\n"
+"High's Dairy Stores\n"
+"Holiday\n"
+"Irving Oil\n"
+"King Soopers\n"
+"Kroger brand gasoline\n"
+"Kum & Go\n"
+"Kwik Trip\n"
+"Kwik Fill\n"
+"Lassus Handy Dandy\n"
+"Love's\n"
+"Lukoil\n"
+"Marathon Oil\n"
+"Maverik\n"
+"Meijer\n"
+"Mirabito\n"
+"Mobil\n"
+"Murphy USA\n"
+"Petro Canada\n"
+"Phillips 66\n"
+"Pilot\n"
+"QuickChek\n"
+"QuikTrip\n"
+"RaceTrac/Raceway\n"
+"Royal Farms\n"
+"ROTTEN ROBBIE\n"
+"Rutter's Farm Stores\n"
+"7-Eleven brand gasoline\n"
+"Sam's Club\n"
+"Safeway Fuel\n"
+"Sheetz\n"
+"Shell\n"
+"Sinclair\n"
+"Speedway\n"
+"Spinx\n"
+"Stewart's Shops\n"
+"Sunoco\n"
+"Tesoro\n"
+"Texaco\n"
+"Thorntons Inc.\n"
+"Travelcenters of America\n"
+"Valero\n"
+"Wawa\n"
+"UBER\n"
+"Gas";
