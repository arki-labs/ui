export type ComplexInputProps = {
    real: number | null;
    imag: number | null;
    onRealChange: (v: number | null) => void;
    onImagChange: (v: number | null) => void;
    disabled?: boolean;
    className?: string;
    /** Show ±∞ in the pickers. Defaults to false — infinite complex parts are rarely meaningful. */
    allowInfinity?: boolean;
    /** Show fraction picker. Default: true */
    allowFractions?: boolean;
};
/**
 * Two MathInput sub-components rendered as `a + bi`, representing the real
 * and imaginary parts of a complex number. Each part independently supports
 * constants, fractions, and (optionally) infinity.
 */
export declare function ComplexInput({ real, imag, onRealChange, onImagChange, disabled, className, allowInfinity, allowFractions, }: ComplexInputProps): import("react").JSX.Element;
//# sourceMappingURL=complex-input.d.ts.map