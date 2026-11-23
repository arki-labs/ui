/** Date picker: an input that opens a calendar. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { format } from '@arki/date/format';
import { fromPickerDate } from '@arki/date/interop';
import { isFailure } from '@arki/failure';
import { CalendarIcon } from '@arki/icons/phosphor';
import { Button } from './button.js';
import { Calendar } from './calendar.js';
import { cn } from './cn.js';
import { Popover, PopoverContent, PopoverTrigger } from './popover.js';
export function DatePicker({ date, setDate, ...props }) {
    // The calendar day the picker shows; an Invalid Date is a failure and shows the placeholder.
    const day = date ? fromPickerDate(date) : undefined;
    return (_jsxs(Popover, { children: [_jsxs(PopoverTrigger, { render: _jsx(Button, { variant: 'outline', className: cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground') }), children: [_jsx(CalendarIcon, { className: "mr-2 h-4 w-4", weight: "regular" }), day && !isFailure(day) ? format(day, 'PPP') : _jsx("span", { children: "Pick a date" })] }), _jsx(PopoverContent, { className: "w-auto p-0", ...props, children: _jsx(Calendar, { mode: "single", selected: date, onSelect: setDate, autoFocus: true }) })] }));
}
//# sourceMappingURL=date-picker.js.map