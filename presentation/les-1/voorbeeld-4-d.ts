//
// Interfaces kunnen optionele properies definiëren
// met de "?" notatie.
//

interface Shape {
	angles?: {
		topRight: number;
		bottopRight: number;
		bottomLeft: number;
		topLeft: number;
	};
	sides: number;
}
// ============================================
// --------------------------------------------
// ============================================

/** Geen toegevoegde waarde om Shape te extenden, want die is toch gelijk */
// interface Square extends Shape {}

/** We kunnen een interface niet gelijk maken aan een andere interface */
// interface Square = Shape;

/** We kunnen daar wel types voor gebruiken */
type Square = Shape;

// ============================================
// --------------------------------------------
// ============================================

interface Circle extends Shape {
	diameter: number;
	radius: number;
}

interface Triangle extends Shape {
	height: number;
}

// ============================================
// --------------------------------------------
// ============================================

const myCircle: Circle = {
	diameter: 6,
	radius: 3,
	// Hoeveel zijkanten heeft een cirkel?
	sides: 1,
};

const mySquare: Square = {
	sides: 4,
	angles: {
		bottomLeft: 90,
		bottopRight: 90,
		topLeft: 90,
		topRight: 90,
	},
};

const Triangle: Triangle = {
	height: 10,
	sides: 3,
};
