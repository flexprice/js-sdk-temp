import * as z from "zod/v3";
export type GetTasksIdDownloadRequest = {
    /**
     * Task ID
     */
    id: string;
};
/** @internal */
export type GetTasksIdDownloadRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetTasksIdDownloadRequest$outboundSchema: z.ZodType<GetTasksIdDownloadRequest$Outbound, z.ZodTypeDef, GetTasksIdDownloadRequest>;
export declare function getTasksIdDownloadRequestToJSON(getTasksIdDownloadRequest: GetTasksIdDownloadRequest): string;
//# sourceMappingURL=get-tasks-id-download.d.ts.map