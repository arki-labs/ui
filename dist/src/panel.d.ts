import type { ComponentProps } from 'react';
export type PanelProps = {
    spacing?: 'medium' | 'small';
    noShadow?: boolean;
    asChild?: boolean;
} & ComponentProps<'div'>;
export declare function Panel({ asChild, className, children, spacing, noShadow, ...rest }: PanelProps): import("react").JSX.Element;
export declare namespace Panel {
    var displayName: string;
}
export type PanelDividerProps = {
    asChild?: boolean;
} & ComponentProps<'div'>;
export declare function PanelDivider({ asChild, className, children, ...rest }: PanelDividerProps): import("react").JSX.Element;
export declare namespace PanelDivider {
    var displayName: string;
}
export type PanelHeaderProps = {
    asChild?: boolean;
} & ComponentProps<'div'>;
export declare function PanelHeader({ asChild, className, children, ...rest }: PanelHeaderProps): import("react").JSX.Element;
export declare namespace PanelHeader {
    var displayName: string;
}
export type PanelSectionProps = {
    asChild?: boolean;
} & ComponentProps<'div'>;
export declare function PanelSection({ asChild, className, children, ...rest }: PanelSectionProps): import("react").JSX.Element;
export declare namespace PanelSection {
    var displayName: string;
}
export type PanelHeadlineProps = {
    asChild?: boolean;
} & ComponentProps<'div'>;
export declare function PanelHeadline({ asChild, className, children, ...rest }: PanelHeadlineProps): import("react").JSX.Element;
export declare namespace PanelHeadline {
    var displayName: string;
}
export type PanelFooterProps = {
    asChild?: boolean;
} & ComponentProps<'div'>;
export declare function PanelFooter({ asChild, className, children, ...rest }: PanelFooterProps): import("react").JSX.Element;
export declare namespace PanelFooter {
    var displayName: string;
}
//# sourceMappingURL=panel.d.ts.map