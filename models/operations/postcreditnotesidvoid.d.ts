import * as z from "zod/v3";
export type PostCreditnotesIdVoidRequest = {
    /**
     * Credit note ID
     */
    id: string;
};
/** @internal */
export type PostCreditnotesIdVoidRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const PostCreditnotesIdVoidRequest$outboundSchema: z.ZodType<PostCreditnotesIdVoidRequest$Outbound, z.ZodTypeDef, PostCreditnotesIdVoidRequest>;
export declare function postCreditnotesIdVoidRequestToJSON(postCreditnotesIdVoidRequest: PostCreditnotesIdVoidRequest): string;
//# sourceMappingURL=postcreditnotesidvoid.d.ts.map