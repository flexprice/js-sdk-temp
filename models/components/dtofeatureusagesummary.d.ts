import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoEntitlementSource } from "./dtoentitlementsource.js";
import { DtoFeatureResponse } from "./dtofeatureresponse.js";
export type DtoFeatureUsageSummary = {
    currentUsage?: string | undefined;
    feature?: DtoFeatureResponse | undefined;
    isEnabled?: boolean | undefined;
    isSoftLimit?: boolean | undefined;
    isUnlimited?: boolean | undefined;
    nextUsageResetAt?: string | undefined;
    sources?: Array<DtoEntitlementSource> | undefined;
    totalLimit?: number | undefined;
    usagePercent?: string | undefined;
};
/** @internal */
export declare const DtoFeatureUsageSummary$inboundSchema: z.ZodType<DtoFeatureUsageSummary, z.ZodTypeDef, unknown>;
export declare function dtoFeatureUsageSummaryFromJSON(jsonString: string): SafeParseResult<DtoFeatureUsageSummary, SDKValidationError>;
//# sourceMappingURL=dtofeatureusagesummary.d.ts.map