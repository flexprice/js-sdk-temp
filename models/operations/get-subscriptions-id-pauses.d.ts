import * as z from "zod/v3";
export type GetSubscriptionsIdPausesRequest = {
    /**
     * Subscription ID
     */
    id: string;
};
/** @internal */
export type GetSubscriptionsIdPausesRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetSubscriptionsIdPausesRequest$outboundSchema: z.ZodType<GetSubscriptionsIdPausesRequest$Outbound, z.ZodTypeDef, GetSubscriptionsIdPausesRequest>;
export declare function getSubscriptionsIdPausesRequestToJSON(getSubscriptionsIdPausesRequest: GetSubscriptionsIdPausesRequest): string;
//# sourceMappingURL=get-subscriptions-id-pauses.d.ts.map