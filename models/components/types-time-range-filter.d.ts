import * as z from "zod/v3";
export type TypesTimeRangeFilter = {
    endTime?: string | undefined;
    startTime?: string | undefined;
};
/** @internal */
export type TypesTimeRangeFilter$Outbound = {
    end_time?: string | undefined;
    start_time?: string | undefined;
};
/** @internal */
export declare const TypesTimeRangeFilter$outboundSchema: z.ZodType<TypesTimeRangeFilter$Outbound, z.ZodTypeDef, TypesTimeRangeFilter>;
export declare function typesTimeRangeFilterToJSON(typesTimeRangeFilter: TypesTimeRangeFilter): string;
//# sourceMappingURL=types-time-range-filter.d.ts.map