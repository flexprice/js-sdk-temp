import * as z from "zod/v3";
export type GetSubscriptionsIdV2Request = {
    /**
     * Subscription ID
     */
    id: string;
    /**
     * Comma-separated list of fields to expand (e.g., 'subscription_line_items,prices,plan')
     */
    expand?: string | undefined;
};
/** @internal */
export type GetSubscriptionsIdV2Request$Outbound = {
    id: string;
    expand?: string | undefined;
};
/** @internal */
export declare const GetSubscriptionsIdV2Request$outboundSchema: z.ZodType<GetSubscriptionsIdV2Request$Outbound, z.ZodTypeDef, GetSubscriptionsIdV2Request>;
export declare function getSubscriptionsIdV2RequestToJSON(getSubscriptionsIdV2Request: GetSubscriptionsIdV2Request): string;
//# sourceMappingURL=get-subscriptions-id-v2.d.ts.map