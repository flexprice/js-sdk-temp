import * as z from "zod/v3";
export type GetTasksIdRequest = {
    /**
     * Task ID
     */
    id: string;
};
/** @internal */
export type GetTasksIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetTasksIdRequest$outboundSchema: z.ZodType<GetTasksIdRequest$Outbound, z.ZodTypeDef, GetTasksIdRequest>;
export declare function getTasksIdRequestToJSON(getTasksIdRequest: GetTasksIdRequest): string;
//# sourceMappingURL=gettasksid.d.ts.map