import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoSecretResponse } from "./dto-secret-response.js";
export type DtoCreateAPIKeyResponse = {
    apiKey?: string | undefined;
    secret?: DtoSecretResponse | undefined;
};
/** @internal */
export declare const DtoCreateAPIKeyResponse$inboundSchema: z.ZodType<DtoCreateAPIKeyResponse, z.ZodTypeDef, unknown>;
export declare function dtoCreateAPIKeyResponseFromJSON(jsonString: string): SafeParseResult<DtoCreateAPIKeyResponse, SDKValidationError>;
//# sourceMappingURL=dto-create-api-key-response.d.ts.map