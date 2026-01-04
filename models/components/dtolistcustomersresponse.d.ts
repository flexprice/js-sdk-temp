import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoCustomerResponse } from "./dtocustomerresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
/**
 * Response object for listing customers with pagination
 */
export type DtoListCustomersResponse = {
    items?: Array<DtoCustomerResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListCustomersResponse$inboundSchema: z.ZodType<DtoListCustomersResponse, z.ZodTypeDef, unknown>;
export declare function dtoListCustomersResponseFromJSON(jsonString: string): SafeParseResult<DtoListCustomersResponse, SDKValidationError>;
//# sourceMappingURL=dtolistcustomersresponse.d.ts.map