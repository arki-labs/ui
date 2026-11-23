/** Accordion: stacked sections that open and close. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { CaretDownIcon, CaretUpIcon } from '@arki/icons/phosphor';
import { cn } from './cn.js';
function Accordion({ type, collapsible: _collapsible, value, defaultValue, onValueChange, ...props }) {
    // Translate Radix `type` → Base UI `multiple`. `collapsible` is the
    // Base UI default so it's accepted-and-ignored for backwards compat.
    const multiple = type === 'multiple' ? true : props.multiple;
    const normalizedValue = value === undefined ? undefined : Array.isArray(value) ? value : [value];
    const normalizedDefault = defaultValue === undefined ? undefined : Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    const handleValueChange = onValueChange
        ? (groupValue) => {
            if (multiple) {
                onValueChange(groupValue);
            }
            else {
                onValueChange(groupValue[0] ?? '');
            }
        }
        : undefined;
    return (_jsx(AccordionPrimitive.Root, { "data-slot": "accordion", ...props, multiple: multiple, value: normalizedValue, defaultValue: normalizedDefault, onValueChange: handleValueChange }));
}
function AccordionItem({ className, ...props }) {
    return (_jsx(AccordionPrimitive.Item, { "data-slot": "accordion-item", className: cn('border-b last:border-b-0', className), ...props }));
}
function AccordionTrigger({ className, children, ...props }) {
    return (_jsx(AccordionPrimitive.Header, { className: "flex", children: _jsxs(AccordionPrimitive.Trigger, { "data-slot": "accordion-trigger", className: cn('group/accordion-trigger flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium outline-ring/50 ring-ring/10 transition-all hover:underline focus-visible:outline-1 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 dark:outline-ring/40 dark:ring-ring/20', className), ...props, children: [children, _jsx(CaretDownIcon, { className: "pointer-events-none shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden", weight: "regular" }), _jsx(CaretUpIcon, { className: "pointer-events-none hidden shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:inline", weight: "regular" })] }) }));
}
function AccordionContent({ className, children, ...props }) {
    return (_jsx(AccordionPrimitive.Panel, { "data-slot": "accordion-content", className: "data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden text-sm", ...props, children: _jsx("div", { className: cn('h-(--accordion-panel-height) data-ending-style:h-0 data-starting-style:h-0 pb-4 pt-0', className), children: children }) }));
}
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
//# sourceMappingURL=accordion.js.map