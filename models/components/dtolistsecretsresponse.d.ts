import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoSecretResponse } from "./dtosecretresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListSecretsResponse = {
    items?: Array<DtoSecretResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListSecretsResponse$inboundSchema: z.ZodType<DtoListSecretsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListSecretsResponseFromJSON(jsonString: string): SafeParseResult<DtoListSecretsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistsecretsresponse.d.ts.map