import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesBillingPeriod: {
    readonly Monthly: "MONTHLY";
    readonly Annual: "ANNUAL";
    readonly Weekly: "WEEKLY";
    readonly Daily: "DAILY";
    readonly Quarterly: "QUARTERLY";
    readonly HalfYearly: "HALF_YEARLY";
};
export type TypesBillingPeriod = ClosedEnum<typeof TypesBillingPeriod>;
/** @internal */
export declare const TypesBillingPeriod$inboundSchema: z.ZodNativeEnum<typeof TypesBillingPeriod>;
/** @internal */
export declare const TypesBillingPeriod$outboundSchema: z.ZodNativeEnum<typeof TypesBillingPeriod>;
//# sourceMappingURL=types-billing-period.d.ts.map