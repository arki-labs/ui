/** Surface: a background layer with elevation levels. */
import type { ComponentProps } from 'react';
export type SurfaceProps = ComponentProps<'div'> & {
    withShadow?: boolean;
    withBorder?: boolean;
};
export declare function Surface({ children, className, withShadow, withBorder, ...props }: SurfaceProps): import("react").JSX.Element;
export declare namespace Surface {
    var displayName: string;
}
//# sourceMappingURL=surface.d.ts.map