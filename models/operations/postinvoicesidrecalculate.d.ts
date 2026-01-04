import * as z from "zod/v3";
export type PostInvoicesIdRecalculateRequest = {
    /**
     * Invoice ID
     */
    id: string;
    /**
     * Whether to finalize the invoice after recalculation (default: true)
     */
    finalize?: boolean | undefined;
};
/** @internal */
export type PostInvoicesIdRecalculateRequest$Outbound = {
    id: string;
    finalize?: boolean | undefined;
};
/** @internal */
export declare const PostInvoicesIdRecalculateRequest$outboundSchema: z.ZodType<PostInvoicesIdRecalculateRequest$Outbound, z.ZodTypeDef, PostInvoicesIdRecalculateRequest>;
export declare function postInvoicesIdRecalculateRequestToJSON(postInvoicesIdRecalculateRequest: PostInvoicesIdRecalculateRequest): string;
//# sourceMappingURL=postinvoicesidrecalculate.d.ts.map