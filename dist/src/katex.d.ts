/** KaTeX math, as `BlockMath` and `InlineMath`. */
import { type ReactNode, type ComponentType } from 'react';
type ErrorRenderer = (error: Error) => ReactNode;
export type MathComponentProps = {
    /** LaTeX expression as a string. Either `math` or `children` must be provided. */
    math?: string;
    /** LaTeX expression as React children. Either `math` or `children` must be provided. */
    children?: ReactNode;
    /** Color used by KaTeX when rendering a parse error inline (instead of throwing). */
    errorColor?: string;
    /** Custom render function for parse errors. When provided, KaTeX will throw and this handles the result. */
    renderError?: ErrorRenderer;
};
export declare const BlockMath: ComponentType<MathComponentProps>;
export declare const InlineMath: ComponentType<MathComponentProps>;
export {};
//# sourceMappingURL=katex.d.ts.map