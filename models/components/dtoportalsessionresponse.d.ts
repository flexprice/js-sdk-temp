import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoPortalSessionResponse = {
    expiresAt?: string | undefined;
    token?: string | undefined;
    url?: string | undefined;
};
/** @internal */
export declare const DtoPortalSessionResponse$inboundSchema: z.ZodType<DtoPortalSessionResponse, z.ZodTypeDef, unknown>;
export declare function dtoPortalSessionResponseFromJSON(jsonString: string): SafeParseResult<DtoPortalSessionResponse, SDKValidationError>;
//# sourceMappingURL=dtoportalsessionresponse.d.ts.map