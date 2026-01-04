import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PostSubscriptionsIdActivateRequest = {
    /**
     * Subscription ID
     */
    id: string;
    /**
     * Activate Draft Subscription Request
     */
    body: components.DtoActivateDraftSubscriptionRequest;
};
/** @internal */
export type PostSubscriptionsIdActivateRequest$Outbound = {
    id: string;
    body: components.DtoActivateDraftSubscriptionRequest$Outbound;
};
/** @internal */
export declare const PostSubscriptionsIdActivateRequest$outboundSchema: z.ZodType<PostSubscriptionsIdActivateRequest$Outbound, z.ZodTypeDef, PostSubscriptionsIdActivateRequest>;
export declare function postSubscriptionsIdActivateRequestToJSON(postSubscriptionsIdActivateRequest: PostSubscriptionsIdActivateRequest): string;
//# sourceMappingURL=postsubscriptionsidactivate.d.ts.map