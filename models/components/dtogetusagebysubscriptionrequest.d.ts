import * as z from "zod/v3";
export type DtoGetUsageBySubscriptionRequest = {
    endTime?: string | undefined;
    lifetimeUsage?: boolean | undefined;
    startTime?: string | undefined;
    subscriptionId: string;
};
/** @internal */
export type DtoGetUsageBySubscriptionRequest$Outbound = {
    end_time?: string | undefined;
    lifetime_usage?: boolean | undefined;
    start_time?: string | undefined;
    subscription_id: string;
};
/** @internal */
export declare const DtoGetUsageBySubscriptionRequest$outboundSchema: z.ZodType<DtoGetUsageBySubscriptionRequest$Outbound, z.ZodTypeDef, DtoGetUsageBySubscriptionRequest>;
export declare function dtoGetUsageBySubscriptionRequestToJSON(dtoGetUsageBySubscriptionRequest: DtoGetUsageBySubscriptionRequest): string;
//# sourceMappingURL=dtogetusagebysubscriptionrequest.d.ts.map