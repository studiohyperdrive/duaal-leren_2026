# Presentaties

Deze map bevat de vragen en antwoorden die tijdens de lessen gesteld zijn. Gebruik dit als referentie als je vragen hebt over de onderwerpen die we behandeld hebben, of als je een opfrisser nodig hebt.

# Voorbeeld files runnen in terminal

```bash
# Javascript voorbeeld
node les-1/voorbeeld-1
# Typescript voorbeeld
npx tsx les-1/voorbeeld-2
```

# Handige VSCode keybinds

1. `Ctrl + Shift + P` (Windows/Linux) of `Cmd + Shift + P` (Mac): Open de Command Palette.
1. Type `keyboard shortcuts` en selecteer `Preferences: Open Keyboard Shortcuts` om de lijst met sneltoetsen te bekijken en aan te passen.

Enkele handige VSCode functies om te gaan mappen naar een shortcut die voor jou werkt:

- `markdown.showPreviewToSide`: Toont een preview van je Markdown-bestand naast het huidige bestand.
- `editor.action.commentLine`: Commentaar toevoegen of verwijderen van de huidige regel of geselecteerde regels.

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

## Wat betekent `void`?

`void` betekent dat een functie geen waarde teruggeeft. Je kan wel `return;` gebruiken zonder waarde.
Stel dat je ergens online code ziet zoals onderstaande (`void 0`), dan spreken de de void constructor aan. Dat betekent dus in de praktijk hetzelfde als `undefined`:

```JS
function exampleFunction() {
  // code hier
  return void 0;
}
```

## Op welke manier weet ik of ik klaar ben om te solliciteren voor een functie?

Gebruik een roadmap per rol om je niveau te checken en hiaten te vinden, bijvoorbeeld via

> [roadmap.sh](https://roadmap.sh/).

## Op welke manier kan ik de browser openen binnen VSCode?

Je kan manueel een browser openen binnen VSCode, of de config aanpassen zodat je elke localhost automatisch opent binnen VSCode. De laatste optie is handig als je snel wilt debuggen en testen zonder van venster te wisselen.

> [VSCode documentatie](https://code.visualstudio.com/docs/debugtest/integrated-browser#:~:text=in%20future%20releases.-,Open%20the%20browser,in%20its%20own%20editor%20tab.)

## Parallax effect React?

> [React Spring Parallax](https://react-spring.dev/docs/components/parallax)

> [Simple Parallax](https://simpleparallax.com/)

> [Framer Motion](https://motion.dev/tutorials/react-parallax)

## GIT

> [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

> [Git Documentation](https://git-scm.com/doc)

> [Git Cheat Sheet](https://git-scm.com/cheat-sheet)

### Hoe kan ik `node_modules` uit mijn repo verwijderen nadat ik ze per ongeluk heb gecommit en gepusht?

Je kunt de volgende stappen volgen om `node_modules` uit je repository te verwijderen:

1. Verwijder de `node_modules` map uit je lokale repository:
   ```bash
   rm -rf node_modules
   ```
2. Voeg `node_modules` toe aan je `.gitignore` bestand om te voorkomen dat het in de toekomst wordt gecommit:
   ```
   node_modules/
   ```
3. Maak een nieuwe commit om de verwijdering van `node_modules` vast te leggen:
   ```bash
   git add .gitignore
   git rm -r --cached node_modules
   git commit -m "Remove node_modules and add to .gitignore"
   ```
4. Push de wijzigingen naar de remote repository:
   ```bash
   git push origin <branch-name>
   ```

### Wat is squashen en wanneer zou ik het wel of niet doen?

Squashen is het proces van het samenvoegen van meerdere commits tot één enkele commit. Dit kan handig zijn om een schonere geschiedenis te behouden, vooral als je veel kleine commits hebt die samen één logisch geheel vormen. Je zou squashen moeten doen als je een reeks commits hebt die samen één functie of bugfix vertegenwoordigen, maar je zou het niet moeten doen als je de individuele commits wilt behouden voor historisch inzicht of als ze al naar een remote repository zijn gepusht.

### Wat doet een revert en hoe komt het dat mijn vorige stap niet altijd helemaal terug is.

Een `git revert` maakt een nieuwe commit die de wijzigingen van een eerdere commit ongedaan maakt. Het verwijdert de commit niet uit de geschiedenis, maar voegt een nieuwe commit toe die de wijzigingen terugdraait. Dit kan leiden tot situaties waarin je vorige stap niet volledig wordt teruggedraaid als er conflicten of afhankelijkheden zijn tussen commits.

### Wat is het verschil tussen een commit en een push?

Een commit is een lokale actie waarbij je wijzigingen opslaat in je lokale repository. Een push is een actie waarbij je je lokale commits naar een remote repository (zoals GitHub) stuurt, zodat anderen ze kunnen zien en gebruiken.

### Op welke manier kan je de git documentie lezen?

Je kan de git documentatie lezen via de command line met `git help <command>` of online via [Git Documentation](https://git-scm.com/doc).

### Wanneer mag je force-pushen en wat is het verschil tussen een force push en een normale push?

Je mag alleen force-pushen als je zeker weet dat niemand anders aan dezelfde branch werkt, omdat een force push de geschiedenis van de branch herschrijft en kan leiden tot verlies van werk van anderen. Een normale push voegt commits toe aan de bestaande geschiedenis, terwijl een force push de geschiedenis herschrijft en bestaande commits kan verwijderen of overschrijven.

## Wat is het verschil tussen een relationele database en een NoSQL database?

Een relationele database gebruikt tabellen om gegevens op te slaan en maakt gebruik van SQL (Structured Query Language) voor het beheren van de gegevens. Een NoSQL database daarentegen gebruikt verschillende datamodellen (zoals document, key-value, grafiek, etc.) en is ontworpen voor schaalbaarheid en flexibiliteit, vaak zonder een vaste schema. Relationele databases zijn geschikt voor gestructureerde gegevens en complexe query's, terwijl NoSQL databases beter zijn voor ongestructureerde gegevens en snelle iteraties.
