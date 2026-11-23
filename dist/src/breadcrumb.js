import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** Breadcrumb: a path of links to the current page. */
import * as React from 'react';
import { CaretRight, DotsThree } from '@arki/icons/phosphor';
import { cn } from './cn.js';
function Breadcrumb({ ...props }) {
    return _jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
    return (_jsx("ol", { "data-slot": "breadcrumb-list", className: cn('text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5', className), ...props }));
}
function BreadcrumbItem({ className, ...props }) {
    return _jsx("li", { "data-slot": "breadcrumb-item", className: cn('inline-flex items-center gap-1.5', className), ...props });
}
function BreadcrumbLink({ asChild, className, children, ...props }) {
    const linkClassName = cn('hover:text-foreground transition-colors', className);
    // When asChild is true, merge link styles into the single child element
    // (e.g. Next.js <Link>) using React.cloneElement instead of Radix's Slot.
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            'data-slot': 'breadcrumb-link',
            className: cn(linkClassName, children.props.className),
        });
    }
    return (_jsx("a", { "data-slot": "breadcrumb-link", className: linkClassName, ...props, children: children }));
}
function BreadcrumbPage({ className, ...props }) {
    return (_jsx("span", { "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: cn('text-foreground font-normal', className), ...props }));
}
function BreadcrumbSeparator({ children, className, ...props }) {
    return (_jsx("li", { "data-slot": "breadcrumb-separator", role: "presentation", "aria-hidden": "true", className: cn('[&>svg]:size-3.5', className), ...props, children: children ?? _jsx(CaretRight, { weight: "regular" }) }));
}
function BreadcrumbEllipsis({ className, ...props }) {
    return (_jsxs("span", { "data-slot": "breadcrumb-ellipsis", role: "presentation", "aria-hidden": "true", className: cn('flex size-9 items-center justify-center', className), ...props, children: [_jsx(DotsThree, { className: "size-4", weight: "regular" }), _jsx("span", { className: "sr-only", children: "More" })] }));
}
export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, };
//# sourceMappingURL=breadcrumb.js.map