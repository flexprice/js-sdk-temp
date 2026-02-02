import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesPaymentStatus: {
    readonly Initiated: "INITIATED";
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
    readonly Succeeded: "SUCCEEDED";
    readonly Overpaid: "OVERPAID";
    readonly Failed: "FAILED";
    readonly Refunded: "REFUNDED";
    readonly PartiallyRefunded: "PARTIALLY_REFUNDED";
};
export type TypesPaymentStatus = ClosedEnum<typeof TypesPaymentStatus>;
/** @internal */
export declare const TypesPaymentStatus$inboundSchema: z.ZodNativeEnum<typeof TypesPaymentStatus>;
/** @internal */
export declare const TypesPaymentStatus$outboundSchema: z.ZodNativeEnum<typeof TypesPaymentStatus>;
//# sourceMappingURL=types-payment-status.d.ts.map