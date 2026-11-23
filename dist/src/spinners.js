import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from './cn.js';
export { PulseLoader } from 'react-spinners';
export function Spinner({ className, ...rest }) {
    const spinnerClass = cn('h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent', className);
    return _jsx("div", { className: spinnerClass, ...rest });
}
Spinner.displayName = 'Spinner';
//# sourceMappingURL=spinners.js.map