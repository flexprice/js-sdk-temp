import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesEntitlementEntityType } from "./types-entitlement-entity-type.js";
import { TypesFeatureType } from "./types-feature-type.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./types-filter-condition.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./types-sort-condition.js";
import { TypesStatus } from "./types-status.js";
export declare const TypesEntitlementFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesEntitlementFilterOrder = ClosedEnum<typeof TypesEntitlementFilterOrder>;
export type TypesEntitlementFilter = {
    endTime?: string | undefined;
    entityIds?: Array<string> | undefined;
    entityType?: TypesEntitlementEntityType | undefined;
    expand?: string | undefined;
    featureIds?: Array<string> | undefined;
    featureType?: TypesFeatureType | undefined;
    /**
     * Specific filters for entitlements
     */
    filters?: Array<TypesFilterCondition> | undefined;
    isEnabled?: boolean | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: TypesEntitlementFilterOrder | undefined;
    planIds?: Array<string> | undefined;
    sort?: Array<TypesSortCondition> | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
};
/** @internal */
export declare const TypesEntitlementFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesEntitlementFilterOrder>;
/** @internal */
export type TypesEntitlementFilter$Outbound = {
    end_time?: string | undefined;
    entity_ids?: Array<string> | undefined;
    entity_type?: string | undefined;
    expand?: string | undefined;
    feature_ids?: Array<string> | undefined;
    feature_type?: string | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    is_enabled?: boolean | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    plan_ids?: Array<string> | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const TypesEntitlementFilter$outboundSchema: z.ZodType<TypesEntitlementFilter$Outbound, z.ZodTypeDef, TypesEntitlementFilter>;
export declare function typesEntitlementFilterToJSON(typesEntitlementFilter: TypesEntitlementFilter): string;
//# sourceMappingURL=types-entitlement-filter.d.ts.map