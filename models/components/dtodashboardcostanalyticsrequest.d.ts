import * as z from "zod/v3";
export type DtoDashboardCostAnalyticsRequest = {
    endTime: string;
    featureIds?: Array<string> | undefined;
    startTime: string;
};
/** @internal */
export type DtoDashboardCostAnalyticsRequest$Outbound = {
    end_time: string;
    feature_ids?: Array<string> | undefined;
    start_time: string;
};
/** @internal */
export declare const DtoDashboardCostAnalyticsRequest$outboundSchema: z.ZodType<DtoDashboardCostAnalyticsRequest$Outbound, z.ZodTypeDef, DtoDashboardCostAnalyticsRequest>;
export declare function dtoDashboardCostAnalyticsRequestToJSON(dtoDashboardCostAnalyticsRequest: DtoDashboardCostAnalyticsRequest): string;
//# sourceMappingURL=dtodashboardcostanalyticsrequest.d.ts.map