import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
export declare class Events extends ClientSDK {
    /**
     * Ingest event
     *
     * @remarks
     * Ingest a new event into the system
     */
    postEvents(request: components.DtoIngestEventRequest, options?: RequestOptions): Promise<{
        [k: string]: string;
    }>;
    /**
     * Get usage analytics
     *
     * @remarks
     * Retrieve comprehensive usage analytics with filtering, grouping, and time-series data
     */
    postEventsAnalytics(request: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array, options?: RequestOptions): Promise<components.DtoGetUsageAnalyticsResponse>;
    /**
     * Bulk Ingest events
     *
     * @remarks
     * Ingest bulk events into the system
     */
    postEventsBulk(request: components.DtoBulkIngestEventRequest, options?: RequestOptions): Promise<{
        [k: string]: string;
    }>;
    /**
     * Get hugging face inference data
     *
     * @remarks
     * Retrieve hugging face inference data for events
     */
    postEventsHuggingfaceInference(options?: RequestOptions): Promise<components.DtoGetHuggingFaceBillingDataResponse>;
    /**
     * Get monitoring data
     *
     * @remarks
     * Retrieve monitoring data for events including consumer lag and event metrics (last 24 hours by default)
     */
    getEventsMonitoring(windowSize?: string | undefined, options?: RequestOptions): Promise<components.DtoGetMonitoringDataResponse>;
    /**
     * List raw events
     *
     * @remarks
     * Retrieve raw events with pagination and filtering
     */
    postEventsQuery(request: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array, options?: RequestOptions): Promise<components.DtoGetEventsResponse>;
    /**
     * Get usage statistics
     *
     * @remarks
     * Retrieve aggregated usage statistics for events
     */
    postEventsUsage(request: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array, options?: RequestOptions): Promise<components.DtoGetUsageResponse>;
    /**
     * Get usage by meter
     *
     * @remarks
     * Retrieve aggregated usage statistics using meter configuration
     */
    postEventsUsageMeter(request: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array, options?: RequestOptions): Promise<components.DtoGetUsageResponse>;
}
//# sourceMappingURL=events.d.ts.map