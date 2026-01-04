import * as z from "zod/v3";
export type PostInvoicesIdPaymentAttemptRequest = {
    /**
     * Invoice ID
     */
    id: string;
};
/** @internal */
export type PostInvoicesIdPaymentAttemptRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const PostInvoicesIdPaymentAttemptRequest$outboundSchema: z.ZodType<PostInvoicesIdPaymentAttemptRequest$Outbound, z.ZodTypeDef, PostInvoicesIdPaymentAttemptRequest>;
export declare function postInvoicesIdPaymentAttemptRequestToJSON(postInvoicesIdPaymentAttemptRequest: PostInvoicesIdPaymentAttemptRequest): string;
//# sourceMappingURL=postinvoicesidpaymentattempt.d.ts.map