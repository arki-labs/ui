/** Radio group: choose one option from a list. */
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';
import { cn } from './cn.js';
function RadioGroup({ className, ...props }) {
    return _jsx(RadioGroupPrimitive, { "data-slot": "radio-group", className: cn('grid gap-3', className), ...props });
}
function RadioGroupItem({ className, ...props }) {
    return (_jsx(RadioPrimitive.Root, { "data-slot": "radio-group-item", className: cn('shadow-xs aria-invalid:focus-visible:ring-0 aspect-square size-4 shrink-0 rounded-full border border-input text-primary outline-ring/50 ring-ring/10 transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50 dark:outline-ring/40 dark:ring-ring/20', className), ...props, children: _jsx(RadioPrimitive.Indicator, { "data-slot": "radio-group-indicator", className: "relative flex items-center justify-center", children: _jsx("span", { className: "absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full fill-primary bg-primary" }) }) }));
}
export { RadioGroup, RadioGroupItem };
//# sourceMappingURL=radio-group.js.map