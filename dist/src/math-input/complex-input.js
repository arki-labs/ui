/** Complex input: a field for complex numbers. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../cn.js';
import { MathInput } from './index.js';
/**
 * Two MathInput sub-components rendered as `a + bi`, representing the real
 * and imaginary parts of a complex number. Each part independently supports
 * constants, fractions, and (optionally) infinity.
 */
export function ComplexInput({ real, imag, onRealChange, onImagChange, disabled, className, allowInfinity = false, allowFractions = true, }) {
    return (_jsxs("div", { className: cn('flex items-center gap-2', className), children: [_jsx(MathInput, { value: real, onChange: onRealChange, placeholder: "a", disabled: disabled, allowInfinity: allowInfinity, allowFractions: allowFractions, className: "flex-1" }), _jsx("span", { className: "select-none text-sm text-muted-foreground", "aria-hidden": "true", children: "+" }), _jsx(MathInput, { value: imag, onChange: onImagChange, placeholder: "b", disabled: disabled, allowInfinity: allowInfinity, allowFractions: allowFractions, className: "flex-1" }), _jsx("span", { className: "select-none text-sm font-medium", "aria-hidden": "true", children: "i" })] }));
}
//# sourceMappingURL=complex-input.js.map