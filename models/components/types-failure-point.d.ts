import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { ErrorsErrorResponse } from "./errors-error-response.js";
import { TypesFailurePointType } from "./types-failure-point-type.js";
export type TypesFailurePoint = {
    error?: ErrorsErrorResponse | undefined;
    failurePointType?: TypesFailurePointType | undefined;
};
/** @internal */
export declare const TypesFailurePoint$inboundSchema: z.ZodType<TypesFailurePoint, z.ZodTypeDef, unknown>;
export declare function typesFailurePointFromJSON(jsonString: string): SafeParseResult<TypesFailurePoint, SDKValidationError>;
//# sourceMappingURL=types-failure-point.d.ts.map