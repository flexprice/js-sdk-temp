import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetCustomersOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetCustomersOrder = ClosedEnum<typeof GetCustomersOrder>;
export declare const GetCustomersStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetCustomersStatus = ClosedEnum<typeof GetCustomersStatus>;
export type GetCustomersRequest = {
    customerIds?: Array<string> | undefined;
    email?: string | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    externalId?: string | undefined;
    externalIds?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetCustomersOrder | undefined;
    parentCustomerIds?: Array<string> | undefined;
    startTime?: string | undefined;
    status?: GetCustomersStatus | undefined;
};
/** @internal */
export declare const GetCustomersOrder$outboundSchema: z.ZodNativeEnum<typeof GetCustomersOrder>;
/** @internal */
export declare const GetCustomersStatus$outboundSchema: z.ZodNativeEnum<typeof GetCustomersStatus>;
/** @internal */
export type GetCustomersRequest$Outbound = {
    customer_ids?: Array<string> | undefined;
    email?: string | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    external_id?: string | undefined;
    external_ids?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    parent_customer_ids?: Array<string> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const GetCustomersRequest$outboundSchema: z.ZodType<GetCustomersRequest$Outbound, z.ZodTypeDef, GetCustomersRequest>;
export declare function getCustomersRequestToJSON(getCustomersRequest: GetCustomersRequest): string;
//# sourceMappingURL=get-customers.d.ts.map