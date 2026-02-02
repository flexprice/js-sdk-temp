import * as z from "zod/v3";
export type GetV1SubscriptionsSubscriptionIdSchedulesRequest = {
    /**
     * Subscription ID
     */
    subscriptionId: string;
};
/** @internal */
export type GetV1SubscriptionsSubscriptionIdSchedulesRequest$Outbound = {
    subscription_id: string;
};
/** @internal */
export declare const GetV1SubscriptionsSubscriptionIdSchedulesRequest$outboundSchema: z.ZodType<GetV1SubscriptionsSubscriptionIdSchedulesRequest$Outbound, z.ZodTypeDef, GetV1SubscriptionsSubscriptionIdSchedulesRequest>;
export declare function getV1SubscriptionsSubscriptionIdSchedulesRequestToJSON(getV1SubscriptionsSubscriptionIdSchedulesRequest: GetV1SubscriptionsSubscriptionIdSchedulesRequest): string;
//# sourceMappingURL=get-v1-subscriptions-subscription-id-schedules.d.ts.map