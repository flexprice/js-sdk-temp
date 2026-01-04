import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Invoices extends ClientSDK {
    /**
     * Get a customer invoice summary
     *
     * @remarks
     * Get a customer invoice summary
     */
    getCustomersIdInvoicesSummary(id: string, options?: RequestOptions): Promise<components.DtoCustomerMultiCurrencyInvoiceSummary>;
    /**
     * List invoices
     *
     * @remarks
     * List invoices with optional filtering
     */
    getInvoices(request: operations.GetInvoicesRequest, options?: RequestOptions): Promise<components.DtoListInvoicesResponse>;
    /**
     * Create a new one off invoice
     *
     * @remarks
     * Create a new one off invoice with the provided details
     */
    postInvoices(request: components.DtoCreateInvoiceRequest, options?: RequestOptions): Promise<components.DtoInvoiceResponse>;
    /**
     * Get a preview invoice
     *
     * @remarks
     * Get a preview invoice
     */
    postInvoicesPreview(request: components.DtoGetPreviewInvoiceRequest, options?: RequestOptions): Promise<components.DtoInvoiceResponse>;
    /**
     * List invoices by filter
     *
     * @remarks
     * List invoices by filter
     */
    postInvoicesSearch(request: components.TypesInvoiceFilter, options?: RequestOptions): Promise<components.DtoListInvoicesResponse>;
    /**
     * Get an invoice by ID
     *
     * @remarks
     * Get detailed information about an invoice
     */
    getInvoicesId(id: string, expandBySource?: boolean | undefined, groupBy?: Array<string> | undefined, options?: RequestOptions): Promise<components.DtoInvoiceResponse>;
    /**
     * Update an invoice
     *
     * @remarks
     * Update invoice details like PDF URL and due date.
     */
    putInvoicesId(id: string, body: components.DtoUpdateInvoiceRequest, options?: RequestOptions): Promise<components.DtoInvoiceResponse>;
    /**
     * Trigger communication webhook for an invoice
     *
     * @remarks
     * Triggers a communication webhook event containing all information about the invoice
     */
    postInvoicesIdCommsTrigger(id: string, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
    /**
     * Finalize an invoice
     *
     * @remarks
     * Finalize a draft invoice
     */
    postInvoicesIdFinalize(id: string, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
    /**
     * Update invoice payment status
     *
     * @remarks
     * Update the payment status of an invoice
     */
    putInvoicesIdPayment(id: string, body: components.DtoUpdatePaymentStatusRequest, options?: RequestOptions): Promise<components.DtoInvoiceResponse>;
    /**
     * Attempt payment for an invoice
     *
     * @remarks
     * Attempt to pay an invoice using customer's available wallets
     */
    postInvoicesIdPaymentAttempt(id: string, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
    /**
     * Get PDF for an invoice
     *
     * @remarks
     * Retrieve the PDF document for a specific invoice by its ID
     */
    getInvoicesIdPdf(id: string, url?: boolean | undefined, options?: RequestOptions): Promise<ReadableStream<Uint8Array>>;
    /**
     * Recalculate invoice totals and line items
     *
     * @remarks
     * Recalculate totals and line items for a draft invoice, useful when subscription line items or usage data has changed
     */
    postInvoicesIdRecalculate(id: string, finalize?: boolean | undefined, options?: RequestOptions): Promise<components.DtoInvoiceResponse>;
    /**
     * Void an invoice
     *
     * @remarks
     * Void an invoice that hasn't been paid
     */
    postInvoicesIdVoid(id: string, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
}
//# sourceMappingURL=invoices.d.ts.map