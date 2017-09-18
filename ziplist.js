let a = ["a", "b", "c"];
let b = [1, 2, 3];

let a1 = ["a", "b", "c"];
let b1 = [1, 2, 3];

function zipList(a, b){
  let x = [];

  while(a.length != 0 || b.length != 0){
    if(a.length != 0){
      x.push(a.shift());
    }

    if(b.length != 0){
      x.push(b.shift());
    }
  }

  return x;
}

console.log(zipList(a,b));

function zipListTheSimpleWay(a, b){
  return _.flatten(_.zip(a, b));
}

console.log(zipListTheSimpleWay(a1,b1));