// TODO: provalo anche con DENO !!

let ourArr: string[] = [];
const ourSet: Set<string> = new Set<string>();  //TODO: const or let?
// TODO: How to properly declaare and assign a set?

const yy = 1000 * 1000 * 10;
for (let i = 0; i < yy; i++) {
  const element = `ciaociao-${i}`;
  ourArr[i] = element;
  ourSet.add(element);
};

// TODO: quanto ci metto per costruire array e set?
// TODO: setta tsconfig come altri progetti

// Performance includes
const beginIncludes = performance.now();

const resIncludes = ourArr.includes('ciaociao-877566');
const finalIncludes = performance.now();
console.log("resIncludes :", resIncludes);
const intervalIncludes = finalIncludes - beginIncludes;

// Performance set con .has
const beginHasSet = performance.now();

const resHasSet = ourSet.has('ciaociao-877566');
const finalHasSet = performance.now();
console.log("resHasSet :", resHasSet);
const intervalHasSet = finalIncludes - beginIncludes;

// Logging
console.log("Interval for includes:", intervalIncludes);
console.log("Interval for .has di set", intervalHasSet);

// TODO: perché i res interval sono uguali??
