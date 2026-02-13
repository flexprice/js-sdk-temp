import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./types-filter-condition.js";
import { TypesPriceEntityType } from "./types-price-entity-type.js";
import { TypesStatus } from "./types-status.js";
export declare const TypesPriceFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesPriceFilterOrder = ClosedEnum<typeof TypesPriceFilterOrder>;
export type TypesPriceFilter = {
    allowExpiredPrices?: boolean | undefined;
    endTime?: string | undefined;
    entityIds?: Array<string> | undefined;
    entityType?: TypesPriceEntityType | undefined;
    expand?: string | undefined;
    /**
     * DSL filters
     */
    filters?: Array<TypesFilterCondition> | undefined;
    limit?: number | undefined;
    meterIds?: Array<string> | undefined;
    offset?: number | undefined;
    order?: TypesPriceFilterOrder | undefined;
    parentPriceId?: string | undefined;
    /**
     * Price override filtering fields
     */
    planIds?: Array<string> | undefined;
    priceIds?: Array<string> | undefined;
    sort?: string | undefined;
    startDateLt?: string | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
    subscriptionId?: string | undefined;
};
/** @internal */
export declare const TypesPriceFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesPriceFilterOrder>;
/** @internal */
export type TypesPriceFilter$Outbound = {
    allow_expired_prices: boolean;
    end_time?: string | undefined;
    entity_ids?: Array<string> | undefined;
    entity_type?: string | undefined;
    expand?: string | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
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
export declare const TypesPriceFilter$outboundSchema: z.ZodType<TypesPriceFilter$Outbound, z.ZodTypeDef, TypesPriceFilter>;
export declare function typesPriceFilterToJSON(typesPriceFilter: TypesPriceFilter): string;
//# sourceMappingURL=types-price-filter.d.ts.map