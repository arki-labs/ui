/** Aspect ratio: a box that keeps a fixed width-to-height ratio. */
import * as React from 'react';
type AspectRatioProps = {
    ratio?: number;
} & React.ComponentProps<'div'>;
declare function AspectRatio({ ratio, style, ...props }: AspectRatioProps): React.JSX.Element;
export { AspectRatio };
//# sourceMappingURL=aspect-ratio.d.ts.map