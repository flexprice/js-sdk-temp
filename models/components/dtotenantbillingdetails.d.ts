import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoAddress, DtoAddress$Outbound } from "./dtoaddress.js";
export type DtoTenantBillingDetails = {
    address?: DtoAddress | undefined;
    email?: string | undefined;
    helpEmail?: string | undefined;
    phone?: string | undefined;
};
/** @internal */
export declare const DtoTenantBillingDetails$inboundSchema: z.ZodType<DtoTenantBillingDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type DtoTenantBillingDetails$Outbound = {
    address?: DtoAddress$Outbound | undefined;
    email?: string | undefined;
    help_email?: string | undefined;
    phone?: string | undefined;
};
/** @internal */
export declare const DtoTenantBillingDetails$outboundSchema: z.ZodType<DtoTenantBillingDetails$Outbound, z.ZodTypeDef, DtoTenantBillingDetails>;
export declare function dtoTenantBillingDetailsToJSON(dtoTenantBillingDetails: DtoTenantBillingDetails): string;
export declare function dtoTenantBillingDetailsFromJSON(jsonString: string): SafeParseResult<DtoTenantBillingDetails, SDKValidationError>;
//# sourceMappingURL=dtotenantbillingdetails.d.ts.map