import * as z from "zod/v3";
export type PostInvoicesIdVoidRequest = {
    /**
     * Invoice ID
     */
    id: string;
};
/** @internal */
export type PostInvoicesIdVoidRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const PostInvoicesIdVoidRequest$outboundSchema: z.ZodType<PostInvoicesIdVoidRequest$Outbound, z.ZodTypeDef, PostInvoicesIdVoidRequest>;
export declare function postInvoicesIdVoidRequestToJSON(postInvoicesIdVoidRequest: PostInvoicesIdVoidRequest): string;
//# sourceMappingURL=postinvoicesidvoid.d.ts.map