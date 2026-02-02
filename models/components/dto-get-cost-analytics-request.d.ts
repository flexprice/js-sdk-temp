import * as z from "zod/v3";
export type DtoGetCostAnalyticsRequest = {
    endTime?: string | undefined;
    /**
     * Expand options - specify which entities to expand
     */
    expand?: Array<string> | undefined;
    /**
     * Optional - for specific customer
     */
    externalCustomerId?: string | undefined;
    /**
     * Additional filters
     */
    featureIds?: Array<string> | undefined;
    /**
     * Pagination
     */
    limit?: number | undefined;
    offset?: number | undefined;
    /**
     * Time range fields (optional - defaults to last 7 days if not provided)
     */
    startTime?: string | undefined;
};
/** @internal */
export type DtoGetCostAnalyticsRequest$Outbound = {
    end_time?: string | undefined;
    expand?: Array<string> | undefined;
    external_customer_id?: string | undefined;
    feature_ids?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    start_time?: string | undefined;
};
/** @internal */
export declare const DtoGetCostAnalyticsRequest$outboundSchema: z.ZodType<DtoGetCostAnalyticsRequest$Outbound, z.ZodTypeDef, DtoGetCostAnalyticsRequest>;
export declare function dtoGetCostAnalyticsRequestToJSON(dtoGetCostAnalyticsRequest: DtoGetCostAnalyticsRequest): string;
//# sourceMappingURL=dto-get-cost-analytics-request.d.ts.map