import * as z from "zod/v3";
import { TypesS3JobConfig, TypesS3JobConfig$Outbound } from "./typess3jobconfig.js";
import { TypesScheduledTaskEntityType } from "./typesscheduledtaskentitytype.js";
import { TypesScheduledTaskInterval } from "./typesscheduledtaskinterval.js";
export type DtoCreateScheduledTaskRequest = {
    connectionId: string;
    enabled?: boolean | undefined;
    entityType: TypesScheduledTaskEntityType;
    interval: TypesScheduledTaskInterval;
    jobConfig: TypesS3JobConfig;
};
/** @internal */
export type DtoCreateScheduledTaskRequest$Outbound = {
    connection_id: string;
    enabled?: boolean | undefined;
    entity_type: string;
    interval: string;
    job_config: TypesS3JobConfig$Outbound;
};
/** @internal */
export declare const DtoCreateScheduledTaskRequest$outboundSchema: z.ZodType<DtoCreateScheduledTaskRequest$Outbound, z.ZodTypeDef, DtoCreateScheduledTaskRequest>;
export declare function dtoCreateScheduledTaskRequestToJSON(dtoCreateScheduledTaskRequest: DtoCreateScheduledTaskRequest): string;
//# sourceMappingURL=dtocreatescheduledtaskrequest.d.ts.map