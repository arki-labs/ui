import type { DesignSystemId } from '@arki/design-systems/registry';
export { DESIGN_SYSTEM_IDS, DESIGN_SYSTEMS, designSystemIdSchema, getDesignSystemById, getDesignSystemByIdSafe, isDesignSystemId, parseDesignSystemId, } from '@arki/design-systems/registry';
export type { DesignSystemId, DesignSystemMetadata } from '@arki/design-systems/registry';
/**
 * Default design system id used by `@arki/ui` when a consumer does not provide one.
 */
export declare const defaultUiDesignSystemId: DesignSystemId;
/**
 * Resolves arbitrary external input into a supported `@arki/ui` design system id.
 */
export declare function resolveUiDesignSystemId(value: unknown): DesignSystemId;
//# sourceMappingURL=design-system.d.ts.map