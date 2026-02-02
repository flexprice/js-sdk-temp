import * as z from "zod/v3";
export type GetSubscriptionsIdEntitlementsRequest = {
    /**
     * Subscription ID
     */
    id: string;
    /**
     * Feature IDs to filter by
     */
    featureIds?: Array<string> | undefined;
};
/** @internal */
export type GetSubscriptionsIdEntitlementsRequest$Outbound = {
    id: string;
    feature_ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetSubscriptionsIdEntitlementsRequest$outboundSchema: z.ZodType<GetSubscriptionsIdEntitlementsRequest$Outbound, z.ZodTypeDef, GetSubscriptionsIdEntitlementsRequest>;
export declare function getSubscriptionsIdEntitlementsRequestToJSON(getSubscriptionsIdEntitlementsRequest: GetSubscriptionsIdEntitlementsRequest): string;
//# sourceMappingURL=get-subscriptions-id-entitlements.d.ts.map