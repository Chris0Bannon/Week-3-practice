console.log("HailSatan!!");
let potatoArray =[];

let things = ["thing", "otherThing", "yetAnotherthing"];
console.log(things.length); // the amount of items in the array in this example we are at 3


//the index always starts at 0!

console.log(things[2]);  // this will output otherThing;

//.push adds an item to the end of the array. ex;

things.push('oneMoreThing');

console.log(things.length);

let bagel = ['bacon', 'lettuce', 'tomato', 'cheese'];
bagel[0] = 'maple bacon'; // change the value at a defined index
console.log(bagel.indexOf ('mustard'));
console.log(bagel.indexOf ('cheese'));
bagel.push('mustard');
console.log(bagel.indexOf ('mustard'));
bagel.pop('mustard');
console.log(bagel);
bagel.push('mayo');
console.log(bagel);
//pusha and pop!!
bagel.push('asiago');
bagel.unshift('asiago');
bagel.shift();
bagel.unshift('seasame');
//shift and unshift!!! funsie onsies!
