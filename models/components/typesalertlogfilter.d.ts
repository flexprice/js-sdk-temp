import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesAlertEntityType } from "./typesalertentitytype.js";
import { TypesAlertState } from "./typesalertstate.js";
import { TypesAlertType } from "./typesalerttype.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./typesfiltercondition.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./typessortcondition.js";
import { TypesStatus } from "./typesstatus.js";
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
//# sourceMappingURL=typesalertlogfilter.d.ts.map