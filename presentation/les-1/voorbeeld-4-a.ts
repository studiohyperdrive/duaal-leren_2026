//
// Interfaces zijn een contract dat we afsluiten om te definiëren wat
// de vorm van ons object is.
//

interface Adult {
	name: string;
	age: number;
	isGraduated: boolean;
	hardSkills: string[];
	address: {
		street: string;
		city: string;
		bus: number;
		zipCode: number;
		country: string;
	};
}

interface Child {
	songs: string[];
	age: number;
	address: {
		zipCode: number;
		bus: number;
		city: string;
		country: string;
		street: string;
	};
	name: string;
}
