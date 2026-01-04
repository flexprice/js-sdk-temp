import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./typesfiltercondition.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./typessortcondition.js";
import { TypesStatus } from "./typesstatus.js";
export declare const TypesFeatureFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesFeatureFilterOrder = ClosedEnum<typeof TypesFeatureFilterOrder>;
export type TypesFeatureFilter = {
    endTime?: string | undefined;
    expand?: string | undefined;
    /**
     * Feature specific filters
     */
    featureIds?: Array<string> | undefined;
    /**
     * filters allows complex filtering based on multiple fields
     */
    filters?: Array<TypesFilterCondition> | undefined;
    limit?: number | undefined;
    lookupKey?: string | undefined;
    lookupKeys?: Array<string> | undefined;
    meterIds?: Array<string> | undefined;
    nameContains?: string | undefined;
    offset?: number | undefined;
    order?: TypesFeatureFilterOrder | undefined;
    sort?: Array<TypesSortCondition> | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
};
/** @internal */
export declare const TypesFeatureFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesFeatureFilterOrder>;
/** @internal */
export type TypesFeatureFilter$Outbound = {
    end_time?: string | undefined;
    expand?: string | undefined;
    feature_ids?: Array<string> | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    limit?: number | undefined;
    lookup_key?: string | undefined;
    lookup_keys?: Array<string> | undefined;
    meter_ids?: Array<string> | undefined;
    name_contains?: string | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const TypesFeatureFilter$outboundSchema: z.ZodType<TypesFeatureFilter$Outbound, z.ZodTypeDef, TypesFeatureFilter>;
export declare function typesFeatureFilterToJSON(typesFeatureFilter: TypesFeatureFilter): string;
//# sourceMappingURL=typesfeaturefilter.d.ts.map