import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoEntitlementResponse } from "./dto-entitlement-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListEntitlementsResponse = {
    items?: Array<DtoEntitlementResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListEntitlementsResponse$inboundSchema: z.ZodType<DtoListEntitlementsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<DtoListEntitlementsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-entitlements-response.d.ts.map