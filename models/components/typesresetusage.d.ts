import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesResetUsage: {
    readonly BillingPeriod: "BILLING_PERIOD";
    readonly Never: "NEVER";
};
export type TypesResetUsage = ClosedEnum<typeof TypesResetUsage>;
/** @internal */
export declare const TypesResetUsage$inboundSchema: z.ZodNativeEnum<typeof TypesResetUsage>;
/** @internal */
export declare const TypesResetUsage$outboundSchema: z.ZodNativeEnum<typeof TypesResetUsage>;
//# sourceMappingURL=typesresetusage.d.ts.map