// Video youtube da cui prendo spunto: https://www.youtube.com/watch?v=_pWA4rbzvIg

import { roundFix } from "./utils";

// OSSERVAZIONE:
// gli oggetti possono tenere in memoria massimo sui 2.7 milioni di campi e valori, array e Set molti di più (anche le Map)

///// COSTRUZIONE ARRAY E SET ///////////
let ourArr: string[] = [];
const ourSet: Set<string> = new Set<string>();
const ourOgg: { [key: string]: string } = {};
const ourMap: Map<string, string> = new Map<string, string>();

/////  POPOLAMENTO ARRAY, SET, OGGETTO  ///////////
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

// Popolamento Map
const inizioCostruzioneMap = performance.now();
for (let i = 0; i < iterations; i++) {
  ourMap.set(`ciaociao-${i}`, 'a');  // Potrei mettere come valore qualunque cosa, tanto mi interessa la chiave
  // Differenza col mettere come chiave il numero e come valore tutta la stringa?
};
const fineCostruzioneMap = performance.now();
const intervalloCostruzioneMap = roundFix(fineCostruzioneMap - inizioCostruzioneMap, 5);
console.log("Intervallo costruzione della Map: ", intervalloCostruzioneMap, "ms");

// // Popolamento oggetto
// const inizioCostruzioneOgg = performance.now();
// for (let i = 0; i < iterations; i++) {
//   ourOgg[`ciaociao-${i}`] = `a`;  // Potrei mettere come valore qualunque cosa, tanto mi interessa la chiave
//   // Differenza col mettere come chiave il numero e come valore tutta la stringa?
// };
// const fineCostruzioneOgg = performance.now();
// const intervalloCostruzioneOgg = roundFix(fineCostruzioneOgg - inizioCostruzioneOgg, 5);
// console.log("Intervallo costruzione dell'oggetto: ", intervalloCostruzioneOgg, "ms");

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

// // PERFORMANCE CON OGGETTO
// const beginOgg = performance.now();
// const resOgg = ourOgg[searchString];
// const finalOgg = performance.now();
// console.log("Elemento trovato con stretegia oggetto?", resOgg !== null && resOgg !== undefined);
// const intervalOgg = finalOgg - beginOgg;

// PERFORMANCE CON MAP
const beginMap = performance.now();
const resMap = ourMap.has(searchString);
const finalMap = performance.now();
console.log("Elemento trovato con stretegia Map?", resMap !== null && resMap !== undefined);
const intervalMap = finalMap - beginMap;

// Final logging
console.log("##########################################");
console.log("INTERVAL PERFORMANCE FOR INCLUDES:", roundFix(intervalIncludes, 5), "ms");
console.log("INTERVAL PERFORMANCE FOR .HAS DI SET", roundFix(intervalHasSet, 5), "ms");
// console.log("INTERVAL PERFORMANCE FOR OGGETTO", roundFix(intervalOgg, 5), "ms");
console.log("INTERVAL PERFORMANCE FOR MAP", roundFix(intervalMap, 5), "ms");
console.log("##########################################");
console.log("RATIO BETWEEN includes e hasSet:", roundFix(intervalIncludes/intervalHasSet, 5));
// console.log("RATIO BETWEEN includes and oggetto:", roundFix(intervalIncludes/intervalOgg, 5));
console.log("RATIO BETWEEN includes and Map:", roundFix(intervalIncludes/intervalMap, 5));
