import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PostSubscriptionsIdChangePreviewRequest = {
    /**
     * Subscription ID
     */
    id: string;
    /**
     * Subscription change preview request
     */
    body: components.DtoSubscriptionChangeRequest;
};
/** @internal */
export type PostSubscriptionsIdChangePreviewRequest$Outbound = {
    id: string;
    body: components.DtoSubscriptionChangeRequest$Outbound;
};
/** @internal */
export declare const PostSubscriptionsIdChangePreviewRequest$outboundSchema: z.ZodType<PostSubscriptionsIdChangePreviewRequest$Outbound, z.ZodTypeDef, PostSubscriptionsIdChangePreviewRequest>;
export declare function postSubscriptionsIdChangePreviewRequestToJSON(postSubscriptionsIdChangePreviewRequest: PostSubscriptionsIdChangePreviewRequest): string;
//# sourceMappingURL=postsubscriptionsidchangepreview.d.ts.map