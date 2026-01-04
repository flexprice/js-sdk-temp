import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoEntitlementResponse } from "./dtoentitlementresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListEntitlementsResponse = {
    items?: Array<DtoEntitlementResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListEntitlementsResponse$inboundSchema: z.ZodType<DtoListEntitlementsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<DtoListEntitlementsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistentitlementsresponse.d.ts.map