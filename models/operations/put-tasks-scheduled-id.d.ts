import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutTasksScheduledIdRequest = {
    /**
     * Scheduled Task ID
     */
    id: string;
    /**
     * Update request (enabled: true/false to pause/resume)
     */
    body: components.DtoUpdateScheduledTaskRequest;
};
/** @internal */
export type PutTasksScheduledIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateScheduledTaskRequest$Outbound;
};
/** @internal */
export declare const PutTasksScheduledIdRequest$outboundSchema: z.ZodType<PutTasksScheduledIdRequest$Outbound, z.ZodTypeDef, PutTasksScheduledIdRequest>;
export declare function putTasksScheduledIdRequestToJSON(putTasksScheduledIdRequest: PutTasksScheduledIdRequest): string;
//# sourceMappingURL=put-tasks-scheduled-id.d.ts.map