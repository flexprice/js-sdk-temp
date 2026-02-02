import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCreditNoteReason: {
    readonly Duplicate: "DUPLICATE";
    readonly Fraudulent: "FRAUDULENT";
    readonly OrderChange: "ORDER_CHANGE";
    readonly Unsatisfactory: "UNSATISFACTORY";
    readonly ServiceIssue: "SERVICE_ISSUE";
    readonly BillingError: "BILLING_ERROR";
    readonly SubscriptionCancellation: "SUBSCRIPTION_CANCELLATION";
};
export type TypesCreditNoteReason = ClosedEnum<typeof TypesCreditNoteReason>;
/** @internal */
export declare const TypesCreditNoteReason$inboundSchema: z.ZodNativeEnum<typeof TypesCreditNoteReason>;
/** @internal */
export declare const TypesCreditNoteReason$outboundSchema: z.ZodNativeEnum<typeof TypesCreditNoteReason>;
//# sourceMappingURL=types-credit-note-reason.d.ts.map