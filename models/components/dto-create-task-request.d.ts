import * as z from "zod/v3";
import { TypesEntityType } from "./types-entity-type.js";
import { TypesFileType } from "./types-file-type.js";
import { TypesTaskType } from "./types-task-type.js";
export type DtoCreateTaskRequest = {
    entityType: TypesEntityType;
    fileName?: string | undefined;
    fileType: TypesFileType;
    fileUrl: string;
    metadata?: {
        [k: string]: any;
    } | undefined;
    taskType: TypesTaskType;
};
/** @internal */
export type DtoCreateTaskRequest$Outbound = {
    entity_type: string;
    file_name?: string | undefined;
    file_type: string;
    file_url: string;
    metadata?: {
        [k: string]: any;
    } | undefined;
    task_type: string;
};
/** @internal */
export declare const DtoCreateTaskRequest$outboundSchema: z.ZodType<DtoCreateTaskRequest$Outbound, z.ZodTypeDef, DtoCreateTaskRequest>;
export declare function dtoCreateTaskRequestToJSON(dtoCreateTaskRequest: DtoCreateTaskRequest): string;
//# sourceMappingURL=dto-create-task-request.d.ts.map