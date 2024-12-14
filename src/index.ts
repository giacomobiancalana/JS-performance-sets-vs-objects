// Video youtube da cui prendo spunto: https://www.youtube.com/watch?v=_pWA4rbzvIg

///// COSTRUZIONE ARRAY E SET ///////////
let ourArr: string[] = [];
const ourSet: Set<string> = new Set<string>();

///// POPOLAMENTO ARRAY E SET ///////////
// Popolamento array
const inizioCostruzione = performance.now();
const iterations = 1000 * 1000 * 10;  // 10 milioni di iterazioni
for (let i = 0; i < iterations; i++) {
  const element = `ciaociao-${i}`;
  ourArr[i] = element;
};
const fineCostruzione = performance.now();
const intervalloCostruzione = roundFix(fineCostruzione - inizioCostruzione, 1);
console.log("Intervallo costruzione di array: ", intervalloCostruzione, "ms");

// Popolamento set
const inizioCostruzioneSet = performance.now();
const iterationsSet = 1000 * 1000 * 10;
for (let i = 0; i < iterationsSet; i++) {
  const element = `ciaociao-${i}`;
  ourSet.add(element);
};
const fineCostruzioneSet = performance.now();
const intervalloCostruzioneSet = roundFix(fineCostruzioneSet - inizioCostruzioneSet, 1);
console.log("Intervallo costruzione del set: ", intervalloCostruzioneSet, "ms");
///////////////////////////////////////////

/** Stringa da cercare */
const searchString = 'ciaociao-877566';

// PERFORMANCE INCLUDES
const beginIncludes = performance.now();

const resIncludes = ourArr.includes(searchString);

const finalIncludes = performance.now();

console.log("Elemento trovato con includes?", resIncludes);
const intervalIncludes = roundFix(finalIncludes - beginIncludes, 1);

// PERFORMANCE CON .HAS DI SET
const beginHasSet = performance.now();

const resHasSet = ourSet.has(searchString);

const finalHasSet = performance.now();

console.log("Elemento trovato con .has di set?", resHasSet);
const intervalHasSet = roundFix(finalHasSet - beginHasSet, 1);

// Final logging
console.log("##########################################");
console.log("INTERVAL PERFORMANCE FOR INCLUDES:", intervalIncludes, "ms");
console.log("INTERVAL PERFORMANCE FOR .HAS DI SET", intervalHasSet, "ms");
console.log("RATIO BETWEEN THE TWO:", roundFix(intervalIncludes/intervalHasSet, 3));

function roundFix(num: number, precision: number = 0): number {
  return parseFloat(num.toFixed(precision));
}
