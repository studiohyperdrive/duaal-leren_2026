//
// Interfaces kunnen generieke properties doorkrijgen, wat kan gaan
// van eenvoudig tot zo complex als je wil
//

interface apiResponse<GenericType> {
	name: string;
	dateTime: string;
	data: GenericType;
}

const variableName: apiResponse<boolean> = {
	dateTime: "2026-04-20",
	name: "Maria",
	data: true,
};
