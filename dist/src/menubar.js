/** Menubar: a row of menus, like an app menu bar. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { Menubar as MenubarPrimitive } from '@base-ui/react/menubar';
import { CaretRightIcon } from '@arki/icons/phosphor';
import { cn } from './cn.js';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, } from './dropdown-menu.js';
function Menubar({ className, ...props }) {
    return (_jsx(MenubarPrimitive, { "data-slot": "menubar", className: cn('bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs', className), ...props }));
}
function MenubarMenu({ ...props }) {
    return _jsx(DropdownMenu, { "data-slot": "menubar-menu", ...props });
}
function MenubarGroup({ ...props }) {
    return _jsx(DropdownMenuGroup, { "data-slot": "menubar-group", ...props });
}
function MenubarPortal({ ...props }) {
    return _jsx(DropdownMenuPortal, { "data-slot": "menubar-portal", ...props });
}
function MenubarRadioGroup({ ...props }) {
    return _jsx(DropdownMenuRadioGroup, { "data-slot": "menubar-radio-group", ...props });
}
function MenubarTrigger({ className, ...props }) {
    return (_jsx(DropdownMenuTrigger, { "data-slot": "menubar-trigger", className: cn('focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground flex items-center rounded-xs px-2 py-1 text-sm font-medium outline-hidden select-none', className), ...props }));
}
function MenubarContent({ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }) {
    return (_jsx(DropdownMenuContent, { "data-slot": "menubar-content", align: align, alignOffset: alignOffset, sideOffset: sideOffset, className: cn('bg-popover text-popover-foreground z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md', className), ...props }));
}
function MenubarItem({ className, inset, variant = 'default', ...props }) {
    return (_jsx(DropdownMenuItem, { "data-slot": "menubar-item", "data-inset": inset, "data-variant": variant, className: cn("data-[variant=destructive]:*:[svg]:!text-destructive focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props }));
}
function MenubarCheckboxItem({ className, children, checked, ...props }) {
    return (_jsx(DropdownMenuCheckboxItem, { "data-slot": "menubar-checkbox-item", className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), checked: checked, ...props, children: children }));
}
function MenubarRadioItem({ className, children, ...props }) {
    return (_jsx(DropdownMenuRadioItem, { "data-slot": "menubar-radio-item", className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props, children: children }));
}
function MenubarLabel({ className, inset, ...props }) {
    return (_jsx(DropdownMenuLabel, { "data-slot": "menubar-label", "data-inset": inset, className: cn('px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8', className), ...props }));
}
function MenubarSeparator({ className, ...props }) {
    return (_jsx(DropdownMenuSeparator, { "data-slot": "menubar-separator", className: cn('bg-border -mx-1 my-1 h-px', className), ...props }));
}
function MenubarShortcut({ className, ...props }) {
    return (_jsx("span", { "data-slot": "menubar-shortcut", className: cn('text-muted-foreground ml-auto text-xs tracking-widest', className), ...props }));
}
function MenubarSub({ ...props }) {
    return _jsx(DropdownMenuSub, { "data-slot": "menubar-sub", ...props });
}
function MenubarSubTrigger({ className, inset, children, ...props }) {
    return (_jsxs(DropdownMenuSubTrigger, { "data-slot": "menubar-sub-trigger", "data-inset": inset, className: cn('focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground flex cursor-default items-center rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8', className), ...props, children: [children, _jsx(CaretRightIcon, { className: "ml-auto h-4 w-4", weight: "regular" })] }));
}
function MenubarSubContent({ className, ...props }) {
    return (_jsx(DropdownMenuSubContent, { "data-slot": "menubar-sub-content", className: cn('bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg', className), ...props }));
}
export { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, };
//# sourceMappingURL=menubar.js.map