import { jsx as _jsx } from "react/jsx-runtime";
/** Aspect ratio: a box that keeps a fixed width-to-height ratio. */
import * as React from 'react';
function AspectRatio({ ratio = 1, style, ...props }) {
    return (_jsx("div", { "data-slot": "aspect-ratio", style: { position: 'relative', width: '100%', paddingBottom: `${(1 / ratio) * 100}%`, ...style }, children: _jsx("div", { style: { position: 'absolute', inset: 0 }, ...props }) }));
}
export { AspectRatio };
//# sourceMappingURL=aspect-ratio.js.map