import * as z from "zod/v3";
export type DeleteTasksScheduledIdRequest = {
    /**
     * Scheduled Task ID
     */
    id: string;
};
/** @internal */
export type DeleteTasksScheduledIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteTasksScheduledIdRequest$outboundSchema: z.ZodType<DeleteTasksScheduledIdRequest$Outbound, z.ZodTypeDef, DeleteTasksScheduledIdRequest>;
export declare function deleteTasksScheduledIdRequestToJSON(deleteTasksScheduledIdRequest: DeleteTasksScheduledIdRequest): string;
//# sourceMappingURL=deletetasksscheduledid.d.ts.map