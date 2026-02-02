import * as z from "zod/v3";
export type DtoUpdateScheduledTaskRequest = {
    enabled: boolean;
};
/** @internal */
export type DtoUpdateScheduledTaskRequest$Outbound = {
    enabled: boolean;
};
/** @internal */
export declare const DtoUpdateScheduledTaskRequest$outboundSchema: z.ZodType<DtoUpdateScheduledTaskRequest$Outbound, z.ZodTypeDef, DtoUpdateScheduledTaskRequest>;
export declare function dtoUpdateScheduledTaskRequestToJSON(dtoUpdateScheduledTaskRequest: DtoUpdateScheduledTaskRequest): string;
//# sourceMappingURL=dto-update-scheduled-task-request.d.ts.map