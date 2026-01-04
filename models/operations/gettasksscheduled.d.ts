import * as z from "zod/v3";
export type GetTasksScheduledRequest = {
    /**
     * Limit
     */
    limit?: number | undefined;
    /**
     * Offset
     */
    offset?: number | undefined;
    /**
     * Filter by connection ID
     */
    connectionId?: string | undefined;
    /**
     * Filter by entity type
     */
    entityType?: string | undefined;
    /**
     * Filter by interval
     */
    interval?: string | undefined;
    /**
     * Filter by enabled status
     */
    enabled?: boolean | undefined;
};
/** @internal */
export type GetTasksScheduledRequest$Outbound = {
    limit?: number | undefined;
    offset?: number | undefined;
    connection_id?: string | undefined;
    entity_type?: string | undefined;
    interval?: string | undefined;
    enabled?: boolean | undefined;
};
/** @internal */
export declare const GetTasksScheduledRequest$outboundSchema: z.ZodType<GetTasksScheduledRequest$Outbound, z.ZodTypeDef, GetTasksScheduledRequest>;
export declare function getTasksScheduledRequestToJSON(getTasksScheduledRequest: GetTasksScheduledRequest): string;
//# sourceMappingURL=gettasksscheduled.d.ts.map