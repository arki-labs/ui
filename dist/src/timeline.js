import { jsx as _jsx } from "react/jsx-runtime";
/** Timeline: a vertical list of events with dots and connectors. */
import * as React from 'react';
import { cn } from './cn.js';
const TimelineContext = React.createContext(null);
function useTimeline() {
    const context = React.useContext(TimelineContext);
    if (!context) {
        throw new Error('useTimeline must be used within a <Timeline />.');
    }
    return context;
}
export const Timeline = React.forwardRef(({ className, orientation = 'vertical', ...props }, ref) => (_jsx(TimelineContext.Provider, { value: { orientation }, children: _jsx("ol", { ref: ref, role: "list", "data-orientation": orientation, className: cn('flex', orientation === 'vertical' && 'flex-col', className), ...props }) })));
Timeline.displayName = 'Timeline';
export const TimelineItem = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation } = useTimeline();
    return (_jsx("li", { ref: ref, "data-orientation": orientation, className: cn('flex gap-4', orientation === 'horizontal' && 'flex-col', className), ...props }));
});
TimelineItem.displayName = 'TimelineItem';
export const TimelineSeparator = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation } = useTimeline();
    return (_jsx("div", { ref: ref, "data-orientation": orientation, className: cn('flex items-center', orientation === 'vertical' && 'flex-col', className), ...props }));
});
TimelineSeparator.displayName = 'TimelineSeparator';
export const TimelineDot = React.forwardRef(({ variant = 'default', className, ...props }, ref) => {
    const { orientation } = useTimeline();
    return (_jsx("div", { ref: ref, "data-orientation": orientation, className: cn('flex size-4 items-center justify-center empty:after:block empty:after:rounded-full empty:after:outline-current [&_svg]:size-4', orientation === 'vertical' && 'mt-1', variant === 'default' && 'empty:after:size-2.5 empty:after:bg-current', variant === 'outline' && 'empty:after:size-2 empty:after:outline', className), ...props }));
});
TimelineDot.displayName = 'TimelineDot';
export const TimelineConnector = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation } = useTimeline();
    return (_jsx("div", { ref: ref, "data-orientation": orientation, className: cn('bg-border flex-1', orientation === 'vertical' && 'my-2 w-0.5', orientation === 'horizontal' && 'mx-2 h-0.5', className), ...props }));
});
TimelineConnector.displayName = 'TimelineConnector';
export const TimelineContent = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation } = useTimeline();
    return (_jsx("div", { ref: ref, "data-orientation": orientation, className: cn('flex-1', orientation === 'vertical' && 'pb-7 first:text-right last:text-left', orientation === 'horizontal' && 'pr-7', className), ...props }));
});
TimelineContent.displayName = 'TimelineContent';
export const TimelineTitle = React.forwardRef((props, ref) => {
    const { orientation } = useTimeline();
    return _jsx("div", { ref: ref, "data-orientation": orientation, ...props });
});
TimelineTitle.displayName = 'TimelineTitle';
export const TimelineDescription = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation } = useTimeline();
    return (_jsx("div", { ref: ref, "data-orientation": orientation, className: cn('text-muted-foreground text-[0.8em]', className), ...props }));
});
TimelineDescription.displayName = 'TimelineDescription';
//# sourceMappingURL=timeline.js.map