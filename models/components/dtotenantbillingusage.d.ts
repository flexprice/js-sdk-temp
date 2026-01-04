import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoCustomerUsageSummaryResponse } from "./dtocustomerusagesummaryresponse.js";
import { DtoSubscriptionResponse } from "./dtosubscriptionresponse.js";
export type DtoTenantBillingUsage = {
    subscriptions?: Array<DtoSubscriptionResponse> | undefined;
    usage?: DtoCustomerUsageSummaryResponse | undefined;
};
/** @internal */
export declare const DtoTenantBillingUsage$inboundSchema: z.ZodType<DtoTenantBillingUsage, z.ZodTypeDef, unknown>;
export declare function dtoTenantBillingUsageFromJSON(jsonString: string): SafeParseResult<DtoTenantBillingUsage, SDKValidationError>;
//# sourceMappingURL=dtotenantbillingusage.d.ts.map