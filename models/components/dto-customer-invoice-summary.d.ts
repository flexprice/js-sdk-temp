import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoCustomerInvoiceSummary = {
    /**
     * currency is the three-letter ISO currency code for this summary
     */
    currency?: string | undefined;
    /**
     * customer_id is the unique identifier of the customer
     */
    customerId?: string | undefined;
    /**
     * overdue_invoice_count is the number of overdue invoices for this customer in this currency
     */
    overdueInvoiceCount?: number | undefined;
    /**
     * total_invoice_count is the total number of invoices for this customer in this currency
     */
    totalInvoiceCount?: number | undefined;
    /**
     * total_overdue_amount is the total amount of overdue invoices in this currency
     */
    totalOverdueAmount?: string | undefined;
    /**
     * total_revenue_amount is the total revenue generated from this customer in this currency
     */
    totalRevenueAmount?: string | undefined;
    /**
     * total_unpaid_amount is the total amount of unpaid invoices in this currency
     */
    totalUnpaidAmount?: string | undefined;
    /**
     * unpaid_fixed_charges is the total amount of unpaid fixed charges in this currency
     */
    unpaidFixedCharges?: string | undefined;
    /**
     * unpaid_invoice_count is the number of unpaid invoices for this customer in this currency
     */
    unpaidInvoiceCount?: number | undefined;
    /**
     * unpaid_usage_charges is the total amount of unpaid usage-based charges in this currency
     */
    unpaidUsageCharges?: string | undefined;
};
/** @internal */
export declare const DtoCustomerInvoiceSummary$inboundSchema: z.ZodType<DtoCustomerInvoiceSummary, z.ZodTypeDef, unknown>;
export declare function dtoCustomerInvoiceSummaryFromJSON(jsonString: string): SafeParseResult<DtoCustomerInvoiceSummary, SDKValidationError>;
//# sourceMappingURL=dto-customer-invoice-summary.d.ts.map