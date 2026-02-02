import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesInvoiceBillingReason: {
    readonly SubscriptionCreate: "SUBSCRIPTION_CREATE";
    readonly SubscriptionCycle: "SUBSCRIPTION_CYCLE";
    readonly SubscriptionUpdate: "SUBSCRIPTION_UPDATE";
    readonly Proration: "PRORATION";
    readonly Manual: "MANUAL";
};
export type TypesInvoiceBillingReason = ClosedEnum<typeof TypesInvoiceBillingReason>;
/** @internal */
export declare const TypesInvoiceBillingReason$outboundSchema: z.ZodNativeEnum<typeof TypesInvoiceBillingReason>;
//# sourceMappingURL=types-invoice-billing-reason.d.ts.map