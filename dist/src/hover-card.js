/** Hover card: a preview card that opens on hover. */
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card';
import { withAsChild } from './as-child.js';
import { cn } from './cn.js';
function HoverCard({ 
// Radix-era props that Base UI moved to PreviewCardTrigger. Accepted and
// dropped at the Root level so consumer code typechecks; the values aren't
// honored without rewriting call sites to put them on the Trigger.
openDelay: _openDelay, closeDelay: _closeDelay, ...props }) {
    return _jsx(PreviewCardPrimitive.Root, { "data-slot": "hover-card", ...props });
}
function HoverCardTrigger({ asChild, children, ...props }) {
    return (_jsx(PreviewCardPrimitive.Trigger, { "data-slot": "hover-card-trigger", ...props, ...withAsChild({ asChild, children }) }));
}
function HoverCardContent({ className, align = 'center', alignOffset = 4, side = 'bottom', sideOffset = 4, ...props }) {
    return (_jsx(PreviewCardPrimitive.Portal, { children: _jsx(PreviewCardPrimitive.Positioner, { align: align, alignOffset: alignOffset, side: side, sideOffset: sideOffset, className: "isolate z-50", children: _jsx(PreviewCardPrimitive.Popup, { "data-slot": "hover-card-content", className: cn('origin-(--transform-origin) outline-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className), ...props }) }) }));
}
export { HoverCard, HoverCardContent, HoverCardTrigger };
//# sourceMappingURL=hover-card.js.map