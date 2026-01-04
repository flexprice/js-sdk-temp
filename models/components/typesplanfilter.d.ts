import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./typesfiltercondition.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./typessortcondition.js";
import { TypesStatus } from "./typesstatus.js";
export declare const TypesPlanFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesPlanFilterOrder = ClosedEnum<typeof TypesPlanFilterOrder>;
export type TypesPlanFilter = {
    endTime?: string | undefined;
    expand?: string | undefined;
    /**
     * filters allows complex filtering based on multiple fields
     */
    filters?: Array<TypesFilterCondition> | undefined;
    limit?: number | undefined;
    lookupKey?: string | undefined;
    offset?: number | undefined;
    order?: TypesPlanFilterOrder | undefined;
    planIds?: Array<string> | undefined;
    sort?: Array<TypesSortCondition> | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
};
/** @internal */
export declare const TypesPlanFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesPlanFilterOrder>;
/** @internal */
export type TypesPlanFilter$Outbound = {
    end_time?: string | undefined;
    expand?: string | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    limit?: number | undefined;
    lookup_key?: string | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    plan_ids?: Array<string> | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const TypesPlanFilter$outboundSchema: z.ZodType<TypesPlanFilter$Outbound, z.ZodTypeDef, TypesPlanFilter>;
export declare function typesPlanFilterToJSON(typesPlanFilter: TypesPlanFilter): string;
//# sourceMappingURL=typesplanfilter.d.ts.map