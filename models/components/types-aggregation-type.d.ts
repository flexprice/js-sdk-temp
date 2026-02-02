import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesAggregationType: {
    readonly Count: "COUNT";
    readonly Sum: "SUM";
    readonly Avg: "AVG";
    readonly CountUnique: "COUNT_UNIQUE";
    readonly Latest: "LATEST";
    readonly SumWithMultiplier: "SUM_WITH_MULTIPLIER";
    readonly Max: "MAX";
    readonly WeightedSum: "WEIGHTED_SUM";
};
export type TypesAggregationType = ClosedEnum<typeof TypesAggregationType>;
/** @internal */
export declare const TypesAggregationType$inboundSchema: z.ZodNativeEnum<typeof TypesAggregationType>;
/** @internal */
export declare const TypesAggregationType$outboundSchema: z.ZodNativeEnum<typeof TypesAggregationType>;
//# sourceMappingURL=types-aggregation-type.d.ts.map