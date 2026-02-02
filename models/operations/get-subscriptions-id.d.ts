import * as z from "zod/v3";
export type GetSubscriptionsIdRequest = {
    /**
     * Subscription ID
     */
    id: string;
};
/** @internal */
export type GetSubscriptionsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetSubscriptionsIdRequest$outboundSchema: z.ZodType<GetSubscriptionsIdRequest$Outbound, z.ZodTypeDef, GetSubscriptionsIdRequest>;
export declare function getSubscriptionsIdRequestToJSON(getSubscriptionsIdRequest: GetSubscriptionsIdRequest): string;
//# sourceMappingURL=get-subscriptions-id.d.ts.map