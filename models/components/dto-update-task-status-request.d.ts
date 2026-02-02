import * as z from "zod/v3";
import { TypesTaskStatus } from "./types-task-status.js";
export type DtoUpdateTaskStatusRequest = {
    taskStatus: TypesTaskStatus;
};
/** @internal */
export type DtoUpdateTaskStatusRequest$Outbound = {
    task_status: string;
};
/** @internal */
export declare const DtoUpdateTaskStatusRequest$outboundSchema: z.ZodType<DtoUpdateTaskStatusRequest$Outbound, z.ZodTypeDef, DtoUpdateTaskStatusRequest>;
export declare function dtoUpdateTaskStatusRequestToJSON(dtoUpdateTaskStatusRequest: DtoUpdateTaskStatusRequest): string;
//# sourceMappingURL=dto-update-task-status-request.d.ts.map