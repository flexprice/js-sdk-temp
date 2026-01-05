import * as z from "zod/v3";
import { TypesWindowSize } from "./typeswindowsize.js";
export type DtoDashboardAnalyticsRequest = {
    endTime?: string | undefined;
    expand?: Array<string> | undefined;
    featureIds?: Array<string> | undefined;
    groupBy?: Array<string> | undefined;
    propertyFilters?: {
        [k: string]: Array<string>;
    } | undefined;
    sources?: Array<string> | undefined;
    startTime?: string | undefined;
    windowSize?: TypesWindowSize | undefined;
};
/** @internal */
export type DtoDashboardAnalyticsRequest$Outbound = {
    end_time?: string | undefined;
    expand?: Array<string> | undefined;
    feature_ids?: Array<string> | undefined;
    group_by?: Array<string> | undefined;
    property_filters?: {
        [k: string]: Array<string>;
    } | undefined;
    sources?: Array<string> | undefined;
    start_time?: string | undefined;
    window_size?: string | undefined;
};
/** @internal */
export declare const DtoDashboardAnalyticsRequest$outboundSchema: z.ZodType<DtoDashboardAnalyticsRequest$Outbound, z.ZodTypeDef, DtoDashboardAnalyticsRequest>;
export declare function dtoDashboardAnalyticsRequestToJSON(dtoDashboardAnalyticsRequest: DtoDashboardAnalyticsRequest): string;
//# sourceMappingURL=dtodashboardanalyticsrequest.d.ts.map