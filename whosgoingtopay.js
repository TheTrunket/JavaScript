

function whosPaying(names) {
var names=["Angela", "Martin", "David", "Norbi", "Oliver", "Balazs"];
var numberOfPeople = names.length;
var randomPeople = Math.floor(Math.random() * numberOfPeople);
var payingPerson = names[randomPeople];

console.log(payingPerson +" is paying")

}

whosPaying();