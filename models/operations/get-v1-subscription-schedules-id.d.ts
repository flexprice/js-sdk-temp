import * as z from "zod/v3";
export type GetV1SubscriptionSchedulesIdRequest = {
    /**
     * Schedule ID
     */
    id: string;
};
/** @internal */
export type GetV1SubscriptionSchedulesIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetV1SubscriptionSchedulesIdRequest$outboundSchema: z.ZodType<GetV1SubscriptionSchedulesIdRequest$Outbound, z.ZodTypeDef, GetV1SubscriptionSchedulesIdRequest>;
export declare function getV1SubscriptionSchedulesIdRequestToJSON(getV1SubscriptionSchedulesIdRequest: GetV1SubscriptionSchedulesIdRequest): string;
//# sourceMappingURL=get-v1-subscription-schedules-id.d.ts.map