import { jsx as _jsx } from "react/jsx-runtime";
import TextareaAutosize from 'react-textarea-autosize';
import { cn } from './cn.js';
function TextareaWithAutoSize({ className, ...props }) {
    return (_jsx(TextareaAutosize, { cacheMeasurements: true, className: cn('border-input placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50', className), ...props }));
}
TextareaWithAutoSize.displayName = 'Textarea';
export { TextareaWithAutoSize };
//# sourceMappingURL=textarea-with-autosize.js.map