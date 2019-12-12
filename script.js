let fruitsoorten = [
	"&#127814;",
	"&#128166;",
	"&#127825;",
	"&#128069;",
	"&#128158;",
	"&#129316;",
	"&#128099;",
	"&#128107;",
	"&#128033;"
];

var slot1 = document.getElementById('slot1');
var slot2 = document.getElementById('slot2');
var slot3 = document.getElementById('slot3');

slot1.innerHTML = fruitsoorten[Math.floor((Math.random()*8))];
slot2.innerHTML = fruitsoorten[Math.floor((Math.random()*8))];
slot3.innerHTML = fruitsoorten[Math.floor((Math.random()*8))];

function willekeurigDraaien(){
	slot1.innerHTML = fruitsoorten[Math.floor((Math.random()*8))];
	slot2.innerHTML = fruitsoorten[Math.floor((Math.random()*8))];
	slot3.innerHTML = fruitsoorten[Math.floor((Math.random()*8))];
}