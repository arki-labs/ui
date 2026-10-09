import * as React from 'react';
export type InputBaseContextProps = Pick<InputBaseProps, 'autoFocus' | 'disabled'> & {
    controlRef: React.RefObject<HTMLElement | null>;
    onFocusedChange: (focused: boolean) => void;
};
export type InputBaseProps = {
    autoFocus?: boolean;
    disabled?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;
export declare const InputBase: React.ForwardRefExoticComponent<{
    autoFocus?: boolean;
    disabled?: boolean;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const InputBaseFlexWrapper: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type InputBaseControlProps = React.HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
    children?: React.ReactNode;
};
export declare const InputBaseControl: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
    children?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
export type InputBaseAdornmentProps = {
    asChild?: boolean;
    disablePointerEvents?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;
export declare const InputBaseAdornment: React.ForwardRefExoticComponent<{
    asChild?: boolean;
    disablePointerEvents?: boolean;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const InputBaseAdornmentButton: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & import("class-variance-authority").VariantProps<(props?: ({
    variant?: "default" | "destructive" | "ghost" | "link" | "outline" | "primary" | "secondary" | "tertiary" | "text" | null | undefined;
    size?: "default" | "icon" | "icon2xl" | "iconLg" | "iconMd" | "iconSm" | "iconXl" | "lg" | "md" | "sm" | "xs" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & {
    asChild?: boolean;
}, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const InputBaseInput: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=input-base.d.ts.map