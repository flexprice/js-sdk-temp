import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoAddress = {
    addressCity?: string | undefined;
    addressCountry?: string | undefined;
    addressLine1?: string | undefined;
    addressLine2?: string | undefined;
    addressPostalCode?: string | undefined;
    addressState?: string | undefined;
};
/** @internal */
export declare const DtoAddress$inboundSchema: z.ZodType<DtoAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type DtoAddress$Outbound = {
    address_city?: string | undefined;
    address_country?: string | undefined;
    address_line1?: string | undefined;
    address_line2?: string | undefined;
    address_postal_code?: string | undefined;
    address_state?: string | undefined;
};
/** @internal */
export declare const DtoAddress$outboundSchema: z.ZodType<DtoAddress$Outbound, z.ZodTypeDef, DtoAddress>;
export declare function dtoAddressToJSON(dtoAddress: DtoAddress): string;
export declare function dtoAddressFromJSON(jsonString: string): SafeParseResult<DtoAddress, SDKValidationError>;
//# sourceMappingURL=dto-address.d.ts.map