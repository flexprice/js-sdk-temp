import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoUsageAnalyticPoint = {
    /**
     * Commitment breakdown (only populated for windowed commitments)
     */
    computedCommitmentUtilizedAmount?: string | undefined;
    computedOverageAmount?: string | undefined;
    computedTrueUpAmount?: string | undefined;
    cost?: string | undefined;
    /**
     * Number of events in this time window
     */
    eventCount?: number | undefined;
    timestamp?: string | undefined;
    usage?: string | undefined;
};
/** @internal */
export declare const DtoUsageAnalyticPoint$inboundSchema: z.ZodType<DtoUsageAnalyticPoint, z.ZodTypeDef, unknown>;
export declare function dtoUsageAnalyticPointFromJSON(jsonString: string): SafeParseResult<DtoUsageAnalyticPoint, SDKValidationError>;
//# sourceMappingURL=dto-usage-analytic-point.d.ts.map