import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./types-filter-condition.js";
import { TypesSecretProvider } from "./types-secret-provider.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./types-sort-condition.js";
import { TypesStatus } from "./types-status.js";
export declare const TypesConnectionFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesConnectionFilterOrder = ClosedEnum<typeof TypesConnectionFilterOrder>;
export type TypesConnectionFilter = {
    connectionIds?: Array<string> | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    filters?: Array<TypesFilterCondition> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: TypesConnectionFilterOrder | undefined;
    providerType?: TypesSecretProvider | undefined;
    sort?: Array<TypesSortCondition> | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
};
/** @internal */
export declare const TypesConnectionFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesConnectionFilterOrder>;
/** @internal */
export type TypesConnectionFilter$Outbound = {
    connection_ids?: Array<string> | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    provider_type?: string | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const TypesConnectionFilter$outboundSchema: z.ZodType<TypesConnectionFilter$Outbound, z.ZodTypeDef, TypesConnectionFilter>;
export declare function typesConnectionFilterToJSON(typesConnectionFilter: TypesConnectionFilter): string;
//# sourceMappingURL=types-connection-filter.d.ts.map