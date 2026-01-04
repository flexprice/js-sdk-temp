import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesStatus } from "./typesstatus.js";
export declare const TypesQueryFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesQueryFilterOrder = ClosedEnum<typeof TypesQueryFilterOrder>;
export type TypesQueryFilter = {
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: TypesQueryFilterOrder | undefined;
    sort?: string | undefined;
    status?: TypesStatus | undefined;
};
/** @internal */
export declare const TypesQueryFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesQueryFilterOrder>;
/** @internal */
export type TypesQueryFilter$Outbound = {
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    sort?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const TypesQueryFilter$outboundSchema: z.ZodType<TypesQueryFilter$Outbound, z.ZodTypeDef, TypesQueryFilter>;
export declare function typesQueryFilterToJSON(typesQueryFilter: TypesQueryFilter): string;
//# sourceMappingURL=typesqueryfilter.d.ts.map