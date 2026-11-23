import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from './cn.js';
import { Slot } from './slot.js';
import { Surface } from './surface.js';
export function Panel({ asChild, className, children, spacing, noShadow, ...rest }) {
    const panelClass = cn('p-2', spacing === 'small' && 'p-[0.2rem]', className);
    const Comp = asChild ? Slot : 'div';
    return (_jsx(Comp, { ...rest, children: _jsx(Surface, { className: panelClass, withShadow: !noShadow, children: children }) }));
}
Panel.displayName = 'Panel';
export function PanelDivider({ asChild, className, children, ...rest }) {
    const dividerClass = cn('mb-2 border-b border-b-black/10 pb-2', className);
    const Comp = asChild ? Slot : 'div';
    return (_jsx(Comp, { className: dividerClass, ...rest, children: children }));
}
PanelDivider.displayName = 'PanelDivider';
export function PanelHeader({ asChild, className, children, ...rest }) {
    const headerClass = cn('mb-2 border-b border-b-black/10 pb-2 text-sm', className);
    const Comp = asChild ? Slot : 'div';
    return (_jsx(Comp, { className: headerClass, ...rest, children: children }));
}
PanelHeader.displayName = 'PanelHeader';
export function PanelSection({ asChild, className, children, ...rest }) {
    const sectionClass = cn('mt-4 first:mt-1', className);
    const Comp = asChild ? Slot : 'div';
    return (_jsx(Comp, { className: sectionClass, ...rest, children: children }));
}
PanelSection.displayName = 'PanelSection';
export function PanelHeadline({ asChild, className, children, ...rest }) {
    const headlineClass = cn('mb-2 ml-1.5 text-xs font-medium text-black/80 dark:text-white/80', className);
    const Comp = asChild ? Slot : 'div';
    return (_jsx(Comp, { className: headlineClass, ...rest, children: children }));
}
PanelHeadline.displayName = 'PanelHeadline';
export function PanelFooter({ asChild, className, children, ...rest }) {
    const footerClass = cn('mt-2 border-t border-black/10 pt-2 text-sm', className);
    const Comp = asChild ? Slot : 'div';
    return (_jsx(Comp, { className: footerClass, ...rest, children: children }));
}
PanelFooter.displayName = 'PanelFooter';
//# sourceMappingURL=panel.js.map