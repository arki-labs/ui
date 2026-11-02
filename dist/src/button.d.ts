/** Button: the base button with variants and sizes. */
import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "ghost" | "link" | "outline" | "primary" | "secondary" | "tertiary" | "text" | null | undefined;
    size?: "default" | "icon" | "icon2xl" | "iconLg" | "iconMd" | "iconSm" | "iconXl" | "lg" | "md" | "sm" | "xs" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
};
declare function Button({ className, variant, size, asChild, ...props }: ButtonProps): React.JSX.Element;
export { Button, buttonVariants, type ButtonProps };
//# sourceMappingURL=button.d.ts.map