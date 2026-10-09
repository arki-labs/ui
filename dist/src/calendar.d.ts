import * as React from 'react';
import { DayPicker } from 'react-day-picker';
type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    fullWidth?: boolean;
    size?: 'sm' | 'md' | 'lg';
};
declare function Calendar({ className, classNames, showOutsideDays, fullWidth, size, ...props }: CalendarProps): React.JSX.Element;
export { Calendar };
//# sourceMappingURL=calendar.d.ts.map