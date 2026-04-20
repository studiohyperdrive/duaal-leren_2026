//
// Interfaces kunnen complexere structuren aannemen
//

interface Adult {
	name: string;
	age: number;
	isGraduated: boolean;
	hardSkills: string[];
	address: Address;
}

interface Child {
	songs: string[];
	age: number;
	address: Address;
	name: string;
}

interface Address {
	zipCode: number;
	bus: number;
	city: string;
	country: string;
	street: string;
}
