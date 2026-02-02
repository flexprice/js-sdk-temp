import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetPricesEntityType: {
    readonly Plan: "PLAN";
    readonly Subscription: "SUBSCRIPTION";
    readonly Addon: "ADDON";
    readonly Price: "PRICE";
    readonly Costsheet: "COSTSHEET";
};
export type GetPricesEntityType = ClosedEnum<typeof GetPricesEntityType>;
export declare const GetPricesOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetPricesOrder = ClosedEnum<typeof GetPricesOrder>;
export declare const GetPricesStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetPricesStatus = ClosedEnum<typeof GetPricesStatus>;
export type GetPricesRequest = {
    allowExpiredPrices?: boolean | undefined;
    endTime?: string | undefined;
    entityIds?: Array<string> | undefined;
    entityType?: GetPricesEntityType | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    meterIds?: Array<string> | undefined;
    offset?: number | undefined;
    order?: GetPricesOrder | undefined;
    parentPriceId?: string | undefined;
    /**
     * Price override filtering fields
     */
    planIds?: Array<string> | undefined;
    priceIds?: Array<string> | undefined;
    sort?: string | undefined;
    startDateLt?: string | undefined;
    startTime?: string | undefined;
    status?: GetPricesStatus | undefined;
    subscriptionId?: string | undefined;
};
/** @internal */
export declare const GetPricesEntityType$outboundSchema: z.ZodNativeEnum<typeof GetPricesEntityType>;
/** @internal */
export declare const GetPricesOrder$outboundSchema: z.ZodNativeEnum<typeof GetPricesOrder>;
/** @internal */
export declare const GetPricesStatus$outboundSchema: z.ZodNativeEnum<typeof GetPricesStatus>;
/** @internal */
export type GetPricesRequest$Outbound = {
    allow_expired_prices: boolean;
    end_time?: string | undefined;
    entity_ids?: Array<string> | undefined;
    entity_type?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    meter_ids?: Array<string> | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    parent_price_id?: string | undefined;
    plan_ids?: Array<string> | undefined;
    price_ids?: Array<string> | undefined;
    sort?: string | undefined;
    start_date_lt?: string | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
    subscription_id?: string | undefined;
};
/** @internal */
export declare const GetPricesRequest$outboundSchema: z.ZodType<GetPricesRequest$Outbound, z.ZodTypeDef, GetPricesRequest>;
export declare function getPricesRequestToJSON(getPricesRequest: GetPricesRequest): string;
//# sourceMappingURL=get-prices.d.ts.map