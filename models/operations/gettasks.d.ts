import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetTasksEntityType: {
    readonly Events: "EVENTS";
    readonly Prices: "PRICES";
    readonly Customers: "CUSTOMERS";
};
export type GetTasksEntityType = ClosedEnum<typeof GetTasksEntityType>;
export declare const GetTasksOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetTasksOrder = ClosedEnum<typeof GetTasksOrder>;
export declare const GetTasksStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetTasksStatus = ClosedEnum<typeof GetTasksStatus>;
export declare const TaskStatus: {
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
    readonly Completed: "COMPLETED";
    readonly Failed: "FAILED";
};
export type TaskStatus = ClosedEnum<typeof TaskStatus>;
export declare const TaskType: {
    readonly Import: "IMPORT";
    readonly Export: "EXPORT";
};
export type TaskType = ClosedEnum<typeof TaskType>;
export type GetTasksRequest = {
    createdBy?: string | undefined;
    endTime?: string | undefined;
    entityType?: GetTasksEntityType | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetTasksOrder | undefined;
    scheduledTaskId?: string | undefined;
    sort?: string | undefined;
    startTime?: string | undefined;
    status?: GetTasksStatus | undefined;
    taskStatus?: TaskStatus | undefined;
    taskType?: TaskType | undefined;
};
/** @internal */
export declare const GetTasksEntityType$outboundSchema: z.ZodNativeEnum<typeof GetTasksEntityType>;
/** @internal */
export declare const GetTasksOrder$outboundSchema: z.ZodNativeEnum<typeof GetTasksOrder>;
/** @internal */
export declare const GetTasksStatus$outboundSchema: z.ZodNativeEnum<typeof GetTasksStatus>;
/** @internal */
export declare const TaskStatus$outboundSchema: z.ZodNativeEnum<typeof TaskStatus>;
/** @internal */
export declare const TaskType$outboundSchema: z.ZodNativeEnum<typeof TaskType>;
/** @internal */
export type GetTasksRequest$Outbound = {
    created_by?: string | undefined;
    end_time?: string | undefined;
    entity_type?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    scheduled_task_id?: string | undefined;
    sort?: string | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
    task_status?: string | undefined;
    task_type?: string | undefined;
};
/** @internal */
export declare const GetTasksRequest$outboundSchema: z.ZodType<GetTasksRequest$Outbound, z.ZodTypeDef, GetTasksRequest>;
export declare function getTasksRequestToJSON(getTasksRequest: GetTasksRequest): string;
//# sourceMappingURL=gettasks.d.ts.map