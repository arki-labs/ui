import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "lg" | "sm" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Toggle({ className, variant, size, ...props }: TogglePrimitive.Props & VariantProps<typeof toggleVariants>): React.JSX.Element;
export { Toggle, toggleVariants };
//# sourceMappingURL=toggle.d.ts.map