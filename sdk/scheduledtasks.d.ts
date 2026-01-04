import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class ScheduledTasks extends ClientSDK {
    /**
     * List scheduled tasks
     *
     * @remarks
     * Get a list of scheduled tasks with optional filters
     */
    getTasksScheduled(request: operations.GetTasksScheduledRequest, options?: RequestOptions): Promise<components.DtoListScheduledTasksResponse>;
    /**
     * Create a scheduled task
     *
     * @remarks
     * Create a new scheduled task for data export
     */
    postTasksScheduled(request: components.DtoCreateScheduledTaskRequest, options?: RequestOptions): Promise<components.DtoScheduledTaskResponse>;
    /**
     * Schedule update billing period
     *
     * @remarks
     * Schedule an update billing period workflow
     */
    postTasksScheduledScheduleUpdateBillingPeriod(request: operations.PostTasksScheduledScheduleUpdateBillingPeriodRequest, options?: RequestOptions): Promise<operations.PostTasksScheduledScheduleUpdateBillingPeriodResponse>;
    /**
     * Get a scheduled task
     *
     * @remarks
     * Get a scheduled task by ID
     */
    getTasksScheduledId(id: string, options?: RequestOptions): Promise<components.DtoScheduledTaskResponse>;
    /**
     * Update a scheduled task
     *
     * @remarks
     * Update a scheduled task by ID - Only enabled field can be changed (pause/resume)
     */
    putTasksScheduledId(id: string, body: components.DtoUpdateScheduledTaskRequest, options?: RequestOptions): Promise<components.DtoScheduledTaskResponse>;
    /**
     * Delete a scheduled task
     *
     * @remarks
     * Archive a scheduled task by ID (soft delete) - Sets status to archived and deletes from Temporal
     */
    deleteTasksScheduledId(id: string, options?: RequestOptions): Promise<void>;
    /**
     * Trigger force run
     *
     * @remarks
     * Trigger a force run export immediately for a scheduled task with optional custom time range
     */
    postTasksScheduledIdRun(id: string, body?: components.DtoTriggerForceRunRequest | undefined, options?: RequestOptions): Promise<components.DtoTriggerForceRunResponse>;
}
//# sourceMappingURL=scheduledtasks.d.ts.map