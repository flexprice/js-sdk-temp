import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./types-filter-condition.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./types-sort-condition.js";
import { TypesStatus } from "./types-status.js";
import { TypesUserType } from "./types-user-type.js";
export declare const TypesUserFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesUserFilterOrder = ClosedEnum<typeof TypesUserFilterOrder>;
export type TypesUserFilter = {
    endTime?: string | undefined;
    expand?: string | undefined;
    /**
     * filters allows complex filtering based on multiple fields
     */
    filters?: Array<TypesFilterCondition> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: TypesUserFilterOrder | undefined;
    roles?: Array<string> | undefined;
    sort?: Array<TypesSortCondition> | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
    type?: TypesUserType | undefined;
    /**
     * Specific filters for users
     */
    userIds?: Array<string> | undefined;
};
/** @internal */
export declare const TypesUserFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesUserFilterOrder>;
/** @internal */
export type TypesUserFilter$Outbound = {
    end_time?: string | undefined;
    expand?: string | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    roles?: Array<string> | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
    type?: string | undefined;
    user_ids?: Array<string> | undefined;
};
/** @internal */
export declare const TypesUserFilter$outboundSchema: z.ZodType<TypesUserFilter$Outbound, z.ZodTypeDef, TypesUserFilter>;
export declare function typesUserFilterToJSON(typesUserFilter: TypesUserFilter): string;
//# sourceMappingURL=types-user-filter.d.ts.map