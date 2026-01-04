import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesEntitlementUsageResetPeriod } from "./typesentitlementusageresetperiod.js";
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
//# sourceMappingURL=dtoaggregatedentitlement.d.ts.map