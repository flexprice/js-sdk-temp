import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type TypesPaginationResponse = {
    limit?: number | undefined;
    offset?: number | undefined;
    total?: number | undefined;
};
/** @internal */
export declare const TypesPaginationResponse$inboundSchema: z.ZodType<TypesPaginationResponse, z.ZodTypeDef, unknown>;
export declare function typesPaginationResponseFromJSON(jsonString: string): SafeParseResult<TypesPaginationResponse, SDKValidationError>;
//# sourceMappingURL=typespaginationresponse.d.ts.map