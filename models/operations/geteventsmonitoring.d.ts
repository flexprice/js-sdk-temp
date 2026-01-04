import * as z from "zod/v3";
export type GetEventsMonitoringRequest = {
    /**
     * Window size for time series data (e.g., 'HOUR', 'DAY') - optional
     */
    windowSize?: string | undefined;
};
/** @internal */
export type GetEventsMonitoringRequest$Outbound = {
    window_size?: string | undefined;
};
/** @internal */
export declare const GetEventsMonitoringRequest$outboundSchema: z.ZodType<GetEventsMonitoringRequest$Outbound, z.ZodTypeDef, GetEventsMonitoringRequest>;
export declare function getEventsMonitoringRequestToJSON(getEventsMonitoringRequest: GetEventsMonitoringRequest): string;
//# sourceMappingURL=geteventsmonitoring.d.ts.map