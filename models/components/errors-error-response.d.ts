import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { ErrorsErrorDetail } from "./errors-error-detail.js";
export type ErrorsErrorResponse = {
    error?: ErrorsErrorDetail | undefined;
    success?: boolean | undefined;
};
/** @internal */
export declare const ErrorsErrorResponse$inboundSchema: z.ZodType<ErrorsErrorResponse, z.ZodTypeDef, unknown>;
export declare function errorsErrorResponseFromJSON(jsonString: string): SafeParseResult<ErrorsErrorResponse, SDKValidationError>;
//# sourceMappingURL=errors-error-response.d.ts.map