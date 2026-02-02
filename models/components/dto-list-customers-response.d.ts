import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCustomerResponse } from "./dto-customer-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
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
//# sourceMappingURL=dto-list-customers-response.d.ts.map