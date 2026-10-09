/**
 * Maps a stored number to its human-readable display string.
 * - Exact IEEE-754 constant matches return their Unicode symbol (e.g. Math.PI → "π").
 * - Infinity → "+∞", -Infinity → "−∞".
 * - null → "".
 * - Any other number → String(n).
 */
export declare function numberToDisplay(value: number | null): string;
/**
 * Parses a display string back to a number.
 * Handles:
 * - Unicode infinity glyphs and the string literals "Infinity" / "-Infinity"
 * - Constant symbols (π, e, φ, τ, √2, √3, ln2, γ)
 * - Fraction shorthand "a/b" (e.g. "3/4" → 0.75)
 * - Plain numeric strings
 * Returns null for empty or unparseable input.
 */
export declare function displayToNumber(raw: string): number | null;
/**
 * Computes the decimal result of numerator / denominator.
 * Returns null if the denominator is zero or the result is non-finite.
 */
export declare function parseFraction(numerator: number, denominator: number): number | null;
//# sourceMappingURL=utils.d.ts.map