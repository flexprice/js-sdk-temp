import * as z from "zod/v3";
export type DtoIngestEventRequest = {
    customerId?: string | undefined;
    eventId?: string | undefined;
    eventName: string;
    externalCustomerId: string;
    /**
     * Handled separately for dynamic columns
     */
    properties?: {
        [k: string]: string;
    } | undefined;
    source?: string | undefined;
    /**
     * Handled separately due to parsing
     */
    timestamp?: string | undefined;
};
/** @internal */
export type DtoIngestEventRequest$Outbound = {
    customer_id?: string | undefined;
    event_id?: string | undefined;
    event_name: string;
    external_customer_id: string;
    properties?: {
        [k: string]: string;
    } | undefined;
    source?: string | undefined;
    timestamp?: string | undefined;
};
/** @internal */
export declare const DtoIngestEventRequest$outboundSchema: z.ZodType<DtoIngestEventRequest$Outbound, z.ZodTypeDef, DtoIngestEventRequest>;
export declare function dtoIngestEventRequestToJSON(dtoIngestEventRequest: DtoIngestEventRequest): string;
//# sourceMappingURL=dto-ingest-event-request.d.ts.map