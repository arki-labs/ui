/** Scroll to top: a button that returns to the top of the page. */
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { ArrowCircleUp } from '@arki/icons/phosphor';
export const ScrollToTop = () => {
    const scrollToTop = () => window.scroll({ top: 0, behavior: 'smooth' });
    return (_jsx("button", { className: "w-6 shrink-0 text-center", title: "Scroll back to the top", onClick: scrollToTop, children: _jsx(ArrowCircleUp, { className: "hover:stroke-[3]", weight: "regular" }) }));
};
//# sourceMappingURL=scroll-to-top.js.map