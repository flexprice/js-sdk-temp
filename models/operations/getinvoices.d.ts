import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const InvoiceStatus: {
    readonly Draft: "DRAFT";
    readonly Finalized: "FINALIZED";
    readonly Voided: "VOIDED";
};
export type InvoiceStatus = ClosedEnum<typeof InvoiceStatus>;
/**
 * invoice_type filters by the nature of the invoice (SUBSCRIPTION, ONE_OFF, or CREDIT)
 *
 * @remarks
 * Use this to separate recurring charges from one-time fees or credit adjustments
 */
export declare const InvoiceType: {
    readonly Subscription: "SUBSCRIPTION";
    readonly OneOff: "ONE_OFF";
    readonly Credit: "CREDIT";
};
/**
 * invoice_type filters by the nature of the invoice (SUBSCRIPTION, ONE_OFF, or CREDIT)
 *
 * @remarks
 * Use this to separate recurring charges from one-time fees or credit adjustments
 */
export type InvoiceType = ClosedEnum<typeof InvoiceType>;
export declare const GetInvoicesOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetInvoicesOrder = ClosedEnum<typeof GetInvoicesOrder>;
export declare const PaymentStatus: {
    readonly Initiated: "INITIATED";
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
    readonly Succeeded: "SUCCEEDED";
    readonly Overpaid: "OVERPAID";
    readonly Failed: "FAILED";
    readonly Refunded: "REFUNDED";
    readonly PartiallyRefunded: "PARTIALLY_REFUNDED";
};
export type PaymentStatus = ClosedEnum<typeof PaymentStatus>;
export declare const GetInvoicesStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetInvoicesStatus = ClosedEnum<typeof GetInvoicesStatus>;
export type GetInvoicesRequest = {
    /**
     * amount_due_gt filters invoices with a total amount due greater than the specified value
     *
     * @remarks
     * Useful for finding invoices above a certain threshold or identifying high-value invoices
     */
    amountDueGt?: number | undefined;
    /**
     * amount_remaining_gt filters invoices with an outstanding balance greater than the specified value
     *
     * @remarks
     * Useful for finding invoices that still have significant unpaid amounts
     */
    amountRemainingGt?: number | undefined;
    /**
     * customer_id filters invoices for a specific customer using FlexPrice's internal customer ID
     *
     * @remarks
     * This is the ID returned by FlexPrice when creating or retrieving customers
     */
    customerId?: string | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    /**
     * external_customer_id filters invoices for a customer using your system's customer identifier
     *
     * @remarks
     * This is the ID you provided when creating the customer in FlexPrice
     */
    externalCustomerId?: string | undefined;
    /**
     * invoice_ids restricts results to invoices with the specified IDs
     *
     * @remarks
     * Use this to retrieve specific invoices when you know their exact identifiers
     */
    invoiceIds?: Array<string> | undefined;
    /**
     * invoice_status filters by the current state of invoices in their lifecycle
     *
     * @remarks
     * Multiple statuses can be specified to include invoices in any of the listed states
     */
    invoiceStatus?: Array<InvoiceStatus> | undefined;
    /**
     * invoice_type filters by the nature of the invoice (SUBSCRIPTION, ONE_OFF, or CREDIT)
     *
     * @remarks
     * Use this to separate recurring charges from one-time fees or credit adjustments
     */
    invoiceType?: InvoiceType | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetInvoicesOrder | undefined;
    /**
     * payment_status filters by the payment state of invoices
     *
     * @remarks
     * Multiple statuses can be specified to include invoices with any of the listed payment states
     */
    paymentStatus?: Array<PaymentStatus> | undefined;
    /**
     * SkipLineItems if true, will not include line items in the response
     */
    skipLineItems?: boolean | undefined;
    startTime?: string | undefined;
    status?: GetInvoicesStatus | undefined;
    /**
     * subscription_id filters invoices generated for a specific subscription
     *
     * @remarks
     * Only returns invoices that were created as part of the specified subscription's billing
     */
    subscriptionId?: string | undefined;
};
/** @internal */
export declare const InvoiceStatus$outboundSchema: z.ZodNativeEnum<typeof InvoiceStatus>;
/** @internal */
export declare const InvoiceType$outboundSchema: z.ZodNativeEnum<typeof InvoiceType>;
/** @internal */
export declare const GetInvoicesOrder$outboundSchema: z.ZodNativeEnum<typeof GetInvoicesOrder>;
/** @internal */
export declare const PaymentStatus$outboundSchema: z.ZodNativeEnum<typeof PaymentStatus>;
/** @internal */
export declare const GetInvoicesStatus$outboundSchema: z.ZodNativeEnum<typeof GetInvoicesStatus>;
/** @internal */
export type GetInvoicesRequest$Outbound = {
    amount_due_gt?: number | undefined;
    amount_remaining_gt?: number | undefined;
    customer_id?: string | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    external_customer_id?: string | undefined;
    invoice_ids?: Array<string> | undefined;
    invoice_status?: Array<string> | undefined;
    invoice_type?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    payment_status?: Array<string> | undefined;
    skip_line_items?: boolean | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
    subscription_id?: string | undefined;
};
/** @internal */
export declare const GetInvoicesRequest$outboundSchema: z.ZodType<GetInvoicesRequest$Outbound, z.ZodTypeDef, GetInvoicesRequest>;
export declare function getInvoicesRequestToJSON(getInvoicesRequest: GetInvoicesRequest): string;
//# sourceMappingURL=getinvoices.d.ts.map