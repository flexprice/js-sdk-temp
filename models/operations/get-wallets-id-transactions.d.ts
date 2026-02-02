import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetWalletsIdTransactionsOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetWalletsIdTransactionsOrder = ClosedEnum<typeof GetWalletsIdTransactionsOrder>;
export declare const GetWalletsIdTransactionsStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetWalletsIdTransactionsStatus = ClosedEnum<typeof GetWalletsIdTransactionsStatus>;
export declare const TransactionReason: {
    readonly InvoicePayment: "INVOICE_PAYMENT";
    readonly FreeCreditGrant: "FREE_CREDIT_GRANT";
    readonly SubscriptionCreditGrant: "SUBSCRIPTION_CREDIT_GRANT";
    readonly PurchasedCreditInvoiced: "PURCHASED_CREDIT_INVOICED";
    readonly PurchasedCreditDirect: "PURCHASED_CREDIT_DIRECT";
    readonly CreditNote: "CREDIT_NOTE";
    readonly CreditExpired: "CREDIT_EXPIRED";
    readonly WalletTermination: "WALLET_TERMINATION";
    readonly ManualBalanceDebit: "MANUAL_BALANCE_DEBIT";
};
export type TransactionReason = ClosedEnum<typeof TransactionReason>;
export declare const TransactionStatus: {
    readonly Pending: "pending";
    readonly Completed: "completed";
    readonly Failed: "failed";
};
export type TransactionStatus = ClosedEnum<typeof TransactionStatus>;
export declare const Type: {
    readonly Credit: "credit";
    readonly Debit: "debit";
};
export type Type = ClosedEnum<typeof Type>;
export type GetWalletsIdTransactionsRequest = {
    /**
     * Wallet ID
     */
    idPathParameter: string;
    createdBy?: string | undefined;
    creditsAvailableGt?: number | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    expiryDateAfter?: string | undefined;
    expiryDateBefore?: string | undefined;
    idQueryParameter?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetWalletsIdTransactionsOrder | undefined;
    priority?: number | undefined;
    referenceId?: string | undefined;
    referenceType?: string | undefined;
    startTime?: string | undefined;
    status?: GetWalletsIdTransactionsStatus | undefined;
    transactionReason?: TransactionReason | undefined;
    transactionStatus?: TransactionStatus | undefined;
    type?: Type | undefined;
};
/** @internal */
export declare const GetWalletsIdTransactionsOrder$outboundSchema: z.ZodNativeEnum<typeof GetWalletsIdTransactionsOrder>;
/** @internal */
export declare const GetWalletsIdTransactionsStatus$outboundSchema: z.ZodNativeEnum<typeof GetWalletsIdTransactionsStatus>;
/** @internal */
export declare const TransactionReason$outboundSchema: z.ZodNativeEnum<typeof TransactionReason>;
/** @internal */
export declare const TransactionStatus$outboundSchema: z.ZodNativeEnum<typeof TransactionStatus>;
/** @internal */
export declare const Type$outboundSchema: z.ZodNativeEnum<typeof Type>;
/** @internal */
export type GetWalletsIdTransactionsRequest$Outbound = {
    idPathParameter: string;
    created_by?: string | undefined;
    credits_available_gt?: number | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    expiry_date_after?: string | undefined;
    expiry_date_before?: string | undefined;
    idQueryParameter?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    priority?: number | undefined;
    reference_id?: string | undefined;
    reference_type?: string | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
    transaction_reason?: string | undefined;
    transaction_status?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const GetWalletsIdTransactionsRequest$outboundSchema: z.ZodType<GetWalletsIdTransactionsRequest$Outbound, z.ZodTypeDef, GetWalletsIdTransactionsRequest>;
export declare function getWalletsIdTransactionsRequestToJSON(getWalletsIdTransactionsRequest: GetWalletsIdTransactionsRequest): string;
//# sourceMappingURL=get-wallets-id-transactions.d.ts.map