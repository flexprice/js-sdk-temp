import * as z from "zod/v3";
export type PostInvoicesIdFinalizeRequest = {
    /**
     * Invoice ID
     */
    id: string;
};
/** @internal */
export type PostInvoicesIdFinalizeRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const PostInvoicesIdFinalizeRequest$outboundSchema: z.ZodType<PostInvoicesIdFinalizeRequest$Outbound, z.ZodTypeDef, PostInvoicesIdFinalizeRequest>;
export declare function postInvoicesIdFinalizeRequestToJSON(postInvoicesIdFinalizeRequest: PostInvoicesIdFinalizeRequest): string;
//# sourceMappingURL=postinvoicesidfinalize.d.ts.map