import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoSuccessResponse = {
    message?: string | undefined;
};
/** @internal */
export declare const DtoSuccessResponse$inboundSchema: z.ZodType<DtoSuccessResponse, z.ZodTypeDef, unknown>;
export declare function dtoSuccessResponseFromJSON(jsonString: string): SafeParseResult<DtoSuccessResponse, SDKValidationError>;
//# sourceMappingURL=dto-success-response.d.ts.map