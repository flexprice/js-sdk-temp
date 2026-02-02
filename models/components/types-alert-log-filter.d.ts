import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesAlertEntityType } from "./types-alert-entity-type.js";
import { TypesAlertState } from "./types-alert-state.js";
import { TypesAlertType } from "./types-alert-type.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./types-filter-condition.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./types-sort-condition.js";
import { TypesStatus } from "./types-status.js";
export declare const TypesAlertLogFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesAlertLogFilterOrder = ClosedEnum<typeof TypesAlertLogFilterOrder>;
export type TypesAlertLogFilter = {
    alertStatus?: TypesAlertState | undefined;
    alertType?: TypesAlertType | undefined;
    customerId?: string | undefined;
    endTime?: string | undefined;
    entityId?: string | undefined;
    entityType?: TypesAlertEntityType | undefined;
    expand?: string | undefined;
    /**
     * filters allows complex filtering based on multiple fields
     */
    filters?: Array<TypesFilterCondition> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: TypesAlertLogFilterOrder | undefined;
    sort?: Array<TypesSortCondition> | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
};
/** @internal */
export declare const TypesAlertLogFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesAlertLogFilterOrder>;
/** @internal */
export type TypesAlertLogFilter$Outbound = {
    alert_status?: string | undefined;
    alert_type?: string | undefined;
    customer_id?: string | undefined;
    end_time?: string | undefined;
    entity_id?: string | undefined;
    entity_type?: string | undefined;
    expand?: string | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const TypesAlertLogFilter$outboundSchema: z.ZodType<TypesAlertLogFilter$Outbound, z.ZodTypeDef, TypesAlertLogFilter>;
export declare function typesAlertLogFilterToJSON(typesAlertLogFilter: TypesAlertLogFilter): string;
//# sourceMappingURL=types-alert-log-filter.d.ts.map