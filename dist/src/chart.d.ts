import * as React from 'react';
import * as RechartsPrimitive from 'recharts';
declare const THEMES: {
    readonly light: '';
    readonly dark: '.dark';
};
export type ChartConfig = Record<string, {
    label?: React.ReactNode;
    icon?: React.ComponentType;
} & ({
    color?: string;
    theme?: never;
} | {
    color?: never;
    theme: {
        [K in keyof typeof THEMES]: string;
    };
})>;
declare function ChartContainer({ id, className, children, config, ref, ...props }: React.ComponentProps<'div'> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children'];
    ref?: React.Ref<HTMLDivElement>;
}): React.JSX.Element;
declare namespace ChartContainer {
    var displayName: string;
}
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => React.JSX.Element | null;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare function ChartTooltipContent({ active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, ref, }: React.ComponentProps<'div'> & {
    active?: boolean;
    payload?: {
        name?: string;
        dataKey?: string;
        value?: number | string;
        color?: string;
        payload?: Record<string, unknown>;
    }[];
    label?: string | number;
    labelFormatter?: (value: unknown, payload: unknown[]) => React.ReactNode;
    formatter?: (value: unknown, name: unknown, item: unknown, index: number, payload: unknown) => React.ReactNode;
    color?: string;
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
    labelClassName?: string;
    ref?: React.Ref<HTMLDivElement>;
}): React.JSX.Element | null;
declare namespace ChartTooltipContent {
    var displayName: string;
}
declare const ChartLegend: React.MemoExoticComponent<(outsideProps: RechartsPrimitive.LegendProps) => React.ReactPortal | null>;
declare function ChartLegendContent({ className, hideIcon, payload, verticalAlign, nameKey, ref, }: React.ComponentProps<'div'> & {
    payload?: {
        value?: string;
        dataKey?: string;
        color?: string;
    }[];
    verticalAlign?: 'top' | 'bottom';
    hideIcon?: boolean;
    nameKey?: string;
    ref?: React.Ref<HTMLDivElement>;
}): React.JSX.Element | null;
declare namespace ChartLegendContent {
    var displayName: string;
}
export { ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent };
//# sourceMappingURL=chart.d.ts.map