import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoSecretResponse } from "./dtosecretresponse.js";
export type DtoCreateAPIKeyResponse = {
    apiKey?: string | undefined;
    secret?: DtoSecretResponse | undefined;
};
/** @internal */
export declare const DtoCreateAPIKeyResponse$inboundSchema: z.ZodType<DtoCreateAPIKeyResponse, z.ZodTypeDef, unknown>;
export declare function dtoCreateAPIKeyResponseFromJSON(jsonString: string): SafeParseResult<DtoCreateAPIKeyResponse, SDKValidationError>;
//# sourceMappingURL=dtocreateapikeyresponse.d.ts.map