import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from 'class-variance-authority';
import { Check, Info, Siren, Warning } from '@arki/icons/phosphor';
import { cn } from './cn.js';
const iconClassName = 'my-1.5 mr-2 h-4 w-4 shrink-0';
function CalloutIcon({ variant }) {
    switch (variant) {
        case 'warning': {
            return _jsx(Warning, { className: iconClassName });
        }
        case 'success': {
            return _jsx(Check, { className: iconClassName });
        }
        case 'error': {
            return _jsx(Siren, { className: iconClassName });
        }
        default: {
            return _jsx(Info, { className: iconClassName });
        }
    }
}
const calloutVariants = cva('flex rounded-md border px-3 py-2', {
    variants: {
        variant: {
            info: 'border-info/40 bg-info-surface [&>svg]:text-info text-foreground',
            warning: 'border-warning/40 bg-warning-surface [&>svg]:text-warning text-foreground',
            success: 'border-success/40 bg-success-surface [&>svg]:text-success text-foreground',
            error: 'bg-destructive-surface border-destructive/40 text-foreground [&>svg]:text-destructive',
        },
    },
    defaultVariants: {
        variant: 'info',
    },
});
export function Callout({ variant, children, className, ...props }) {
    return (_jsxs("div", { className: cn(calloutVariants({ variant, className })), ...props, children: [_jsx(CalloutIcon, { variant: variant }), _jsx("div", { children: children })] }));
}
//# sourceMappingURL=callout.js.map