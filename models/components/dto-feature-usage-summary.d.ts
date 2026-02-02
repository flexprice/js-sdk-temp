import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoEntitlementSource } from "./dto-entitlement-source.js";
import { DtoFeatureResponse } from "./dto-feature-response.js";
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
//# sourceMappingURL=dto-feature-usage-summary.d.ts.map