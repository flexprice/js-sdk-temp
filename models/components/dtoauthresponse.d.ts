import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoAuthResponse = {
    tenantId?: string | undefined;
    token?: string | undefined;
    userId?: string | undefined;
};
/** @internal */
export declare const DtoAuthResponse$inboundSchema: z.ZodType<DtoAuthResponse, z.ZodTypeDef, unknown>;
export declare function dtoAuthResponseFromJSON(jsonString: string): SafeParseResult<DtoAuthResponse, SDKValidationError>;
//# sourceMappingURL=dtoauthresponse.d.ts.map