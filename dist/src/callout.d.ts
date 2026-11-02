/** Callout: a highlighted note with an icon. */
import type { VariantProps } from 'class-variance-authority';
declare const calloutVariants: (props?: ({
    variant?: "error" | "info" | "success" | "warning" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type CalloutProps = {} & React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof calloutVariants>;
export declare function Callout({ variant, children, className, ...props }: CalloutProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=callout.d.ts.map