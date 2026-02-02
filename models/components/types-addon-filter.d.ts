import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesAddonType } from "./types-addon-type.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./types-filter-condition.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./types-sort-condition.js";
import { TypesStatus } from "./types-status.js";
export declare const TypesAddonFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesAddonFilterOrder = ClosedEnum<typeof TypesAddonFilterOrder>;
export type TypesAddonFilter = {
    addonIds?: Array<string> | undefined;
    addonType?: TypesAddonType | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    /**
     * filters allows complex filtering based on multiple fields
     */
    filters?: Array<TypesFilterCondition> | undefined;
    limit?: number | undefined;
    lookupKeys?: Array<string> | undefined;
    offset?: number | undefined;
    order?: TypesAddonFilterOrder | undefined;
    sort?: Array<TypesSortCondition> | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
};
/** @internal */
export declare const TypesAddonFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesAddonFilterOrder>;
/** @internal */
export type TypesAddonFilter$Outbound = {
    addon_ids?: Array<string> | undefined;
    addon_type?: string | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    limit?: number | undefined;
    lookup_keys?: Array<string> | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const TypesAddonFilter$outboundSchema: z.ZodType<TypesAddonFilter$Outbound, z.ZodTypeDef, TypesAddonFilter>;
export declare function typesAddonFilterToJSON(typesAddonFilter: TypesAddonFilter): string;
//# sourceMappingURL=types-addon-filter.d.ts.map