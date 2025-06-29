// Video youtube da cui prendo spunto: https://www.youtube.com/watch?v=_pWA4rbzvIg

///// COSTRUZIONE ARRAY E SET ///////////
let ourArr: string[] = [];
const ourSet: Set<string> = new Set<string>();

///// POPOLAMENTO ARRAY E SET ///////////
// Popolamento array
const inizioCostruzione = performance.now();
const iterations = 1000 * 1000 * 10;  // 10 milioni di iterazioni
for (let i = 0; i < iterations; i++) {
  ourArr[i] = `ciaociao-${i}`;
};
const fineCostruzione = performance.now();
const intervalloCostruzione = roundFix(fineCostruzione - inizioCostruzione, 5);
console.log("Intervallo costruzione di array: ", intervalloCostruzione, "ms");

// Popolamento set
const inizioCostruzioneSet = performance.now();
for (let i = 0; i < iterations; i++) {
  ourSet.add(`ciaociao-${i}`);
};
const fineCostruzioneSet = performance.now();
const intervalloCostruzioneSet = roundFix(fineCostruzioneSet - inizioCostruzioneSet, 5);
console.log("Intervallo costruzione del set: ", intervalloCostruzioneSet, "ms");
///////////////////////////////////////////

const numeroRandom = Math.trunc(Math.random() * iterations);  // tra 0 e iterationsSet - 1
/** Stringa da cercare */
const searchString = `ciaociao-${numeroRandom}`;
console.log(`Stringa da cercare: ${searchString}`);

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
console.log("INTERVAL PERFORMANCE FOR INCLUDES:", roundFix(intervalIncludes, 5), "ms");
console.log("INTERVAL PERFORMANCE FOR .HAS DI SET", roundFix(intervalHasSet, 5), "ms");
console.log("RATIO BETWEEN THE TWO:", roundFix(intervalIncludes/intervalHasSet, 5));

/**
 * @param num numero da arrotondare
 * @param precision numero di decimali ammissibili
 * @returns numero arrotondato
 */
function roundFix(num: number, precision: number = 0): number {
  return parseFloat(num.toFixed(precision));
}
