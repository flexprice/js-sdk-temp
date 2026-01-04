import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesAggregationType } from "./typesaggregationtype.js";
import { TypesWindowSize } from "./typeswindowsize.js";
export type MeterAggregation = {
    bucketSize?: TypesWindowSize | undefined;
    /**
     * Field is the key in $event.properties on which the aggregation is to be applied
     *
     * @remarks
     * For ex if the aggregation type is sum for API usage, the field could be "duration_ms"
     */
    field?: string | undefined;
    /**
     * Multiplier is the multiplier for the aggregation
     *
     * @remarks
     * For ex if the aggregation type is sum_with_multiplier for API usage, the multiplier could be 1000
     * to scale up by a factor of 1000. If not provided, it will be null.
     */
    multiplier?: string | undefined;
    type?: TypesAggregationType | undefined;
};
/** @internal */
export declare const MeterAggregation$inboundSchema: z.ZodType<MeterAggregation, z.ZodTypeDef, unknown>;
/** @internal */
export type MeterAggregation$Outbound = {
    bucket_size?: string | undefined;
    field?: string | undefined;
    multiplier?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const MeterAggregation$outboundSchema: z.ZodType<MeterAggregation$Outbound, z.ZodTypeDef, MeterAggregation>;
export declare function meterAggregationToJSON(meterAggregation: MeterAggregation): string;
export declare function meterAggregationFromJSON(jsonString: string): SafeParseResult<MeterAggregation, SDKValidationError>;
//# sourceMappingURL=meteraggregation.d.ts.map