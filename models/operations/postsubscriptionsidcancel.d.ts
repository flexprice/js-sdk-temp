import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PostSubscriptionsIdCancelRequest = {
    /**
     * Subscription ID
     */
    id: string;
    /**
     * Cancel Subscription Request
     */
    body: components.DtoCancelSubscriptionRequest;
};
/** @internal */
export type PostSubscriptionsIdCancelRequest$Outbound = {
    id: string;
    body: components.DtoCancelSubscriptionRequest$Outbound;
};
/** @internal */
export declare const PostSubscriptionsIdCancelRequest$outboundSchema: z.ZodType<PostSubscriptionsIdCancelRequest$Outbound, z.ZodTypeDef, PostSubscriptionsIdCancelRequest>;
export declare function postSubscriptionsIdCancelRequestToJSON(postSubscriptionsIdCancelRequest: PostSubscriptionsIdCancelRequest): string;
//# sourceMappingURL=postsubscriptionsidcancel.d.ts.map