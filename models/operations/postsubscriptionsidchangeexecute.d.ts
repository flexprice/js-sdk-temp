import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PostSubscriptionsIdChangeExecuteRequest = {
    /**
     * Subscription ID
     */
    id: string;
    /**
     * Subscription change request
     */
    body: components.DtoSubscriptionChangeRequest;
};
/** @internal */
export type PostSubscriptionsIdChangeExecuteRequest$Outbound = {
    id: string;
    body: components.DtoSubscriptionChangeRequest$Outbound;
};
/** @internal */
export declare const PostSubscriptionsIdChangeExecuteRequest$outboundSchema: z.ZodType<PostSubscriptionsIdChangeExecuteRequest$Outbound, z.ZodTypeDef, PostSubscriptionsIdChangeExecuteRequest>;
export declare function postSubscriptionsIdChangeExecuteRequestToJSON(postSubscriptionsIdChangeExecuteRequest: PostSubscriptionsIdChangeExecuteRequest): string;
//# sourceMappingURL=postsubscriptionsidchangeexecute.d.ts.map