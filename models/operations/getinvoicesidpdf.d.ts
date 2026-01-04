import * as z from "zod/v3";
export type GetInvoicesIdPdfRequest = {
    /**
     * Invoice ID
     */
    id: string;
    /**
     * Return presigned URL from s3 instead of PDF
     */
    url?: boolean | undefined;
};
/** @internal */
export type GetInvoicesIdPdfRequest$Outbound = {
    id: string;
    url?: boolean | undefined;
};
/** @internal */
export declare const GetInvoicesIdPdfRequest$outboundSchema: z.ZodType<GetInvoicesIdPdfRequest$Outbound, z.ZodTypeDef, GetInvoicesIdPdfRequest>;
export declare function getInvoicesIdPdfRequestToJSON(getInvoicesIdPdfRequest: GetInvoicesIdPdfRequest): string;
//# sourceMappingURL=getinvoicesidpdf.d.ts.map