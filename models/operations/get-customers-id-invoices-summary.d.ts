import * as z from "zod/v3";
export type GetCustomersIdInvoicesSummaryRequest = {
    /**
     * Customer ID
     */
    id: string;
};
/** @internal */
export type GetCustomersIdInvoicesSummaryRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetCustomersIdInvoicesSummaryRequest$outboundSchema: z.ZodType<GetCustomersIdInvoicesSummaryRequest$Outbound, z.ZodTypeDef, GetCustomersIdInvoicesSummaryRequest>;
export declare function getCustomersIdInvoicesSummaryRequestToJSON(getCustomersIdInvoicesSummaryRequest: GetCustomersIdInvoicesSummaryRequest): string;
//# sourceMappingURL=get-customers-id-invoices-summary.d.ts.map