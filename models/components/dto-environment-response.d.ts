import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoEnvironmentResponse = {
    createdAt?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    type?: string | undefined;
    updatedAt?: string | undefined;
};
/** @internal */
export declare const DtoEnvironmentResponse$inboundSchema: z.ZodType<DtoEnvironmentResponse, z.ZodTypeDef, unknown>;
export declare function dtoEnvironmentResponseFromJSON(jsonString: string): SafeParseResult<DtoEnvironmentResponse, SDKValidationError>;
//# sourceMappingURL=dto-environment-response.d.ts.map