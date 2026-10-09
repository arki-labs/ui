import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';
export declare const glassTones: readonly ['default', 'slate', 'gray', 'zinc', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
export type GlassTone = (typeof glassTones)[number];
declare const glassCardVariants: (props?: ({
    tone?: "amber" | "blue" | "cyan" | "default" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "slate" | "stone" | "teal" | "violet" | "yellow" | "zinc" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type GlassCardProps = React.ComponentProps<'div'> & VariantProps<typeof glassCardVariants> & {
    asChild?: boolean;
    interactive?: boolean;
};
declare function GlassCard({ className, tone, interactive, asChild, ...props }: GlassCardProps): React.JSX.Element;
declare const glassCardIconVariants: (props?: ({
    tone?: "amber" | "blue" | "cyan" | "default" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "slate" | "stone" | "teal" | "violet" | "yellow" | "zinc" | null | undefined;
    surface?: "plain" | "tile" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type GlassCardIconProps = React.ComponentProps<'div'> & VariantProps<typeof glassCardIconVariants> & {
    asChild?: boolean;
};
declare function GlassCardIcon({ className, tone, size, surface, asChild, ...props }: GlassCardIconProps): React.JSX.Element;
export { GlassCard, GlassCardIcon, glassCardVariants, glassCardIconVariants };
//# sourceMappingURL=glass-card.d.ts.map