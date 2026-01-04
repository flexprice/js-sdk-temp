import * as z from "zod/v3";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./typesfiltercondition.js";
import { TypesQueryFilter, TypesQueryFilter$Outbound } from "./typesqueryfilter.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./typessortcondition.js";
import { TypesStatus } from "./typesstatus.js";
import { TypesTimeRangeFilter, TypesTimeRangeFilter$Outbound } from "./typestimerangefilter.js";
export type CostsheetFilter = {
    /**
     * CostsheetIDs allows filtering by specific costsheet IDs
     */
    costsheetIDs?: Array<string> | undefined;
    /**
     * EnvironmentID filters by specific environment ID
     */
    environmentID?: string | undefined;
    /**
     * Filters contains custom filtering conditions
     */
    filters?: Array<TypesFilterCondition> | undefined;
    /**
     * LookupKey filters by lookup key
     */
    lookupKey?: string | undefined;
    /**
     * Name filters by costsheet name
     */
    name?: string | undefined;
    queryFilter?: TypesQueryFilter | undefined;
    /**
     * Sort specifies result ordering preferences
     */
    sort?: Array<TypesSortCondition> | undefined;
    status?: TypesStatus | undefined;
    /**
     * TenantID filters by specific tenant ID
     */
    tenantID?: string | undefined;
    timeRangeFilter?: TypesTimeRangeFilter | undefined;
};
/** @internal */
export type CostsheetFilter$Outbound = {
    costsheetIDs?: Array<string> | undefined;
    environmentID?: string | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    lookupKey?: string | undefined;
    name?: string | undefined;
    queryFilter?: TypesQueryFilter$Outbound | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    status?: string | undefined;
    tenantID?: string | undefined;
    timeRangeFilter?: TypesTimeRangeFilter$Outbound | undefined;
};
/** @internal */
export declare const CostsheetFilter$outboundSchema: z.ZodType<CostsheetFilter$Outbound, z.ZodTypeDef, CostsheetFilter>;
export declare function costsheetFilterToJSON(costsheetFilter: CostsheetFilter): string;
//# sourceMappingURL=costsheetfilter.d.ts.map