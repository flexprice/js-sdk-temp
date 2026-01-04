import * as z from "zod/v3";
export type GetTasksResultRequest = {
    /**
     * Workflow ID
     */
    workflowId: string;
};
/** @internal */
export type GetTasksResultRequest$Outbound = {
    workflow_id: string;
};
/** @internal */
export declare const GetTasksResultRequest$outboundSchema: z.ZodType<GetTasksResultRequest$Outbound, z.ZodTypeDef, GetTasksResultRequest>;
export declare function getTasksResultRequestToJSON(getTasksResultRequest: GetTasksResultRequest): string;
//# sourceMappingURL=gettasksresult.d.ts.map