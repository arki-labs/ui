import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './button.js';
import { cn } from './cn.js';
import { Surface } from './surface.js';
function ToolbarWrapper({ shouldShowContent = true, children, isVertical = false, className, ...rest }) {
    const toolbarClassName = cn('inline-flex h-full gap-0.5 leading-none text-black', isVertical ? 'flex-col p-2' : 'flex-row items-center p-1', className);
    return (shouldShowContent && (_jsx(Surface, { className: toolbarClassName, ...rest, children: children })));
}
ToolbarWrapper.displayName = 'Toolbar';
function ToolbarDivider({ horizontal, className, ...rest }) {
    const dividerClassName = cn('bg-neutral-200 dark:bg-neutral-800', horizontal
        ? 'my-1 h-[1px] w-full min-w-[1.5rem] first:mt-0 last:mt-0'
        : 'mx-1 h-full min-h-[1.5rem] w-[1px] first:ml-0 last:mr-0', className);
    return _jsx("div", { className: dividerClassName, ...rest });
}
ToolbarDivider.displayName = 'Toolbar.Divider';
function ToolbarButton({ children, buttonSize = 'icon', variant = 'ghost', className, tooltip, tooltipShortcut, ...rest }) {
    const buttonClass = cn('w-auto min-w-[2rem] gap-1 px-2', className);
    const content = (_jsx(Button, { className: buttonClass, variant: variant, size: buttonSize, ...rest, children: children }));
    return content;
}
ToolbarButton.displayName = 'ToolbarButton';
export const Toolbar = {
    Wrapper: ToolbarWrapper,
    Divider: ToolbarDivider,
    Button: ToolbarButton,
};
//# sourceMappingURL=toolbar.js.map