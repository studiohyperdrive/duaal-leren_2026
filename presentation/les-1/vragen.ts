// =======================================
// Vraag: De notatie van een Array
// =======================================

// Er zijn twee manieren; afhankelijk van wat je zelf het meest leesbaar vindt:
// Via de array notatie
const exampleArray1: string[] = ["hello", "world"];
// Of via de array primitive constructor (https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
const exampleArray2: Array<string> = ["hello", "world"];

// Er zijn verschillende primitives; en voor elke primitive is er een constructor
String();
Boolean();
Object();
Array();
Number();

// Die constructor evalueert de value binnen de call signature (haakjes) en returnt een primitive
// gelijkend aan de constructor:
String(true); // returns: "true"
Boolean("string"); // returns: true

// =======================================
// Vraag:
// =======================================
