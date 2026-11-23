/** Dialog: a modal window. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { XIcon } from '@arki/icons/phosphor';
import { withAsChild } from './as-child.js';
import { cn } from './cn.js';
function Dialog({ ...props }) {
    return _jsx(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({ asChild, children, ...props }) {
    return (_jsx(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props, ...withAsChild({ asChild, children }) }));
}
function DialogPortal({ ...props }) {
    return _jsx(DialogPrimitive.Portal, { ...props });
}
function DialogClose({ asChild, children, ...props }) {
    return (_jsx(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props, ...withAsChild({ asChild, children }) }));
}
function DialogOverlay({ className, ...props }) {
    return (_jsx(DialogPrimitive.Backdrop, { "data-slot": "dialog-overlay", className: cn('fixed inset-0 isolate z-50 bg-black/50 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0', className), ...props }));
}
function DialogContent({ className, children, ...props }) {
    return (_jsxs(DialogPortal, { children: [_jsx(DialogOverlay, {}), _jsxs(DialogPrimitive.Popup, { "data-slot": "dialog-content", className: cn('bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg transition data-starting-style:opacity-0 data-starting-style:scale-95 data-ending-style:opacity-0 data-ending-style:scale-95', className), ...props, children: [children, _jsxs(DialogPrimitive.Close, { className: "ring-offset-background data-open:bg-accent data-open:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [_jsx(XIcon, { weight: "regular" }), _jsx("span", { className: "sr-only", children: "Close" })] })] })] }));
}
function DialogHeader({ className, ...props }) {
    return (_jsx("div", { "data-slot": "dialog-header", className: cn('flex flex-col gap-2 text-center sm:text-left', className), ...props }));
}
function DialogFooter({ className, ...props }) {
    return (_jsx("div", { "data-slot": "dialog-footer", className: cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className), ...props }));
}
function DialogTitle({ className, ...props }) {
    return (_jsx(DialogPrimitive.Title, { "data-slot": "dialog-title", className: cn('text-lg leading-none font-semibold tracking-tight', className), ...props }));
}
function DialogDescription({ className, ...props }) {
    return (_jsx(DialogPrimitive.Description, { "data-slot": "dialog-description", className: cn('text-muted-foreground text-sm', className), ...props }));
}
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, };
//# sourceMappingURL=dialog.js.map