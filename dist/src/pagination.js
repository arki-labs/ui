import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** Pagination: page links with previous and next. */
import * as React from 'react';
import { CaretLeftIcon, CaretRightIcon, DotsThreeIcon } from '@arki/icons/phosphor';
import { buttonVariants } from './button.js';
import { cn } from './cn.js';
function Pagination({ className, ...props }) {
    return (_jsx("nav", { role: "navigation", "aria-label": "pagination", "data-slot": "pagination", className: cn('mx-auto flex w-full justify-center', className), ...props }));
}
function PaginationContent({ className, ...props }) {
    return _jsx("ul", { "data-slot": "pagination-content", className: cn('flex flex-row items-center gap-1', className), ...props });
}
function PaginationItem({ ...props }) {
    return _jsx("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({ className, isActive, size = 'icon', ...props }) {
    return (_jsx("a", { "aria-current": isActive ? 'page' : undefined, "data-slot": "pagination-link", "data-active": isActive, className: cn(buttonVariants({
            variant: isActive ? 'outline' : 'ghost',
            size,
        }), className), ...props }));
}
function PaginationPrevious({ className, ...props }) {
    return (_jsxs(PaginationLink, { "aria-label": "Go to previous page", size: "default", className: cn('gap-1 px-2.5 sm:pl-2.5', className), ...props, children: [_jsx(CaretLeftIcon, { weight: "regular" }), _jsx("span", { className: "hidden sm:block", children: "Previous" })] }));
}
function PaginationNext({ className, ...props }) {
    return (_jsxs(PaginationLink, { "aria-label": "Go to next page", size: "default", className: cn('gap-1 px-2.5 sm:pr-2.5', className), ...props, children: [_jsx("span", { className: "hidden sm:block", children: "Next" }), _jsx(CaretRightIcon, { weight: "regular" })] }));
}
function PaginationEllipsis({ className, ...props }) {
    return (_jsxs("span", { "aria-hidden": true, "data-slot": "pagination-ellipsis", className: cn('flex size-9 items-center justify-center', className), ...props, children: [_jsx(DotsThreeIcon, { className: "size-4", weight: "regular" }), _jsx("span", { className: "sr-only", children: "More pages" })] }));
}
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, };
//# sourceMappingURL=pagination.js.map