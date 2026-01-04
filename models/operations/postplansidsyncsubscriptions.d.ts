import * as z from "zod/v3";
export type PostPlansIdSyncSubscriptionsRequest = {
    /**
     * Plan ID
     */
    id: string;
};
/** @internal */
export type PostPlansIdSyncSubscriptionsRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const PostPlansIdSyncSubscriptionsRequest$outboundSchema: z.ZodType<PostPlansIdSyncSubscriptionsRequest$Outbound, z.ZodTypeDef, PostPlansIdSyncSubscriptionsRequest>;
export declare function postPlansIdSyncSubscriptionsRequestToJSON(postPlansIdSyncSubscriptionsRequest: PostPlansIdSyncSubscriptionsRequest): string;
//# sourceMappingURL=postplansidsyncsubscriptions.d.ts.map