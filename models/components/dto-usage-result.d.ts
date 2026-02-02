import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoUsageResult = {
    value?: number | undefined;
    windowSize?: string | undefined;
};
/** @internal */
export declare const DtoUsageResult$inboundSchema: z.ZodType<DtoUsageResult, z.ZodTypeDef, unknown>;
export declare function dtoUsageResultFromJSON(jsonString: string): SafeParseResult<DtoUsageResult, SDKValidationError>;
//# sourceMappingURL=dto-usage-result.d.ts.map