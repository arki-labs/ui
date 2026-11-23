/** Color picker: choose a colour from a panel or a hex field. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { colord, extend } from 'colord';
import namesPlugin from 'colord/plugins/names';
import { RgbaStringColorPicker } from 'react-colorful';
import { Button } from './button.js';
import { cn } from './cn.js';
import { Input } from './input.js';
import { Popover, PopoverContent, PopoverTrigger } from './popover.js';
extend([namesPlugin]);
function ColorPicker({ disabled, value, onChange, onBlur, name, className, ref, presetColors, ...props }) {
    const [open, setOpen] = useState(false);
    const parsedValue = useMemo(() => {
        return value.startsWith('rgba') ? value : colord(value).toRgbString();
    }, [value]);
    return (_jsxs(Popover, { onOpenChange: setOpen, open: open, children: [_jsx(PopoverTrigger, { disabled: disabled, onBlur: onBlur, render: _jsx(Button, { ...props, className: cn('block', className), name: name, onClick: () => {
                        setOpen(true);
                    }, size: "icon", style: {
                        backgroundColor: parsedValue,
                    }, variant: "outline" }), children: _jsx("div", {}) }), _jsxs(PopoverContent, { className: "w-full", children: [_jsx(RgbaStringColorPicker, { color: parsedValue, onChange: onChange }), _jsx(Input, { maxLength: 7, onChange: e => {
                            onChange(e?.currentTarget?.value);
                        }, ref: ref, value: parsedValue, className: "mt-2", autoComplete: "off", autoCorrect: "off", spellCheck: "false" }), presetColors && (_jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: presetColors.map(color => (_jsx(Button, { variant: "outline", onClick: () => onChange(color), style: { backgroundColor: color }, className: "h-8 w-8 p-0" }, color))) }))] })] }));
}
export { ColorPicker };
//# sourceMappingURL=color-picker.js.map