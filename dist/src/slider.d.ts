import * as React from 'react';
import { Slider as SliderPrimitive } from '@base-ui/react/slider';
type SliderProps = Omit<SliderPrimitive.Root.Props, 'onValueChange' | 'onValueCommitted'> & {
    onValueChange?: (value: number[]) => void;
    /** Fires after the user finishes a drag/keyboard interaction. */
    onValueCommitted?: (value: number[]) => void;
    /** Radix-era alias for `onValueCommitted` — accepted for backwards compat. */
    onValueCommit?: (value: number[]) => void;
};
declare function Slider({ className, defaultValue, value, min, max, onValueChange, onValueCommitted, onValueCommit, 'aria-label': ariaLabel, ...props }: SliderProps): React.JSX.Element;
export { Slider };
//# sourceMappingURL=slider.d.ts.map