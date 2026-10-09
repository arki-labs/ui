export type MathConstantCategory = 'circle' | 'exponential' | 'special' | 'radical' | 'logarithm';
export type MathConstant = {
    readonly value: number;
    readonly symbol: string;
    readonly latex: string;
    readonly name: string;
    readonly category: MathConstantCategory;
};
export declare const MATH_CONSTANTS: readonly MathConstant[];
export declare const CATEGORY_ORDER: readonly MathConstantCategory[];
export declare const CATEGORY_LABELS: Record<MathConstantCategory, string>;
//# sourceMappingURL=constants.d.ts.map