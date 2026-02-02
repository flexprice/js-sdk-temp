import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { ErrorsErrorResponse } from "./errors-error-response.js";
import { GithubComFlexpriceFlexpriceInternalDomainCustomerCustomer } from "./github-com-flexprice-flexprice-internal-domain-customer-customer.js";
import { TypesDebugTrackerStatus } from "./types-debug-tracker-status.js";
export type DtoCustomerLookupResult = {
    customer?: GithubComFlexpriceFlexpriceInternalDomainCustomerCustomer | undefined;
    error?: ErrorsErrorResponse | undefined;
    status?: TypesDebugTrackerStatus | undefined;
};
/** @internal */
export declare const DtoCustomerLookupResult$inboundSchema: z.ZodType<DtoCustomerLookupResult, z.ZodTypeDef, unknown>;
export declare function dtoCustomerLookupResultFromJSON(jsonString: string): SafeParseResult<DtoCustomerLookupResult, SDKValidationError>;
//# sourceMappingURL=dto-customer-lookup-result.d.ts.map