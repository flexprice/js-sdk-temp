import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesEntityType } from "./typesentitytype.js";
import { TypesFileType } from "./typesfiletype.js";
import { TypesStatus } from "./typesstatus.js";
import { TypesTaskStatus } from "./typestaskstatus.js";
import { TypesTaskType } from "./typestasktype.js";
export type DtoTaskResponse = {
    completedAt?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    entityType?: TypesEntityType | undefined;
    environmentId?: string | undefined;
    errorSummary?: string | undefined;
    failedAt?: string | undefined;
    failedRecords?: number | undefined;
    fileName?: string | undefined;
    fileType?: TypesFileType | undefined;
    fileUrl?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    processedRecords?: number | undefined;
    scheduledTaskId?: string | undefined;
    startedAt?: string | undefined;
    status?: TypesStatus | undefined;
    successfulRecords?: number | undefined;
    taskStatus?: TypesTaskStatus | undefined;
    taskType?: TypesTaskType | undefined;
    tenantId?: string | undefined;
    totalRecords?: number | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    workflowId?: string | undefined;
};
/** @internal */
export declare const DtoTaskResponse$inboundSchema: z.ZodType<DtoTaskResponse, z.ZodTypeDef, unknown>;
export declare function dtoTaskResponseFromJSON(jsonString: string): SafeParseResult<DtoTaskResponse, SDKValidationError>;
//# sourceMappingURL=dtotaskresponse.d.ts.map