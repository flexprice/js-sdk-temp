import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetCreditgrantsOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetCreditgrantsOrder = ClosedEnum<typeof GetCreditgrantsOrder>;
export declare const GetCreditgrantsScope: {
    readonly Plan: "PLAN";
    readonly Subscription: "SUBSCRIPTION";
};
export type GetCreditgrantsScope = ClosedEnum<typeof GetCreditgrantsScope>;
export declare const GetCreditgrantsStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetCreditgrantsStatus = ClosedEnum<typeof GetCreditgrantsStatus>;
export type GetCreditgrantsRequest = {
    endTime?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetCreditgrantsOrder | undefined;
    /**
     * Specific filters for credit grants
     */
    planIds?: Array<string> | undefined;
    scope?: GetCreditgrantsScope | undefined;
    sort?: string | undefined;
    startTime?: string | undefined;
    status?: GetCreditgrantsStatus | undefined;
    subscriptionIds?: Array<string> | undefined;
};
/** @internal */
export declare const GetCreditgrantsOrder$outboundSchema: z.ZodNativeEnum<typeof GetCreditgrantsOrder>;
/** @internal */
export declare const GetCreditgrantsScope$outboundSchema: z.ZodNativeEnum<typeof GetCreditgrantsScope>;
/** @internal */
export declare const GetCreditgrantsStatus$outboundSchema: z.ZodNativeEnum<typeof GetCreditgrantsStatus>;
/** @internal */
export type GetCreditgrantsRequest$Outbound = {
    end_time?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    plan_ids?: Array<string> | undefined;
    scope?: string | undefined;
    sort?: string | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
    subscription_ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetCreditgrantsRequest$outboundSchema: z.ZodType<GetCreditgrantsRequest$Outbound, z.ZodTypeDef, GetCreditgrantsRequest>;
export declare function getCreditgrantsRequestToJSON(getCreditgrantsRequest: GetCreditgrantsRequest): string;
//# sourceMappingURL=getcreditgrants.d.ts.map