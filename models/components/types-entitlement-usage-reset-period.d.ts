import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesEntitlementUsageResetPeriod: {
    readonly Monthly: "MONTHLY";
    readonly Annual: "ANNUAL";
    readonly Weekly: "WEEKLY";
    readonly Daily: "DAILY";
    readonly Quarterly: "QUARTERLY";
    readonly HalfYearly: "HALF_YEARLY";
    readonly Never: "NEVER";
};
export type TypesEntitlementUsageResetPeriod = ClosedEnum<typeof TypesEntitlementUsageResetPeriod>;
/** @internal */
export declare const TypesEntitlementUsageResetPeriod$inboundSchema: z.ZodNativeEnum<typeof TypesEntitlementUsageResetPeriod>;
/** @internal */
export declare const TypesEntitlementUsageResetPeriod$outboundSchema: z.ZodNativeEnum<typeof TypesEntitlementUsageResetPeriod>;
//# sourceMappingURL=types-entitlement-usage-reset-period.d.ts.map