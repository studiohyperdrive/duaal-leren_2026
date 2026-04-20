//
// Interfaces kunnen de properties van andere interfaces overerven
//

interface Person {
	name: string;
	age: number;
	address: Address;
}

interface Adult extends Person {
	isGraduated: boolean;
	hardSkills: string[];
}

interface Child extends Person {
	songs: string[];
}

interface Address {
	zipCode: number;
	bus: number;
	city: string;
	country: string;
	street: string;
}

// let Olivia: Adult = {
let Olivia: Child = {
	address: {
		city: "Gent",
		country: "België",
		street: "Dok Noord",
		zipCode: 9000,
		bus: 5,
	},
	age: 20,
	name: "Olivia",
	songs: [],
};
