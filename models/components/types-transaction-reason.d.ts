import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesTransactionReason: {
    readonly InvoicePayment: "INVOICE_PAYMENT";
    readonly FreeCreditGrant: "FREE_CREDIT_GRANT";
    readonly SubscriptionCreditGrant: "SUBSCRIPTION_CREDIT_GRANT";
    readonly PurchasedCreditInvoiced: "PURCHASED_CREDIT_INVOICED";
    readonly PurchasedCreditDirect: "PURCHASED_CREDIT_DIRECT";
    readonly CreditNote: "CREDIT_NOTE";
    readonly CreditExpired: "CREDIT_EXPIRED";
    readonly WalletTermination: "WALLET_TERMINATION";
    readonly ManualBalanceDebit: "MANUAL_BALANCE_DEBIT";
    readonly CreditAdjustment: "CREDIT_ADJUSTMENT";
};
export type TypesTransactionReason = ClosedEnum<typeof TypesTransactionReason>;
/** @internal */
export declare const TypesTransactionReason$inboundSchema: z.ZodNativeEnum<typeof TypesTransactionReason>;
/** @internal */
export declare const TypesTransactionReason$outboundSchema: z.ZodNativeEnum<typeof TypesTransactionReason>;
//# sourceMappingURL=types-transaction-reason.d.ts.map