import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
/** `Slot`: merge props onto a child element. */
import * as React from 'react';
import { cn } from './cn.js';
function assignRefs(refs, value) {
    for (const ref of refs) {
        if (typeof ref === 'function')
            ref(value);
        else if (ref != null)
            ref.current = value;
    }
}
/**
 * Merges the slot's props into its single child element.
 * Replacement for Radix UI's `Slot` / `asChild` pattern.
 *
 * - `className` values are concatenated via `cn()`
 * - Event handlers (`on*`) are composed so both parent and child handlers run
 * - Refs are merged with `assignRefs`
 * - All other slot props override child props
 */
export function Slot({ children, ref: slotRefProp, className: slotClassName, ...slotProps }) {
    if (!React.isValidElement(children))
        return _jsx(_Fragment, { children: children });
    const child = children;
    const childProps = child.props;
    const childRef = children.ref;
    const merged = { ...childProps };
    for (const key of Object.keys(slotProps)) {
        const slotVal = slotProps[key];
        const childVal = childProps[key];
        if (key.startsWith('on') && typeof slotVal === 'function' && typeof childVal === 'function') {
            merged[key] = (...args) => {
                slotVal(...args);
                childVal(...args);
            };
        }
        else {
            // Slot props take precedence; fall back to child value if slot prop is undefined
            merged[key] = slotVal === undefined ? childVal : slotVal;
        }
    }
    const childClassName = childProps.className;
    if (slotClassName || childClassName) {
        merged.className = cn(slotClassName, childClassName) || undefined;
    }
    if (slotRefProp || childRef) {
        merged.ref = (node) => {
            assignRefs([slotRefProp, childRef], node);
        };
    }
    return React.cloneElement(child, merged);
}
//# sourceMappingURL=slot.js.map