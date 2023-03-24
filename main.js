
const employee = [
 { name: "David Carlson", age: 30 },
 { name: "John Cena", age: 34 },
 { name: "Mike Sheridan", age: 25 },
 { name: "John Carte", age: 50 }
];

let employ=employee.find(function(person)
	{
	return person.name.indexOf('John')>=0;
	});		
	console.log(employ);
	
let employ1=employee.findIndex(function(person)
	{
	return person.name.indexOf('John')>=0;
	});		
	console.log(employ1);
	