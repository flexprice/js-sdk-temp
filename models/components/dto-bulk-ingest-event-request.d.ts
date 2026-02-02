import * as z from "zod/v3";
import { DtoIngestEventRequest, DtoIngestEventRequest$Outbound } from "./dto-ingest-event-request.js";
export type DtoBulkIngestEventRequest = {
    events: Array<DtoIngestEventRequest>;
};
/** @internal */
export type DtoBulkIngestEventRequest$Outbound = {
    events: Array<DtoIngestEventRequest$Outbound>;
};
/** @internal */
export declare const DtoBulkIngestEventRequest$outboundSchema: z.ZodType<DtoBulkIngestEventRequest$Outbound, z.ZodTypeDef, DtoBulkIngestEventRequest>;
export declare function dtoBulkIngestEventRequestToJSON(dtoBulkIngestEventRequest: DtoBulkIngestEventRequest): string;
//# sourceMappingURL=dto-bulk-ingest-event-request.d.ts.map