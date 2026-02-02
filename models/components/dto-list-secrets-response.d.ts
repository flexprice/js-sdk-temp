import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoSecretResponse } from "./dto-secret-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListSecretsResponse = {
    items?: Array<DtoSecretResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListSecretsResponse$inboundSchema: z.ZodType<DtoListSecretsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListSecretsResponseFromJSON(jsonString: string): SafeParseResult<DtoListSecretsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-secrets-response.d.ts.map