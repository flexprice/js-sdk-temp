import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Tasks extends ClientSDK {
    /**
     * List tasks
     *
     * @remarks
     * List tasks with optional filtering
     */
    getTasks(request: operations.GetTasksRequest, options?: RequestOptions): Promise<components.DtoListTasksResponse>;
    /**
     * Create a new task
     *
     * @remarks
     * Create a new task for processing files asynchronously
     */
    postTasks(request: components.DtoCreateTaskRequest, options?: RequestOptions): Promise<components.DtoTaskResponse>;
    /**
     * Get task processing result
     *
     * @remarks
     * Get the result of a task processing workflow
     */
    getTasksResult(workflowId: string, options?: RequestOptions): Promise<components.ModelsTemporalWorkflowResult>;
    /**
     * Get a task
     *
     * @remarks
     * Get a task by ID
     */
    getTasksId(id: string, options?: RequestOptions): Promise<components.DtoTaskResponse>;
    /**
     * Update task status
     *
     * @remarks
     * Update a task's status
     */
    putTasksIdStatus(id: string, body: components.DtoUpdateTaskStatusRequest, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
}
//# sourceMappingURL=tasks.d.ts.map