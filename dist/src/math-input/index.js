/** Math input: a field for typing maths with a keypad. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { Sigma } from '@arki/icons/phosphor';
import { Button } from '../button.js';
import { cn } from '../cn.js';
import { Input } from '../input.js';
import { Popover, PopoverContent, PopoverTrigger } from '../popover.js';
import { Separator } from '../separator.js';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs.js';
import { CATEGORY_LABELS, CATEGORY_ORDER, MATH_CONSTANTS } from './constants.js';
import { displayToNumber, numberToDisplay, parseFraction } from './utils.js';
function clamp(value, min, max) {
    if (value === null)
        return null;
    // Pass ±Infinity through without clamping
    if (!Number.isFinite(value))
        return value;
    let v = value;
    if (min !== undefined && v < min)
        v = min;
    if (max !== undefined && v > max)
        v = max;
    return v;
}
export function MathInput({ value, onChange, placeholder = '0', disabled = false, className, allowInfinity = true, allowFractions = true, min, max, }) {
    const [open, setOpen] = React.useState(false);
    const [displayValue, setDisplayValue] = React.useState(() => numberToDisplay(value));
    const [numerator, setNumerator] = React.useState('');
    const [denominator, setDenominator] = React.useState('');
    // Sync display string when value changes externally (adjusting state while rendering, not in an effect)
    const [previousValue, setPreviousValue] = React.useState(value);
    // Object.is, not !==: NaN (a 0/0 result) is never !== itself, which would set state on every render.
    if (!Object.is(value, previousValue)) {
        setPreviousValue(value);
        setDisplayValue(numberToDisplay(value));
    }
    const tabList = React.useMemo(() => {
        const tabs = [{ value: 'constants', label: 'Constants' }];
        if (allowFractions)
            tabs.push({ value: 'fraction', label: 'Fraction' });
        if (allowInfinity)
            tabs.push({ value: 'infinity', label: 'Infinity' });
        return tabs;
    }, [allowInfinity, allowFractions]);
    const constantsByCategory = React.useMemo(() => CATEGORY_ORDER.map(cat => ({
        category: cat,
        label: CATEGORY_LABELS[cat],
        items: MATH_CONSTANTS.filter(c => c.category === cat),
    })).filter(g => g.items.length > 0), []);
    const fractionResult = React.useMemo(() => {
        if (!numerator || !denominator)
            return null;
        return parseFraction(Number(numerator), Number(denominator));
    }, [numerator, denominator]);
    const handleBlur = () => {
        const parsed = displayToNumber(displayValue);
        const clamped = clamp(parsed, min, max);
        onChange(clamped);
        setDisplayValue(numberToDisplay(clamped));
    };
    const handleConstantSelect = (constantValue) => {
        const clamped = clamp(constantValue, min, max);
        onChange(clamped);
        setDisplayValue(numberToDisplay(clamped));
        setOpen(false);
    };
    const handleInfinitySelect = (sign) => {
        const infValue = sign === 1 ? Infinity : -Infinity;
        onChange(infValue);
        setDisplayValue(numberToDisplay(infValue));
        setOpen(false);
    };
    const handleFractionInsert = () => {
        if (fractionResult === null)
            return;
        const clamped = clamp(fractionResult, min, max);
        onChange(clamped);
        setDisplayValue(numberToDisplay(clamped));
        setNumerator('');
        setDenominator('');
        setOpen(false);
    };
    return (_jsxs("div", { className: cn('flex items-center gap-1', className), children: [_jsx(Input, { type: "text", inputMode: "decimal", placeholder: placeholder, value: displayValue, disabled: disabled, onChange: e => setDisplayValue(e.target.value), onBlur: handleBlur, className: "flex-1" }), !disabled && (_jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverTrigger, { render: _jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "size-9 shrink-0 text-muted-foreground hover:text-foreground", "aria-label": "Open mathematical constant picker" }), children: _jsx(Sigma, { className: "size-4" }) }), _jsx(PopoverContent, { className: "w-80 p-0", align: "end", sideOffset: 6, children: _jsxs(Tabs, { defaultValue: "constants", className: "w-full", children: [_jsx(TabsList, { className: "w-full rounded-none border-b border-border bg-transparent", children: tabList.map(tab => (_jsx(TabsTrigger, { value: tab.value, className: "flex-1 text-xs", children: tab.label }, tab.value))) }), _jsx(TabsContent, { value: "constants", className: "max-h-72 overflow-y-auto p-3", children: _jsx("div", { className: "space-y-3", children: constantsByCategory.map(({ category, label, items }) => (_jsxs("div", { children: [_jsx("p", { className: "mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: label }), _jsx("div", { className: "grid grid-cols-4 gap-1", children: items.map(c => (_jsxs(Button, { variant: "outline", size: "sm", className: "flex h-auto flex-col gap-0.5 px-1 py-2", onClick: () => handleConstantSelect(c.value), title: `${c.name} ≈ ${c.value.toPrecision(6)}`, children: [_jsx("span", { className: "text-base font-medium leading-none", children: c.symbol }), _jsx("span", { className: "text-[9px] leading-none text-muted-foreground", children: c.name.split(' ')[0] })] }, c.symbol))) })] }, category))) }) }), allowFractions && (_jsxs(TabsContent, { value: "fraction", className: "p-4", children: [_jsx("p", { className: "mb-3 text-xs text-muted-foreground", children: "Enter a fraction \u2014 it will be stored as its decimal value." }), _jsxs("div", { className: "flex flex-col items-center gap-1", children: [_jsx("input", { type: "number", value: numerator, onChange: e => setNumerator(e.target.value), placeholder: "Numerator", className: "h-8 w-28 rounded-md border border-border bg-background px-2 text-center text-sm focus:outline-none focus:ring-1 focus:ring-ring", "aria-label": "Fraction numerator" }), _jsx(Separator, { className: "w-28" }), _jsx("input", { type: "number", value: denominator, onChange: e => setDenominator(e.target.value), placeholder: "Denominator", className: "h-8 w-28 rounded-md border border-border bg-background px-2 text-center text-sm focus:outline-none focus:ring-1 focus:ring-ring", "aria-label": "Fraction denominator" })] }), fractionResult !== null && (_jsxs("p", { className: "mt-2 text-center text-xs text-muted-foreground", children: ["= ", fractionResult] })), _jsxs(Button, { className: "mt-3 w-full", size: "sm", disabled: fractionResult === null, onClick: handleFractionInsert, children: ["Insert", numerator && denominator ? ` ${numerator}/${denominator}` : ' fraction'] })] })), allowInfinity && (_jsxs(TabsContent, { value: "infinity", className: "p-4", children: [_jsx("p", { className: "mb-3 text-xs text-muted-foreground", children: "Select a signed infinity value." }), _jsxs("div", { className: "grid grid-cols-2 gap-2", children: [_jsxs(Button, { variant: "outline", className: "flex h-auto flex-col gap-1 py-3", onClick: () => handleInfinitySelect(1), children: [_jsx("span", { className: "text-2xl font-light", children: "+\u221E" }), _jsx("span", { className: "text-xs text-muted-foreground", children: "Positive" })] }), _jsxs(Button, { variant: "outline", className: "flex h-auto flex-col gap-1 py-3", onClick: () => handleInfinitySelect(-1), children: [_jsx("span", { className: "text-2xl font-light", children: "\u2212\u221E" }), _jsx("span", { className: "text-xs text-muted-foreground", children: "Negative" })] })] })] }))] }) })] }))] }));
}
//# sourceMappingURL=index.js.map