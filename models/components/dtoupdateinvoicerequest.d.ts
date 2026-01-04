import * as z from "zod/v3";
export type DtoUpdateInvoiceRequest = {
    dueDate?: string | undefined;
    /**
     * invoice_pdf_url is the URL where customers can download the PDF version of this invoice
     */
    invoicePdfUrl?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
};
/** @internal */
export type DtoUpdateInvoiceRequest$Outbound = {
    due_date?: string | undefined;
    invoice_pdf_url?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
};
/** @internal */
export declare const DtoUpdateInvoiceRequest$outboundSchema: z.ZodType<DtoUpdateInvoiceRequest$Outbound, z.ZodTypeDef, DtoUpdateInvoiceRequest>;
export declare function dtoUpdateInvoiceRequestToJSON(dtoUpdateInvoiceRequest: DtoUpdateInvoiceRequest): string;
//# sourceMappingURL=dtoupdateinvoicerequest.d.ts.map