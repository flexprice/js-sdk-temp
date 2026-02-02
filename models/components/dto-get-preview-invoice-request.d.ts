import * as z from "zod/v3";
export type DtoGetPreviewInvoiceRequest = {
    /**
     * period_end is the optional end date of the period to preview
     */
    periodEnd?: string | undefined;
    /**
     * period_start is the optional start date of the period to preview
     */
    periodStart?: string | undefined;
    /**
     * subscription_id is the unique identifier of the subscription to preview invoice for
     */
    subscriptionId: string;
};
/** @internal */
export type DtoGetPreviewInvoiceRequest$Outbound = {
    period_end?: string | undefined;
    period_start?: string | undefined;
    subscription_id: string;
};
/** @internal */
export declare const DtoGetPreviewInvoiceRequest$outboundSchema: z.ZodType<DtoGetPreviewInvoiceRequest$Outbound, z.ZodTypeDef, DtoGetPreviewInvoiceRequest>;
export declare function dtoGetPreviewInvoiceRequestToJSON(dtoGetPreviewInvoiceRequest: DtoGetPreviewInvoiceRequest): string;
//# sourceMappingURL=dto-get-preview-invoice-request.d.ts.map