"use strict";
console.log("hi");


/*Create a three level prototype chain for identifying animals. Pick a couple of your favorite animals, and research their species and the genus that the species belongs to. Wikipedia is a great resource for this.

Create a base Animals function.
Create a genus function for each of your favorite animals that inherits from Animal.
Create a species function for each of your favorite animals that inherits from the appropriate genus.
Every animal must have a name property.
Each genus must have a genusName property.
Each species must have a speciesName property.
*/

function Animal () {
	this.name = null;
}

function Genus () {
  this.genusName = null;
}
// Set Animal as the prototype of genus
Genus.prototype = new Animal();

function Species () {
  this.speciesName = null;
}
// Set genus as the prototype for species
Species.prototype = new Genus();

// Create a new instance of species
var BarredOwl = new Species();
var BarnOwl = new Species();
var GreatHornedOwl = new Species();
var WesternScreechOwl = new Species();

// Output the name, genus name, and species name 
// BarredOwl.name = "Barred Owl";
// BarredOwl.genusName = "Strix";
// BarredOwl.speciesName = "Strix Varia";
// 

GreatHornedOwl.name ="Great Horned Owl";
GreatHornedOwl.genusName = "Bubo";
GreatHornedOwl.speciesName = "Bubo Virginianus";
BarredOwl = {
	name: "Barred Owl",
	genusName: "Strix",
	speciesName: "Strix Varia"
};

BarnOwl.name = "Barn Owl";
BarnOwl.genusName = "Tyto";
BarnOwl.speciesName = "TytoAlba";

WesternScreechOwl.name = "Western Screech Owl";
WesternScreechOwl.genusName = "Megascops";
WesternScreechOwl.speciesName = "Megascops kennicottii";

console.log("Barred Owl", BarredOwl);
console.log("Barn Owl", BarnOwl);
console.log("Great Horned Owl", GreatHornedOwl);
console.log("WesternScreechOwl", WesternScreechOwl);







