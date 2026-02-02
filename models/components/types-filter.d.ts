import * as z from "zod/v3";
import { TypesStatus } from "./types-status.js";
export type TypesFilter = {
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    sort?: string | undefined;
    status?: TypesStatus | undefined;
};
/** @internal */
export type TypesFilter$Outbound = {
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    sort?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const TypesFilter$outboundSchema: z.ZodType<TypesFilter$Outbound, z.ZodTypeDef, TypesFilter>;
export declare function typesFilterToJSON(typesFilter: TypesFilter): string;
//# sourceMappingURL=types-filter.d.ts.map