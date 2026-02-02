import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesEntitlementEntityType: {
    readonly Plan: "PLAN";
    readonly Subscription: "SUBSCRIPTION";
    readonly Addon: "ADDON";
};
export type TypesEntitlementEntityType = ClosedEnum<typeof TypesEntitlementEntityType>;
/** @internal */
export declare const TypesEntitlementEntityType$inboundSchema: z.ZodNativeEnum<typeof TypesEntitlementEntityType>;
/** @internal */
export declare const TypesEntitlementEntityType$outboundSchema: z.ZodNativeEnum<typeof TypesEntitlementEntityType>;
//# sourceMappingURL=types-entitlement-entity-type.d.ts.map