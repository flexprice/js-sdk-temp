import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./typesfiltercondition.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./typessortcondition.js";
import { TypesStatus } from "./typesstatus.js";
export declare const TypesCustomerFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesCustomerFilterOrder = ClosedEnum<typeof TypesCustomerFilterOrder>;
export type TypesCustomerFilter = {
    customerIds?: Array<string> | undefined;
    email?: string | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    externalId?: string | undefined;
    externalIds?: Array<string> | undefined;
    filters?: Array<TypesFilterCondition> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: TypesCustomerFilterOrder | undefined;
    parentCustomerIds?: Array<string> | undefined;
    sort?: Array<TypesSortCondition> | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
};
/** @internal */
export declare const TypesCustomerFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesCustomerFilterOrder>;
/** @internal */
export type TypesCustomerFilter$Outbound = {
    customer_ids?: Array<string> | undefined;
    email?: string | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    external_id?: string | undefined;
    external_ids?: Array<string> | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    parent_customer_ids?: Array<string> | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const TypesCustomerFilter$outboundSchema: z.ZodType<TypesCustomerFilter$Outbound, z.ZodTypeDef, TypesCustomerFilter>;
export declare function typesCustomerFilterToJSON(typesCustomerFilter: TypesCustomerFilter): string;
//# sourceMappingURL=typescustomerfilter.d.ts.map