import * as z from "zod/v3";
export type PostInvoicesIdCommsTriggerRequest = {
    /**
     * Invoice ID
     */
    id: string;
};
/** @internal */
export type PostInvoicesIdCommsTriggerRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const PostInvoicesIdCommsTriggerRequest$outboundSchema: z.ZodType<PostInvoicesIdCommsTriggerRequest$Outbound, z.ZodTypeDef, PostInvoicesIdCommsTriggerRequest>;
export declare function postInvoicesIdCommsTriggerRequestToJSON(postInvoicesIdCommsTriggerRequest: PostInvoicesIdCommsTriggerRequest): string;
//# sourceMappingURL=post-invoices-id-comms-trigger.d.ts.map