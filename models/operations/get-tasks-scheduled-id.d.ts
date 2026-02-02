import * as z from "zod/v3";
export type GetTasksScheduledIdRequest = {
    /**
     * Scheduled Task ID
     */
    id: string;
};
/** @internal */
export type GetTasksScheduledIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetTasksScheduledIdRequest$outboundSchema: z.ZodType<GetTasksScheduledIdRequest$Outbound, z.ZodTypeDef, GetTasksScheduledIdRequest>;
export declare function getTasksScheduledIdRequestToJSON(getTasksScheduledIdRequest: GetTasksScheduledIdRequest): string;
//# sourceMappingURL=get-tasks-scheduled-id.d.ts.map