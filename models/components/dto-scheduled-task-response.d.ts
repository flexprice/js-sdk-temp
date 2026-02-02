import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesS3JobConfig } from "./types-s3-job-config.js";
import { TypesScheduledTaskEntityType } from "./types-scheduled-task-entity-type.js";
import { TypesScheduledTaskInterval } from "./types-scheduled-task-interval.js";
export type DtoScheduledTaskResponse = {
    connectionId?: string | undefined;
    createdAt?: string | undefined;
    enabled?: boolean | undefined;
    entityType?: TypesScheduledTaskEntityType | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    interval?: TypesScheduledTaskInterval | undefined;
    jobConfig?: TypesS3JobConfig | undefined;
    status?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
};
/** @internal */
export declare const DtoScheduledTaskResponse$inboundSchema: z.ZodType<DtoScheduledTaskResponse, z.ZodTypeDef, unknown>;
export declare function dtoScheduledTaskResponseFromJSON(jsonString: string): SafeParseResult<DtoScheduledTaskResponse, SDKValidationError>;
//# sourceMappingURL=dto-scheduled-task-response.d.ts.map