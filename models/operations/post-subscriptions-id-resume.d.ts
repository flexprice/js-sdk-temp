import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PostSubscriptionsIdResumeRequest = {
    /**
     * Subscription ID
     */
    id: string;
    /**
     * Resume subscription request
     */
    body: components.DtoResumeSubscriptionRequest;
};
/** @internal */
export type PostSubscriptionsIdResumeRequest$Outbound = {
    id: string;
    body: components.DtoResumeSubscriptionRequest$Outbound;
};
/** @internal */
export declare const PostSubscriptionsIdResumeRequest$outboundSchema: z.ZodType<PostSubscriptionsIdResumeRequest$Outbound, z.ZodTypeDef, PostSubscriptionsIdResumeRequest>;
export declare function postSubscriptionsIdResumeRequestToJSON(postSubscriptionsIdResumeRequest: PostSubscriptionsIdResumeRequest): string;
//# sourceMappingURL=post-subscriptions-id-resume.d.ts.map