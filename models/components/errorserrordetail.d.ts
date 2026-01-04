import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ErrorsErrorDetail = {
    internalError?: string | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const ErrorsErrorDetail$inboundSchema: z.ZodType<ErrorsErrorDetail, z.ZodTypeDef, unknown>;
export declare function errorsErrorDetailFromJSON(jsonString: string): SafeParseResult<ErrorsErrorDetail, SDKValidationError>;
//# sourceMappingURL=errorserrordetail.d.ts.map