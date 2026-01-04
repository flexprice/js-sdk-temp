import * as z from "zod/v3";
import { DtoCreateInvoiceLineItemRequest, DtoCreateInvoiceLineItemRequest$Outbound } from "./dtocreateinvoicelineitemrequest.js";
import { DtoInvoiceCoupon, DtoInvoiceCoupon$Outbound } from "./dtoinvoicecoupon.js";
import { DtoInvoiceLineItemCoupon, DtoInvoiceLineItemCoupon$Outbound } from "./dtoinvoicelineitemcoupon.js";
import { DtoTaxRateOverride, DtoTaxRateOverride$Outbound } from "./dtotaxrateoverride.js";
import { DtoTaxRateResponse, DtoTaxRateResponse$Outbound } from "./dtotaxrateresponse.js";
import { TypesInvoiceBillingReason } from "./typesinvoicebillingreason.js";
import { TypesInvoiceStatus } from "./typesinvoicestatus.js";
import { TypesInvoiceType } from "./typesinvoicetype.js";
import { TypesPaymentStatus } from "./typespaymentstatus.js";
export type DtoCreateInvoiceRequest = {
    /**
     * amount_due is the total amount that needs to be paid for this invoice
     */
    amountDue: string;
    /**
     * amount_paid is the amount that has been paid towards this invoice
     */
    amountPaid?: string | undefined;
    /**
     * billing_period is the period this invoice covers (e.g., "monthly", "yearly")
     */
    billingPeriod?: string | undefined;
    billingReason?: TypesInvoiceBillingReason | undefined;
    /**
     * coupons
     */
    coupons?: Array<string> | undefined;
    /**
     * currency is the three-letter ISO currency code (e.g., USD, EUR) for the invoice
     */
    currency: string;
    /**
     * customer_id is the unique identifier of the customer this invoice belongs to
     */
    customerId: string;
    /**
     * description is an optional text description of the invoice
     */
    description?: string | undefined;
    /**
     * due_date is the date by which payment is expected
     */
    dueDate?: string | undefined;
    /**
     * environment_id is the unique identifier of the environment this invoice belongs to
     */
    environmentId?: string | undefined;
    /**
     * idempotency_key is an optional key used to prevent duplicate invoice creation
     */
    idempotencyKey?: string | undefined;
    /**
     * Invoice Coupns
     */
    invoiceCoupons?: Array<DtoInvoiceCoupon> | undefined;
    /**
     * invoice_number is an optional human-readable identifier for the invoice
     */
    invoiceNumber?: string | undefined;
    /**
     * invoice_pdf_url is the URL where customers can download the PDF version of this invoice
     */
    invoicePdfUrl?: string | undefined;
    invoiceStatus?: TypesInvoiceStatus | undefined;
    invoiceType?: TypesInvoiceType | undefined;
    /**
     * Invoice Line Item Coupons
     */
    lineItemCoupons?: Array<DtoInvoiceLineItemCoupon> | undefined;
    /**
     * line_items contains the individual items that make up this invoice
     */
    lineItems?: Array<DtoCreateInvoiceLineItemRequest> | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    paymentStatus?: TypesPaymentStatus | undefined;
    /**
     * period_end is the end date of the billing period
     */
    periodEnd?: string | undefined;
    /**
     * period_start is the start date of the billing period
     */
    periodStart?: string | undefined;
    /**
     * prepared_tax_rates contains the tax rates pre-resolved by the caller (e.g., billing service)
     *
     * @remarks
     * These are applied at invoice level by the invoice service without further resolution
     */
    preparedTaxRates?: Array<DtoTaxRateResponse> | undefined;
    /**
     * subscription_id is the optional unique identifier of the subscription associated with this invoice
     */
    subscriptionId?: string | undefined;
    /**
     * subtotal is the amount before taxes and discounts are applied
     */
    subtotal: string;
    /**
     * tax_rate_overrides is the tax rate overrides to be applied to the invoice
     */
    taxRateOverrides?: Array<DtoTaxRateOverride> | undefined;
    /**
     * tax_rates
     */
    taxRates?: Array<string> | undefined;
    /**
     * total is the total amount of the invoice including taxes and discounts
     */
    total: string;
};
/** @internal */
export type DtoCreateInvoiceRequest$Outbound = {
    amount_due: string;
    amount_paid?: string | undefined;
    billing_period?: string | undefined;
    billing_reason?: string | undefined;
    coupons?: Array<string> | undefined;
    currency: string;
    customer_id: string;
    description?: string | undefined;
    due_date?: string | undefined;
    environment_id?: string | undefined;
    idempotency_key?: string | undefined;
    invoice_coupons?: Array<DtoInvoiceCoupon$Outbound> | undefined;
    invoice_number?: string | undefined;
    invoice_pdf_url?: string | undefined;
    invoice_status?: string | undefined;
    invoice_type?: string | undefined;
    line_item_coupons?: Array<DtoInvoiceLineItemCoupon$Outbound> | undefined;
    line_items?: Array<DtoCreateInvoiceLineItemRequest$Outbound> | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    payment_status?: string | undefined;
    period_end?: string | undefined;
    period_start?: string | undefined;
    prepared_tax_rates?: Array<DtoTaxRateResponse$Outbound> | undefined;
    subscription_id?: string | undefined;
    subtotal: string;
    tax_rate_overrides?: Array<DtoTaxRateOverride$Outbound> | undefined;
    tax_rates?: Array<string> | undefined;
    total: string;
};
/** @internal */
export declare const DtoCreateInvoiceRequest$outboundSchema: z.ZodType<DtoCreateInvoiceRequest$Outbound, z.ZodTypeDef, DtoCreateInvoiceRequest>;
export declare function dtoCreateInvoiceRequestToJSON(dtoCreateInvoiceRequest: DtoCreateInvoiceRequest): string;
//# sourceMappingURL=dtocreateinvoicerequest.d.ts.map