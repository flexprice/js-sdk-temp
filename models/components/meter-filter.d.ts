import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type MeterFilter = {
    /**
     * Key is the key for the filter from $event.properties
     *
     * @remarks
     * Currently we support only first level keys in the properties and not nested keys
     */
    key?: string | undefined;
    /**
     * Values are the possible values for the filter to be considered for the meter
     *
     * @remarks
     * For ex "model_name" could have values "o1-mini", "gpt-4o" etc
     */
    values?: Array<string> | undefined;
};
/** @internal */
export declare const MeterFilter$inboundSchema: z.ZodType<MeterFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type MeterFilter$Outbound = {
    key?: string | undefined;
    values?: Array<string> | undefined;
};
/** @internal */
export declare const MeterFilter$outboundSchema: z.ZodType<MeterFilter$Outbound, z.ZodTypeDef, MeterFilter>;
export declare function meterFilterToJSON(meterFilter: MeterFilter): string;
export declare function meterFilterFromJSON(jsonString: string): SafeParseResult<MeterFilter, SDKValidationError>;
//# sourceMappingURL=meter-filter.d.ts.map