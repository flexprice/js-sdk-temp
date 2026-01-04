import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoBillingPeriodInfo } from "./dtobillingperiodinfo.js";
import { DtoFeatureUsageSummary } from "./dtofeatureusagesummary.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoCustomerUsageSummaryResponse = {
    customerId?: string | undefined;
    features?: Array<DtoFeatureUsageSummary> | undefined;
    pagination?: TypesPaginationResponse | undefined;
    period?: DtoBillingPeriodInfo | undefined;
};
/** @internal */
export declare const DtoCustomerUsageSummaryResponse$inboundSchema: z.ZodType<DtoCustomerUsageSummaryResponse, z.ZodTypeDef, unknown>;
export declare function dtoCustomerUsageSummaryResponseFromJSON(jsonString: string): SafeParseResult<DtoCustomerUsageSummaryResponse, SDKValidationError>;
//# sourceMappingURL=dtocustomerusagesummaryresponse.d.ts.map