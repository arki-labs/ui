import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group';
import { toggleVariants } from './toggle';
type ToggleGroupCompatProps = Omit<ToggleGroupPrimitive.Props, 'value' | 'defaultValue' | 'onValueChange'> & VariantProps<typeof toggleVariants> & {
    /** Radix-era prop: 'single' (one selection) or 'multiple' (many). Maps to Base UI `multiple`. */
    type?: 'single' | 'multiple';
    /** Radix-shape value: a single string in `single` mode, an array in `multiple` mode. */
    value?: string | readonly string[];
    defaultValue?: string | readonly string[];
    /** Radix-shape callback: receives a string in `single` mode, an array in `multiple` mode. */
    onValueChange?: (value: string & string[]) => void;
};
declare function ToggleGroup({ className, variant, size, children, type, value, defaultValue, onValueChange, ...props }: ToggleGroupCompatProps): React.JSX.Element;
declare function ToggleGroupItem({ className, children, variant, size, ...props }: TogglePrimitive.Props & VariantProps<typeof toggleVariants>): React.JSX.Element;
export { ToggleGroup, ToggleGroupItem };
//# sourceMappingURL=toggle-group.d.ts.map