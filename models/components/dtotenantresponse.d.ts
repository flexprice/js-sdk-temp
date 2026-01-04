import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoTenantBillingDetails } from "./dtotenantbillingdetails.js";
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
//# sourceMappingURL=dtotenantresponse.d.ts.map