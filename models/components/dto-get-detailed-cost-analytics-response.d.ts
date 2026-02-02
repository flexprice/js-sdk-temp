import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCostAnalyticItem } from "./dto-cost-analytic-item.js";
export type DtoGetDetailedCostAnalyticsResponse = {
    /**
     * Cost analytics array (flattened from nested structure)
     */
    costAnalytics?: Array<DtoCostAnalyticItem> | undefined;
    currency?: string | undefined;
    endTime?: string | undefined;
    /**
     * Revenue - Cost
     */
    margin?: string | undefined;
    /**
     * (Margin / Revenue) * 100
     */
    marginPercent?: string | undefined;
    /**
     * (Revenue - Cost) / Cost
     */
    roi?: string | undefined;
    /**
     * ROI * 100
     */
    roiPercent?: string | undefined;
    startTime?: string | undefined;
    totalCost?: string | undefined;
    /**
     * Derived metrics
     */
    totalRevenue?: string | undefined;
};
/** @internal */
export declare const DtoGetDetailedCostAnalyticsResponse$inboundSchema: z.ZodType<DtoGetDetailedCostAnalyticsResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetDetailedCostAnalyticsResponseFromJSON(jsonString: string): SafeParseResult<DtoGetDetailedCostAnalyticsResponse, SDKValidationError>;
//# sourceMappingURL=dto-get-detailed-cost-analytics-response.d.ts.map