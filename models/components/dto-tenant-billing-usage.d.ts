import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCustomerUsageSummaryResponse } from "./dto-customer-usage-summary-response.js";
import { DtoSubscriptionResponse } from "./dto-subscription-response.js";
export type DtoTenantBillingUsage = {
    subscriptions?: Array<DtoSubscriptionResponse> | undefined;
    usage?: DtoCustomerUsageSummaryResponse | undefined;
};
/** @internal */
export declare const DtoTenantBillingUsage$inboundSchema: z.ZodType<DtoTenantBillingUsage, z.ZodTypeDef, unknown>;
export declare function dtoTenantBillingUsageFromJSON(jsonString: string): SafeParseResult<DtoTenantBillingUsage, SDKValidationError>;
//# sourceMappingURL=dto-tenant-billing-usage.d.ts.map