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
export type DtoInvoiceResponse = {
    /**
     * amount_due is the total amount that needs to be paid for this invoice
     */
    amountDue?: string | undefined;
    /**
     * amount_paid is the amount that has been paid towards this invoice
     */
    amountPaid?: string | undefined;
    /**
     * amount_remaining is the amount still outstanding on this invoice
     */
    amountRemaining?: string | undefined;
    /**
     * billing_period is the period this invoice covers (e.g., "monthly", "yearly")
     */
    billingPeriod?: string | undefined;
    /**
     * billing_reason indicates why this invoice was created (subscription_cycle, manual, etc.)
     */
    billingReason?: string | undefined;
    /**
     * billing_sequence is the optional sequence number for billing cycles
     */
    billingSequence?: number | undefined;
    /**
     * coupon_applications contains the coupon applications associated with this invoice
     */
    couponApplications?: Array<DtoCouponApplicationResponse> | undefined;
    /**
     * created_at is the timestamp when this invoice was created
     */
    createdAt?: string | undefined;
    /**
     * created_by is the identifier of the user who created this invoice
     */
    createdBy?: string | undefined;
    /**
     * currency is the three-letter ISO currency code (e.g., USD, EUR) for the invoice
     */
    currency?: string | undefined;
    /**
     * Customer response object containing all customer information
     */
    customer?: DtoCustomerResponse | undefined;
    /**
     * customer_id is the unique identifier of the customer this invoice belongs to
     */
    customerId?: string | undefined;
    /**
     * description is the optional text description of the invoice
     */
    description?: string | undefined;
    /**
     * due_date is the date by which payment is expected
     */
    dueDate?: string | undefined;
    /**
     * finalized_at is the timestamp when this invoice was finalized
     */
    finalizedAt?: string | undefined;
    /**
     * id is the unique identifier for this invoice
     */
    id?: string | undefined;
    /**
     * idempotency_key is the optional key used to prevent duplicate invoice creation
     */
    idempotencyKey?: string | undefined;
    /**
     * invoice_number is the optional human-readable identifier for the invoice
     */
    invoiceNumber?: string | undefined;
    /**
     * invoice_pdf_url is the optional URL to the PDF version of this invoice
     */
    invoicePdfUrl?: string | undefined;
    invoiceStatus?: TypesInvoiceStatus | undefined;
    invoiceType?: TypesInvoiceType | undefined;
    /**
     * line_items contains the individual items that make up this invoice
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
     * paid_at is the timestamp when this invoice was paid
     */
    paidAt?: string | undefined;
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
     * status represents the current status of this invoice
     */
    status?: string | undefined;
    subscription?: DtoSubscriptionResponse | undefined;
    /**
     * subscription_id is the optional unique identifier of the subscription associated with this invoice
     */
    subscriptionId?: string | undefined;
    /**
     * subtotal is the amount before taxes and discounts are applied
     */
    subtotal?: string | undefined;
    /**
     * tax_applied_records contains the tax applied records associated with this invoice
     */
    taxes?: Array<DtoTaxAppliedResponse> | undefined;
    /**
     * tenant_id is the unique identifier of the tenant this invoice belongs to
     */
    tenantId?: string | undefined;
    /**
     * total is the total amount of the invoice including taxes and discounts
     */
    total?: string | undefined;
    /**
     * total_discount is the total discount amount from coupon applications
     */
    totalDiscount?: string | undefined;
    /**
     * total_tax is the total tax amount for this invoice
     */
    totalTax?: string | undefined;
    /**
     * updated_at is the timestamp when this invoice was last updated
     */
    updatedAt?: string | undefined;
    /**
     * updated_by is the identifier of the user who last updated this invoice
     */
    updatedBy?: string | undefined;
    /**
     * version is the version number of this invoice
     */
    version?: number | undefined;
    /**
     * voided_at is the timestamp when this invoice was voided
     */
    voidedAt?: string | undefined;
};
/** @internal */
export declare const DtoInvoiceResponse$inboundSchema: z.ZodType<DtoInvoiceResponse, z.ZodTypeDef, unknown>;
export declare function dtoInvoiceResponseFromJSON(jsonString: string): SafeParseResult<DtoInvoiceResponse, SDKValidationError>;
//# sourceMappingURL=dto-invoice-response.d.ts.map