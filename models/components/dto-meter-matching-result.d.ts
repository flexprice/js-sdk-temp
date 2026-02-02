import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoMatchedMeter } from "./dto-matched-meter.js";
import { ErrorsErrorResponse } from "./errors-error-response.js";
import { TypesDebugTrackerStatus } from "./types-debug-tracker-status.js";
export type DtoMeterMatchingResult = {
    error?: ErrorsErrorResponse | undefined;
    matchedMeters?: Array<DtoMatchedMeter> | undefined;
    status?: TypesDebugTrackerStatus | undefined;
};
/** @internal */
export declare const DtoMeterMatchingResult$inboundSchema: z.ZodType<DtoMeterMatchingResult, z.ZodTypeDef, unknown>;
export declare function dtoMeterMatchingResultFromJSON(jsonString: string): SafeParseResult<DtoMeterMatchingResult, SDKValidationError>;
//# sourceMappingURL=dto-meter-matching-result.d.ts.map