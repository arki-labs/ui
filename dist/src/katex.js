import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
/** KaTeX math, as `BlockMath` and `InlineMath`. */
import { useMemo } from 'react';
import KaTeX from 'katex';
const createMathComponent = (Component, { displayMode }) => {
    const MathComponent = ({ children, errorColor, math, renderError }) => {
        const formula = (math ?? children ?? '');
        const { html, error } = useMemo(() => {
            try {
                const rendered = KaTeX.renderToString(formula, {
                    displayMode,
                    errorColor,
                    throwOnError: !!renderError,
                });
                return { html: rendered, error: undefined };
            }
            catch (error_) {
                if (error_ instanceof KaTeX.ParseError || error_ instanceof TypeError) {
                    return { error: error_ };
                }
                throw error_;
            }
        }, [formula, errorColor, renderError]);
        if (error) {
            return renderError ? _jsx(_Fragment, { children: renderError(error) }) : _jsx(Component, { html: error.message });
        }
        return _jsx(Component, { html: html ?? '' });
    };
    return MathComponent;
};
// KaTeX produces trusted server-rendered HTML for LaTeX; embedding via
// dangerouslySetInnerHTML is the supported pattern (no untrusted user input
// flows here without going through KaTeX's own escape rules).
const InternalBlockMath = ({ html }) => {
    return _jsx("div", { "data-testid": "react-katex", dangerouslySetInnerHTML: { __html: html } });
};
const InternalInlineMath = ({ html }) => {
    return _jsx("span", { "data-testid": "react-katex", dangerouslySetInnerHTML: { __html: html } });
};
export const BlockMath = createMathComponent(InternalBlockMath, { displayMode: true });
export const InlineMath = createMathComponent(InternalInlineMath, { displayMode: false });
//# sourceMappingURL=katex.js.map