import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoTenantBillingDetails } from "./dto-tenant-billing-details.js";
export type DtoTenantResponse = {
    billingDetails?: DtoTenantBillingDetails | undefined;
    createdAt?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    status?: string | undefined;
    updatedAt?: string | undefined;
};
/** @internal */
export declare const DtoTenantResponse$inboundSchema: z.ZodType<DtoTenantResponse, z.ZodTypeDef, unknown>;
export declare function dtoTenantResponseFromJSON(jsonString: string): SafeParseResult<DtoTenantResponse, SDKValidationError>;
//# sourceMappingURL=dto-tenant-response.d.ts.map