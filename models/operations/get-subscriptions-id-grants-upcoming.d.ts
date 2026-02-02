import * as z from "zod/v3";
export type GetSubscriptionsIdGrantsUpcomingRequest = {
    /**
     * Subscription ID
     */
    id: string;
};
/** @internal */
export type GetSubscriptionsIdGrantsUpcomingRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetSubscriptionsIdGrantsUpcomingRequest$outboundSchema: z.ZodType<GetSubscriptionsIdGrantsUpcomingRequest$Outbound, z.ZodTypeDef, GetSubscriptionsIdGrantsUpcomingRequest>;
export declare function getSubscriptionsIdGrantsUpcomingRequestToJSON(getSubscriptionsIdGrantsUpcomingRequest: GetSubscriptionsIdGrantsUpcomingRequest): string;
//# sourceMappingURL=get-subscriptions-id-grants-upcoming.d.ts.map