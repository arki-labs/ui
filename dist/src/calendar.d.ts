import * as React from 'react';
import { DayPicker } from 'react-day-picker';
type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    fullWidth?: boolean;
    size?: 'sm' | 'md' | 'lg';
};
/**
 * A month grid. A `timeZone` often comes from a stored profile, so an unknown one falls back to the
 * browser's zone (logged at DEBUG) instead of throwing in render. A `month`, `defaultMonth`, `today`,
 * `startMonth` or `endMonth` that is an Invalid Date (or within a month of the ends of the Date range) is ignored, and a range
 * with such an end counts as no range.
 */
declare function Calendar({ className, classNames, showOutsideDays, fullWidth, size, timeZone, month, defaultMonth, today, startMonth, endMonth, ...rest }: CalendarProps): React.JSX.Element;
export { Calendar };
//# sourceMappingURL=calendar.d.ts.map