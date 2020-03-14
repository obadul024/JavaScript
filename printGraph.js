
// NODE JS file to convert Facebook ** facebook_combined.txt ** File 
// into Graphs Using Graph-Data-structure Library 
// from https://github.com/datavis-tech/graph-data-structure/blob/master/index.js 
// USE  **NPM INSTALL graph-data-structure ** to complete requirements
// console PIPE is used to save the output into a JSON File format 


var Graph = require("graph-data-structure");
var graph = Graph();
var res = "";
var rl = require('readline').createInterface({
  input: require('fs').createReadStream('facebook_combined.txt')
});

global.myarray = [];
rl.on('line', function (line) {
  //console.log('Line from file:', line);
  res = line.split(" ");
  global.myarray.push(line);
  graph.addEdge(`${res[0]}`, `${res[1]}`);
});

rl.on('close', function () {
	//console.log("GLOBAL ARRAY");
    //console.log(global.myarray);
	var serialized = graph.serialize();
	console.log(serialized);
	const jsonStr  = JSON.stringify(serialized);
	console.log(jsonStr);
	
});














/*
var Graph = require("graph-data-structure");
var graph = Graph();
const fs = require('fs');
const readline = require('readline');
var readString =""; 

const rl = readline.createInterface({
  input: fs.createReadStream('graph.txt'),
  crlfDelay: Infinity
});
rl.on('line', (line) => {
//var res = line.split(" ");
readString +=" "+line;
//graph.addEdge(`${res[0]}`, `${res[1]}`);
});

r1.on('close', function(){
	console.log(readString);
	
});

graph.addEdge("ajax", "nits");
var serialized = graph.serialize();

console.log(serialized);
console.log(readString);

*/

/*
var Graph = require("graph-data-structure");
var graph = Graph();
var line = "1 110"
var res = line.split(" ");
graph.addEdge(res[0], res[1]);

var serialized = graph.serialize();
console.log(serialized);
*/