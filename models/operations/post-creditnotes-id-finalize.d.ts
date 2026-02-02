import * as z from "zod/v3";
export type PostCreditnotesIdFinalizeRequest = {
    /**
     * Credit note ID
     */
    id: string;
};
/** @internal */
export type PostCreditnotesIdFinalizeRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const PostCreditnotesIdFinalizeRequest$outboundSchema: z.ZodType<PostCreditnotesIdFinalizeRequest$Outbound, z.ZodTypeDef, PostCreditnotesIdFinalizeRequest>;
export declare function postCreditnotesIdFinalizeRequestToJSON(postCreditnotesIdFinalizeRequest: PostCreditnotesIdFinalizeRequest): string;
//# sourceMappingURL=post-creditnotes-id-finalize.d.ts.map