/** Alert dialog: a modal that asks the user to confirm before an action. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog';
import { withAsChild } from './as-child.js';
import { buttonVariants } from './button.js';
import { cn } from './cn.js';
function AlertDialog({ ...props }) {
    return _jsx(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({ asChild, children, ...props }) {
    return (_jsx(AlertDialogPrimitive.Trigger, { "data-slot": "alert-dialog-trigger", ...props, ...withAsChild({ asChild, children }) }));
}
function AlertDialogPortal({ ...props }) {
    return _jsx(AlertDialogPrimitive.Portal, { ...props });
}
function AlertDialogOverlay({ className, ...props }) {
    return (_jsx(AlertDialogPrimitive.Backdrop, { "data-slot": "alert-dialog-overlay", className: cn('fixed inset-0 z-50 bg-black/80 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0', className), ...props }));
}
function AlertDialogContent({ className, ...props }) {
    return (_jsxs(AlertDialogPortal, { children: [_jsx(AlertDialogOverlay, {}), _jsx(AlertDialogPrimitive.Popup, { "data-slot": "alert-dialog-content", className: cn('bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95', className), ...props })] }));
}
function AlertDialogHeader({ className, ...props }) {
    return (_jsx("div", { "data-slot": "alert-dialog-header", className: cn('flex flex-col gap-2 text-center sm:text-left', className), ...props }));
}
function AlertDialogFooter({ className, ...props }) {
    return (_jsx("div", { "data-slot": "alert-dialog-footer", className: cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className), ...props }));
}
function AlertDialogTitle({ className, ...props }) {
    return (_jsx(AlertDialogPrimitive.Title, { "data-slot": "alert-dialog-title", className: cn('text-lg font-semibold', className), ...props }));
}
function AlertDialogDescription({ className, ...props }) {
    return (_jsx(AlertDialogPrimitive.Description, { "data-slot": "alert-dialog-description", className: cn('text-muted-foreground text-sm', className), ...props }));
}
function AlertDialogAction({ className, ...props }) {
    return _jsx("button", { "data-slot": "alert-dialog-action", className: cn(buttonVariants(), className), ...props });
}
function AlertDialogCancel({ className, ...props }) {
    return (_jsx(AlertDialogPrimitive.Close, { "data-slot": "alert-dialog-cancel", className: cn(buttonVariants({ variant: 'outline' }), className), ...props }));
}
export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, };
//# sourceMappingURL=alert-dialog.js.map