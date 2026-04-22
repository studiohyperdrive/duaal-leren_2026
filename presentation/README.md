# Presentaties

Deze map bevat de codevoorbeelden die tijdens de presentaties worden gebruikt. Elk voorbeeld is georganiseerd in submappen op basis van het onderwerp of de technologie die wordt behandeld.

# Voorbeeld files runnen in terminal

```bash
# Javascript voorbeeld
node les-1/voorbeeld-1
# Typescript voorbeeld
npx tsx les-1/voorbeeld-2
```

# Topics en vragen

## De notatie van een Array

Er zijn twee geldige notaties in TypeScript:

- `string[]`
- `Array<string>`

Het is afhankelijk van wat je zelf het meest leesbaar vindt:

```JS
// Via de array notatie
const exampleArray1: string[] = ['hello', 'world'];
// Of via de (primitive) array constructor.
const exampleArray2: Array<string> = ['hello', 'world'];
```

> [Wat is een primitive?](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

Er zijn verschillende primitives; en voor elke primitive is er een constructor:

```JS
new String();
new Boolean();
new Object();
new Array();
new Number();
```

## Wat betekent "Void"?

`void` betekent dat een functie geen waarde teruggeeft. Je kan wel `return;` gebruiken zonder waarde.

## Op welke manier weet ik of ik klaar ben om te solliciteren voor een functie?

Gebruik een roadmap per rol om je niveau te checken en hiaten te vinden, bijvoorbeeld via

> [roadmap.sh](https://roadmap.sh/).

## Op welke manier kan ik de browser openen binnen VSCode?

Je kan manueel een browser openen binnen VSCode, of de config aanpassen zodat je elke localhost automatisch opent binnen VSCode. De laatste optie is handig als je snel wilt debuggen en testen zonder van venster te wisselen.

> [VSCode documentatie](https://code.visualstudio.com/docs/debugtest/integrated-browser#:~:text=in%20future%20releases.-,Open%20the%20browser,in%20its%20own%20editor%20tab.)
