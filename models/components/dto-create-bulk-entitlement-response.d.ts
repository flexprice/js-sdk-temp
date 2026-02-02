import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoEntitlementResponse } from "./dto-entitlement-response.js";
export type DtoCreateBulkEntitlementResponse = {
    items?: Array<DtoEntitlementResponse> | undefined;
};
/** @internal */
export declare const DtoCreateBulkEntitlementResponse$inboundSchema: z.ZodType<DtoCreateBulkEntitlementResponse, z.ZodTypeDef, unknown>;
export declare function dtoCreateBulkEntitlementResponseFromJSON(jsonString: string): SafeParseResult<DtoCreateBulkEntitlementResponse, SDKValidationError>;
//# sourceMappingURL=dto-create-bulk-entitlement-response.d.ts.map