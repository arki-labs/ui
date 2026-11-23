/** Tooltip: a short hint on hover or focus. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';
import { withAsChild } from './as-child.js';
import { cn } from './cn.js';
function TooltipProvider({ delay = 0, 
// Radix-era alias kept for backwards compat — Base UI renamed to `delay`.
delayDuration, ...props }) {
    return (_jsx(TooltipPrimitive.Provider, { "data-slot": "tooltip-provider", delay: delayDuration ?? delay, ...props }));
}
function Tooltip({ ...props }) {
    return (_jsx(TooltipProvider, { children: _jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) }));
}
function TooltipTrigger({ asChild, children, ...props }) {
    return (_jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props, ...withAsChild({ asChild, children }) }));
}
function TooltipContent({ className, sideOffset = 4, side = 'top', align = 'center', alignOffset = 0, children, ...props }) {
    return (_jsx(TooltipPrimitive.Portal, { children: _jsx(TooltipPrimitive.Positioner, { side: side, sideOffset: sideOffset, align: align, alignOffset: alignOffset, className: "isolate z-50", children: _jsxs(TooltipPrimitive.Popup, { "data-slot": "tooltip-content", className: cn('bg-primary text-primary-foreground z-50 max-w-sm rounded-md px-3 py-1.5 text-xs origin-(--transform-origin) data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className), ...props, children: [children, _jsx(TooltipPrimitive.Arrow, { className: cn('bg-primary fill-primary z-50 size-2.5 rotate-45 rounded-[2px]', 'data-[side=bottom]:top-[-5px]', 'data-[side=top]:bottom-[-5px]', 'data-[side=left]:right-[-5px]', 'data-[side=right]:left-[-5px]') })] }) }) }));
}
const WithTooltip = ({ content, trigger, delayDuration = 700, side = 'right' }) => {
    // Base UI's TooltipTrigger uses `render` instead of `asChild`.
    // When trigger is a React element, use it as the render target so the tooltip
    // attaches to the element directly rather than wrapping it in a button.
    if (React.isValidElement(trigger)) {
        const triggerEl = trigger;
        return (_jsx(TooltipProvider, { delay: delayDuration, children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { render: triggerEl, children: triggerEl.props.children }), _jsx(TooltipContent, { side: side, children: content })] }) }));
    }
    return (_jsx(TooltipProvider, { delay: delayDuration, children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { children: trigger }), _jsx(TooltipContent, { side: side, children: content })] }) }));
};
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, WithTooltip };
//# sourceMappingURL=tooltip.js.map