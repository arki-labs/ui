/** Toggle group: a set of toggles with single or multiple choice. */
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group';
import { cn } from './cn.js';
import { toggleVariants } from './toggle.js';
const ToggleGroupContext = React.createContext({
    size: 'default',
    variant: 'default',
});
function ToggleGroup({ className, variant, size, children, type, value, defaultValue, onValueChange, ...props }) {
    // Translate Radix `type` → Base UI `multiple`, and normalize Radix's
    // string-or-array value/callback shape to Base UI's always-array shape.
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
    return (_jsx(ToggleGroupPrimitive, { "data-slot": "toggle-group", "data-variant": variant, "data-size": size, className: cn('group/toggle-group data-[variant=outline]:shadow-xs flex items-center justify-center rounded-md', className), ...props, multiple: multiple, value: normalizedValue, defaultValue: normalizedDefault, onValueChange: handleValueChange, children: _jsx(ToggleGroupContext.Provider, { value: { variant, size }, children: children }) }));
}
function ToggleGroupItem({ className, children, variant, size, ...props }) {
    const { variant: groupVariant, size: groupSize } = React.useContext(ToggleGroupContext);
    return (_jsx(TogglePrimitive, { "data-slot": "toggle-group-item", "data-variant": groupVariant || variant, "data-size": groupSize || size, className: cn(toggleVariants({
            variant: groupVariant || variant,
            size: groupSize || size,
        }), 'min-w-0 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l', className), ...props, children: children }));
}
export { ToggleGroup, ToggleGroupItem };
//# sourceMappingURL=toggle-group.js.map