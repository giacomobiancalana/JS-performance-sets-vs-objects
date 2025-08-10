/**
 * @param num numero da arrotondare
 * @param precision numero di decimali ammissibili
 * @returns numero arrotondato
 */
export function roundFix(num: number, precision: number = 0): number {
  return parseFloat(num.toFixed(precision));
}