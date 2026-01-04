import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./typesfiltercondition.js";
import { TypesInvoiceStatus } from "./typesinvoicestatus.js";
import { TypesInvoiceType } from "./typesinvoicetype.js";
import { TypesPaymentStatus } from "./typespaymentstatus.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./typessortcondition.js";
import { TypesStatus } from "./typesstatus.js";
export declare const TypesInvoiceFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesInvoiceFilterOrder = ClosedEnum<typeof TypesInvoiceFilterOrder>;
export type TypesInvoiceFilter = {
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
    filters?: Array<TypesFilterCondition> | undefined;
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
    invoiceStatus?: Array<TypesInvoiceStatus> | undefined;
    invoiceType?: TypesInvoiceType | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: TypesInvoiceFilterOrder | undefined;
    /**
     * payment_status filters by the payment state of invoices
     *
     * @remarks
     * Multiple statuses can be specified to include invoices with any of the listed payment states
     */
    paymentStatus?: Array<TypesPaymentStatus> | undefined;
    /**
     * SkipLineItems if true, will not include line items in the response
     */
    skipLineItems?: boolean | undefined;
    sort?: Array<TypesSortCondition> | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
    /**
     * subscription_id filters invoices generated for a specific subscription
     *
     * @remarks
     * Only returns invoices that were created as part of the specified subscription's billing
     */
    subscriptionId?: string | undefined;
};
/** @internal */
export declare const TypesInvoiceFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesInvoiceFilterOrder>;
/** @internal */
export type TypesInvoiceFilter$Outbound = {
    amount_due_gt?: number | undefined;
    amount_remaining_gt?: number | undefined;
    customer_id?: string | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    external_customer_id?: string | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    invoice_ids?: Array<string> | undefined;
    invoice_status?: Array<string> | undefined;
    invoice_type?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    payment_status?: Array<string> | undefined;
    skip_line_items?: boolean | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
    subscription_id?: string | undefined;
};
/** @internal */
export declare const TypesInvoiceFilter$outboundSchema: z.ZodType<TypesInvoiceFilter$Outbound, z.ZodTypeDef, TypesInvoiceFilter>;
export declare function typesInvoiceFilterToJSON(typesInvoiceFilter: TypesInvoiceFilter): string;
//# sourceMappingURL=typesinvoicefilter.d.ts.map