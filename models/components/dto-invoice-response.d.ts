import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCouponApplicationResponse } from "./dto-coupon-application-response.js";
import { DtoCustomerResponse } from "./dto-customer-response.js";
import { DtoInvoiceLineItemResponse } from "./dto-invoice-line-item-response.js";
import { DtoSubscriptionResponse } from "./dto-subscription-response.js";
import { DtoTaxAppliedResponse } from "./dto-tax-applied-response.js";
import { TypesInvoiceStatus } from "./types-invoice-status.js";
import { TypesInvoiceType } from "./types-invoice-type.js";
import { TypesPaymentStatus } from "./types-payment-status.js";
import { TypesStatus } from "./types-status.js";
export type DtoInvoiceResponse = {
    /**
     * adjustment_amount is the total sum of credit notes of type "adjustment".
     *
     * @remarks
     * These are non-cash reductions applied to the invoice (e.g. goodwill credit, billing correction).
     */
    adjustmentAmount?: number | undefined;
    /**
     * amount_due is the total amount that needs to be paid for this invoice
     */
    amountDue?: number | undefined;
    /**
     * amount_paid is the amount that has already been paid towards this invoice
     */
    amountPaid?: number | undefined;
    /**
     * amount_remaining is the outstanding amount still owed on this invoice (calculated as amount_due minus amount_paid)
     */
    amountRemaining?: number | undefined;
    /**
     * billing_period describes the billing period this invoice covers (e.g., "January 2024", "Q1 2024")
     */
    billingPeriod?: string | undefined;
    /**
     * billing_reason indicates why this invoice was generated (e.g., "subscription_billing", "manual_charge")
     */
    billingReason?: string | undefined;
    /**
     * billing_sequence is the sequential number indicating the billing cycle for subscription invoices
     */
    billingSequence?: number | undefined;
    /**
     * coupon_applications contains the coupon applications associated with this invoice (overrides embedded field)
     */
    couponApplications?: Array<DtoCouponApplicationResponse> | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    /**
     * currency is the three-letter ISO currency code (e.g., USD, EUR, GBP) that applies to all monetary amounts on this invoice
     */
    currency?: string | undefined;
    /**
     * Customer response object containing all customer information
     */
    customer?: DtoCustomerResponse | undefined;
    /**
     * customer_id is the ID of the customer who will receive this invoice
     */
    customerId?: string | undefined;
    /**
     * description is an optional description or notes about this invoice
     */
    description?: string | undefined;
    /**
     * due_date is the date when payment for this invoice is due
     */
    dueDate?: string | undefined;
    /**
     * environment_id is the ID of the environment this invoice belongs to (for multi-environment setups)
     */
    environmentId?: string | undefined;
    /**
     * finalized_at is the timestamp when this invoice was finalized and made ready for payment
     */
    finalizedAt?: string | undefined;
    /**
     * id is the unique identifier for this invoice
     */
    id?: string | undefined;
    /**
     * idempotency_key is a unique key used to prevent duplicate invoice creation when retrying API calls
     */
    idempotencyKey?: string | undefined;
    /**
     * invoice_number is the human-readable invoice number displayed to customers (e.g., INV-2024-001)
     */
    invoiceNumber?: string | undefined;
    /**
     * invoice_pdf_url is the URL where customers can download the PDF version of this invoice
     */
    invoicePdfUrl?: string | undefined;
    invoiceStatus?: TypesInvoiceStatus | undefined;
    invoiceType?: TypesInvoiceType | undefined;
    /**
     * line_items contains the individual items that make up this invoice (overrides embedded field)
     */
    lineItems?: Array<DtoInvoiceLineItemResponse> | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * overpaid_amount is the amount overpaid if payment_status is OVERPAID (amount_paid - total)
     */
    overpaidAmount?: string | undefined;
    /**
     * paid_at is the timestamp when this invoice was fully paid
     */
    paidAt?: string | undefined;
    paymentStatus?: TypesPaymentStatus | undefined;
    /**
     * period_end is the end date of the billing period covered by this invoice
     */
    periodEnd?: string | undefined;
    /**
     * period_start is the start date of the billing period covered by this invoice
     */
    periodStart?: string | undefined;
    /**
     * refunded_amount is the total sum of credit notes of type "refund".
     *
     * @remarks
     * These are actual refunds issued to the customer.
     */
    refundedAmount?: number | undefined;
    status?: TypesStatus | undefined;
    subscription?: DtoSubscriptionResponse | undefined;
    /**
     * subscription_id is the ID of the subscription this invoice is associated with (only present for subscription-based invoices)
     */
    subscriptionId?: string | undefined;
    /**
     * subtotal is the sum of all line items before any taxes, discounts, or additional fees
     */
    subtotal?: number | undefined;
    /**
     * tax_applied_records contains the tax applied records associated with this invoice
     */
    taxes?: Array<DtoTaxAppliedResponse> | undefined;
    tenantId?: string | undefined;
    /**
     * total is the final amount including taxes, fees, and discounts
     */
    total?: number | undefined;
    /**
     * total_discount is the sum of all coupon discounts applied to the invoice
     */
    totalDiscount?: number | undefined;
    /**
     * total_prepaid_credits_applied is the total amount of prepaid credits applied to this invoice.
     */
    totalPrepaidCreditsApplied?: number | undefined;
    /**
     * total_tax is the sum of all taxes combined at the invoice level.
     */
    totalTax?: number | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    /**
     * version is the version number for tracking changes to this invoice
     */
    version?: number | undefined;
    /**
     * voided_at is the timestamp when this invoice was voided or cancelled
     */
    voidedAt?: string | undefined;
};
/** @internal */
export declare const DtoInvoiceResponse$inboundSchema: z.ZodType<DtoInvoiceResponse, z.ZodTypeDef, unknown>;
export declare function dtoInvoiceResponseFromJSON(jsonString: string): SafeParseResult<DtoInvoiceResponse, SDKValidationError>;
//# sourceMappingURL=dto-invoice-response.d.ts.map