// Video youtube da cui prendo spunto: https://www.youtube.com/watch?v=_pWA4rbzvIg

let ourArr: string[] = [];
const ourSet: Set<string> = new Set<string>();

///// COSTRUZIONE ARRAY E SET ///////////
// Costruzione array
const inizioCostruzione = performance.now();
const iterations = 1000 * 1000 * 10;
for (let i = 0; i < iterations; i++) {
  const element = `ciaociao-${i}`;
  ourArr[i] = element;
};
const fineCostruzione = performance.now();
const intervalloCostruzione = fineCostruzione - inizioCostruzione;
console.log("Intervallo costruzione di array: ", intervalloCostruzione, "ms");

// Costruzione set
const inizioCostruzioneSet = performance.now();
const iterationsSet = 1000 * 1000 * 10;
for (let i = 0; i < iterationsSet; i++) {
  const element = `ciaociao-${i}`;
  ourSet.add(element);
};
const fineCostruzioneSet = performance.now();
const intervalloCostruzioneSet = fineCostruzioneSet - inizioCostruzioneSet;
console.log("Intervallo costruzione del set: ", intervalloCostruzioneSet, "ms");
///////////////////////////////////////////

/** Stringa da cercare */
const searchString = 'ciaociao-877566';

// PERFORMANCE INCLUDES
const beginIncludes = performance.now();

const resIncludes = ourArr.includes(searchString);

const finalIncludes = performance.now();

console.log("Elemento trovato con includes?", resIncludes);
const intervalIncludes = finalIncludes - beginIncludes;

// PERFORMANCE CON .HAS DI SET
const beginHasSet = performance.now();

const resHasSet = ourSet.has(searchString);

const finalHasSet = performance.now();

console.log("Elemento trovato con .has di set?", resHasSet);
const intervalHasSet = finalHasSet - beginHasSet;

// Final logging
console.log("##########################################");
console.log("INTERVAL PERFORMANCE FOR INCLUDES:", intervalIncludes);
console.log("INTERVAL PERFORMANCE FOR .HAS DI SET", intervalHasSet);
console.log("RATIO BETWEEN THE TWO:", (intervalIncludes/intervalHasSet).toFixed(3));
