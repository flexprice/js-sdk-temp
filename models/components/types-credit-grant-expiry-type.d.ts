import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCreditGrantExpiryType: {
    readonly Never: "NEVER";
    readonly Duration: "DURATION";
    readonly BillingCycle: "BILLING_CYCLE";
};
export type TypesCreditGrantExpiryType = ClosedEnum<typeof TypesCreditGrantExpiryType>;
/** @internal */
export declare const TypesCreditGrantExpiryType$inboundSchema: z.ZodNativeEnum<typeof TypesCreditGrantExpiryType>;
/** @internal */
export declare const TypesCreditGrantExpiryType$outboundSchema: z.ZodNativeEnum<typeof TypesCreditGrantExpiryType>;
//# sourceMappingURL=types-credit-grant-expiry-type.d.ts.map