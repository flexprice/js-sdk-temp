import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PostSubscriptionsIdPauseRequest = {
    /**
     * Subscription ID
     */
    id: string;
    /**
     * Pause subscription request
     */
    body: components.DtoPauseSubscriptionRequest;
};
/** @internal */
export type PostSubscriptionsIdPauseRequest$Outbound = {
    id: string;
    body: components.DtoPauseSubscriptionRequest$Outbound;
};
/** @internal */
export declare const PostSubscriptionsIdPauseRequest$outboundSchema: z.ZodType<PostSubscriptionsIdPauseRequest$Outbound, z.ZodTypeDef, PostSubscriptionsIdPauseRequest>;
export declare function postSubscriptionsIdPauseRequestToJSON(postSubscriptionsIdPauseRequest: PostSubscriptionsIdPauseRequest): string;
//# sourceMappingURL=post-subscriptions-id-pause.d.ts.map