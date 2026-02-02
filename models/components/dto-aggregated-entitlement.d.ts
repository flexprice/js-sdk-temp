import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesEntitlementUsageResetPeriod } from "./types-entitlement-usage-reset-period.js";
export type DtoAggregatedEntitlement = {
    isEnabled?: boolean | undefined;
    isSoftLimit?: boolean | undefined;
    /**
     * For static/SLA features
     */
    staticValues?: Array<string> | undefined;
    usageLimit?: number | undefined;
    usageResetPeriod?: TypesEntitlementUsageResetPeriod | undefined;
};
/** @internal */
export declare const DtoAggregatedEntitlement$inboundSchema: z.ZodType<DtoAggregatedEntitlement, z.ZodTypeDef, unknown>;
export declare function dtoAggregatedEntitlementFromJSON(jsonString: string): SafeParseResult<DtoAggregatedEntitlement, SDKValidationError>;
//# sourceMappingURL=dto-aggregated-entitlement.d.ts.map