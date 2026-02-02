import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoBillingPeriodInfo } from "./dto-billing-period-info.js";
import { DtoFeatureUsageSummary } from "./dto-feature-usage-summary.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoCustomerUsageSummaryResponse = {
    customerId?: string | undefined;
    features?: Array<DtoFeatureUsageSummary> | undefined;
    pagination?: TypesPaginationResponse | undefined;
    period?: DtoBillingPeriodInfo | undefined;
};
/** @internal */
export declare const DtoCustomerUsageSummaryResponse$inboundSchema: z.ZodType<DtoCustomerUsageSummaryResponse, z.ZodTypeDef, unknown>;
export declare function dtoCustomerUsageSummaryResponseFromJSON(jsonString: string): SafeParseResult<DtoCustomerUsageSummaryResponse, SDKValidationError>;
//# sourceMappingURL=dto-customer-usage-summary-response.d.ts.map