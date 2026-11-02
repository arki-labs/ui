/**
 * Inline script that applies the stored theme before first paint, so the page does not flash.
 *
 * Theme detection script for FOUC prevention.
 *
 * This script should be executed before React hydration to prevent
 * Flash of Unstyled Content (FOUC) when using dark mode.
 *
 * Usage in TanStack Start (__root.tsx):
 * ```tsx
 * import { ScriptOnce } from '@tanstack/react-router';
 * import { themeScript, THEME_STORAGE_KEY } from '@arki/ui/theme/script';
 *
 * // In your RootDocument component's <head>:
 * <ScriptOnce>{themeScript(THEME_STORAGE_KEY)}</ScriptOnce>
 * ```
 *
 * For Next.js, add a blocking inline script in the root layout's
 * html element (before body) using themeScript() to prevent FOUC.
 */
export declare const THEME_STORAGE_KEY = "theme";
export type ThemeDetectionOptions = {
    storageKey?: string;
    attribute?: 'class' | 'data-theme' | `data-${string}`;
    defaultTheme?: string;
    themes?: readonly string[];
    enableSystem?: boolean;
    /**
     * The classes each theme puts on the root element, e.g. `{ 'candle-dark': ['dark', 'candlelight'] }`.
     * A theme not listed here adds a class with its own name, as before. A theme whose classes include
     * `dark` also gets `color-scheme: dark`. Every class named here is removed on each switch, so none goes stale.
     */
    themeClasses?: Readonly<Record<string, readonly string[]>>;
    /** Apply this already-resolved theme and skip storage and system detection (the provider uses this). */
    forcedTheme?: string;
    /** Set the `color-scheme` style on the root element (default: true). */
    enableColorScheme?: boolean;
};
/**
 * Generates an inline script string that detects and applies the theme
 * before React hydration, preventing FOUC.
 *
 * @param storageKey - The localStorage key used to store the theme preference
 * @param attribute - The attribute to apply to the HTML element ('class' or 'data-theme')
 * @returns A string containing the inline JavaScript to execute
 */
export declare function themeScript(storageKeyOrOptions?: string | ThemeDetectionOptions, attribute?: 'class' | 'data-theme'): string;
/**
 * A function that can be serialized and executed inline.
 * Use with TanStack Start's FunctionOnce pattern.
 *
 * @example
 * ```tsx
 * <FunctionOnce param={THEME_STORAGE_KEY}>
 *   {themeDetectionFn}
 * </FunctionOnce>
 * ```
 */
export declare function themeDetectionFn(input: string | ThemeDetectionOptions): void;
//# sourceMappingURL=script.d.ts.map