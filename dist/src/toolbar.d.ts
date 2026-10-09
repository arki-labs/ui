import type { ButtonHTMLAttributes, ComponentProps } from 'react';
import type { ButtonProps } from './button';
export type ToolbarWrapperProps = {
    shouldShowContent?: boolean;
    isVertical?: boolean;
} & ComponentProps<'div'>;
declare function ToolbarWrapper({ shouldShowContent, children, isVertical, className, ...rest }: ToolbarWrapperProps): false | import("react").JSX.Element;
export type ToolbarDividerProps = {
    horizontal?: boolean;
} & ComponentProps<'div'>;
declare function ToolbarDivider({ horizontal, className, ...rest }: ToolbarDividerProps): import("react").JSX.Element;
export type ToolbarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
    tooltip?: string;
    tooltipShortcut?: string[];
    buttonSize?: ButtonProps['size'];
    variant?: ButtonProps['variant'];
};
declare function ToolbarButton({ children, buttonSize, variant, className, tooltip, tooltipShortcut, ...rest }: ToolbarButtonProps): import("react").JSX.Element;
export declare const Toolbar: {
    Wrapper: typeof ToolbarWrapper;
    Divider: typeof ToolbarDivider;
    Button: typeof ToolbarButton;
};
export {};
//# sourceMappingURL=toolbar.d.ts.map