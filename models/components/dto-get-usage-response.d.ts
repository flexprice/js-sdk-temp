import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoUsageResult } from "./dto-usage-result.js";
import { TypesAggregationType } from "./types-aggregation-type.js";
export type DtoGetUsageResponse = {
    eventName?: string | undefined;
    results?: Array<DtoUsageResult> | undefined;
    type?: TypesAggregationType | undefined;
    value?: number | undefined;
};
/** @internal */
export declare const DtoGetUsageResponse$inboundSchema: z.ZodType<DtoGetUsageResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetUsageResponseFromJSON(jsonString: string): SafeParseResult<DtoGetUsageResponse, SDKValidationError>;
//# sourceMappingURL=dto-get-usage-response.d.ts.map