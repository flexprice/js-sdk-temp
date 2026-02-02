import * as z from "zod/v3";
export type GetV1SubscriptionSchedulesRequest = {
    /**
     * Filter to pending schedules only
     */
    pendingOnly?: boolean | undefined;
    /**
     * Filter by subscription ID
     */
    subscriptionId?: string | undefined;
    /**
     * Limit results
     */
    limit?: number | undefined;
    /**
     * Offset for pagination
     */
    offset?: number | undefined;
};
/** @internal */
export type GetV1SubscriptionSchedulesRequest$Outbound = {
    pending_only?: boolean | undefined;
    subscription_id?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
};
/** @internal */
export declare const GetV1SubscriptionSchedulesRequest$outboundSchema: z.ZodType<GetV1SubscriptionSchedulesRequest$Outbound, z.ZodTypeDef, GetV1SubscriptionSchedulesRequest>;
export declare function getV1SubscriptionSchedulesRequestToJSON(getV1SubscriptionSchedulesRequest: GetV1SubscriptionSchedulesRequest): string;
//# sourceMappingURL=get-v1-subscription-schedules.d.ts.map