import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCreditGrantPeriod: {
    readonly Daily: "DAILY";
    readonly Weekly: "WEEKLY";
    readonly Monthly: "MONTHLY";
    readonly Annual: "ANNUAL";
    readonly Quarterly: "QUARTERLY";
    readonly HalfYearly: "HALF_YEARLY";
};
export type TypesCreditGrantPeriod = ClosedEnum<typeof TypesCreditGrantPeriod>;
/** @internal */
export declare const TypesCreditGrantPeriod$inboundSchema: z.ZodNativeEnum<typeof TypesCreditGrantPeriod>;
/** @internal */
export declare const TypesCreditGrantPeriod$outboundSchema: z.ZodNativeEnum<typeof TypesCreditGrantPeriod>;
//# sourceMappingURL=types-credit-grant-period.d.ts.map