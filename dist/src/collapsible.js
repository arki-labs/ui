/** Collapsible: one section that opens and closes. */
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';
import { withAsChild } from './as-child.js';
function Collapsible({ ...props }) {
    return _jsx(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({ asChild, children, ...props }) {
    return (_jsx(CollapsiblePrimitive.Trigger, { "data-slot": "collapsible-trigger", ...props, ...withAsChild({ asChild, children }) }));
}
function CollapsibleContent({ ...props }) {
    return _jsx(CollapsiblePrimitive.Panel, { "data-slot": "collapsible-content", ...props });
}
export { Collapsible, CollapsibleContent, CollapsibleTrigger };
//# sourceMappingURL=collapsible.js.map