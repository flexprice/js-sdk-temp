import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const DtoEntitlementSourceEntityType: {
    readonly Plan: "plan";
    readonly Addon: "addon";
    readonly Subscription: "subscription";
};
export type DtoEntitlementSourceEntityType = ClosedEnum<typeof DtoEntitlementSourceEntityType>;
/** @internal */
export declare const DtoEntitlementSourceEntityType$inboundSchema: z.ZodNativeEnum<typeof DtoEntitlementSourceEntityType>;
//# sourceMappingURL=dto-entitlement-source-entity-type.d.ts.map