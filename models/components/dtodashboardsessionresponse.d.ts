import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoDashboardSessionResponse = {
    expiresAt?: string | undefined;
    token?: string | undefined;
    url?: string | undefined;
};
/** @internal */
export declare const DtoDashboardSessionResponse$inboundSchema: z.ZodType<DtoDashboardSessionResponse, z.ZodTypeDef, unknown>;
export declare function dtoDashboardSessionResponseFromJSON(jsonString: string): SafeParseResult<DtoDashboardSessionResponse, SDKValidationError>;
//# sourceMappingURL=dtodashboardsessionresponse.d.ts.map